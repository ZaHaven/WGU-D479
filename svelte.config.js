import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// Replace 'your-repo-name' with your exact GitHub repository name
			// Leave as empty string '' if using a custom domain or a user page (<username>.github.io)
			base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
		}
	}
};

export default config;
