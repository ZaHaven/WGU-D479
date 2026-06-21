<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { cn } from '$lib/utils';

	let { bg, img, name, sub, highlights = undefined, facts = undefined, ratio = 3/4, class: className = '' }:
		{ bg: string; img: string; name: string; sub: string; highlights?: string[]; facts?: string[]; ratio?: number; class?: string; } = $props();
</script>

<AspectRatio {ratio} class={cn(`bg-[${bg}]`, className)}>
	<img src={img} alt={name} class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale" />

	<div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/75 to-transparent from-10% via-45%" ></div>

	<div class="absolute bottom-0 left-0 right-0 p-6">
		<p class="text-accent-foreground text-[10px] tracking-[0.22em] uppercase mb-1.5">{sub}</p>
		<h3 class="text-accent-foreground mb-3 font-serif text-2xl/1.1 font-semibold">
			{name}
		</h3>
		{#if highlights && highlights.length > 0}
			<ul class="space-y-1.5 mb-4">
				{#each highlights as highlight (highlight)}
					<li class="text-white/75 text-sm flex items-start gap-2">
						<span class="text-white/35 mt-px shrink-0">—</span>
						{highlight}
					</li>
				{/each}
			</ul>
		{/if}

		{#if facts && facts.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each facts as fact (fact)}
					<span class="text-[11px] bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-md">
						{fact}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</AspectRatio>