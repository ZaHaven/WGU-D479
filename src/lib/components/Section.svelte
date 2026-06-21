<script lang="ts">

	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let { id, header, tagline, description, class: className = '', children }: {
		id: string;
		header: string,
		tagline: string,
		description: string,
		class?: string,
		children: Snippet
	} = $props();
</script>

<section id={id} class={cn('py-24 bg-background', className)}>
	<div class="max-w-7xl mx-auto px-6">
		<div class="mb-14 max-w-xl">
			<p class="text-muted-foreground text-[10px] tracking-[0.28em] uppercase mb-3">
				{header}
			</p>
			<h2 class="leading-[0.93] tracking-tight mb-4">
				{tagline}
			</h2>
			<p class="text-muted-foreground leading-relaxed text-sm">
				{description}
			</p>
		</div>

		<div>
			{@render children()}
		</div>
	</div>
</section>