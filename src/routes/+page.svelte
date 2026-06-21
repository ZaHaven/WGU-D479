<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import NaturalSights from './NaturalSights.svelte';
	import WhereToStay from './WhereToStay.svelte';
	import WhereToEat from './WhereToEat.svelte';
	import Transport from './Transport.svelte';
	import { ChevronDown, Menu, X } from '@lucide/svelte';
	import FAQ from './FAQ.svelte';
	import { resolve } from '$app/paths';
	import Entertainment from './Entertainment.svelte';

	const NAV_LINKS = [
		{ label: "Sights", target: "sights" },
		{ label: "Entertainment", target: "entertainment" },
		{ label: "Stay", target: "stay" },
		{ label: "Dine", target: "dine" },
		{ label: "Transport", target: "transport" },
	];

	let mobileOpen = $state(false);

	let navScrolled = $state(false);
	$effect(() => {
		const onScroll = () => navScrolled = window.scrollY > 60;
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	});
</script>

<div class="flex flex-col w-full">
	<nav
		class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navScrolled
            ? "bg-background/96 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
	>
		<div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
			<a
				href={resolve('/#')}
				class={`font-serif text-lg font-semibold tracking-tight transition-colors ${navScrolled ? "text-foreground" : "text-white"}`}
			>
				Taniti
			</a>

			<div class="hidden md:flex items-center gap-7">
				{#each NAV_LINKS as link (link.target)}
					<a href={resolve(`/#${link.target}`)} class={`text-sm font-medium transition-colors hover:opacity-60 ${navScrolled ? "text-foreground" : "text-white"}`}>
						{link.label}
					</a>
				{/each}
			</div>

			<button
				class={`md:hidden transition-colors ${navScrolled ? "text-foreground" : "text-white"}`}
				onclick={() => mobileOpen = !mobileOpen}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<X size={22} />
				{:else}
					<Menu size={22} />
				{/if}
			</button>
		</div>

		{#if mobileOpen}
			<div class="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
				{#each NAV_LINKS as link (link.target)}
					<a
						href={resolve(`/#${link.target}`)}
						class="block text-sm font-medium py-1 text-foreground"
						onclick={() => mobileOpen = false}
					>
						{link.label}
					</a>
					{/each}
			</div>
		{/if}
	</nav>

	<section class="relative h-screen min-h-160 flex items-end pb-20 overflow-hidden">
		<div class="absolute inset-0 bg-[#08160A]">
			<img
				src="https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?w=1800&h=1200&fit=crop&auto=format"
				alt="Palm-lined white sand beach of Taniti"
				class="w-full h-full object-cover opacity-70"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-[#08160A]/85 via-[#08160A]/10 to-[#08160A]/30"></div>
		</div>

		<div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
			<div class="max-w-3xl">
				<p class="text-white/60 text-xs tracking-[0.28em] uppercase mb-5 font-medium">
					Caribbean Sea — 14°N, 83°W
				</p>
				<h1 class="leading-[0.9] tracking-tight text-white mb-6 font-serif">
					Island of
					<br/>
					<span class="font-serif italic text-4xl text-accent">Taniti</span>
				</h1>
				<p class="text-white/75 text-lg max-w-lg mb-8 leading-relaxed font-light">
					Volcanic peaks. Ancient rainforest. Caribbean waters so clear you can count the fish from the dock.
					An island unlike anywhere else.
				</p>
				<div class="flex flex-wrap gap-3">
					<a href="#sights" class="bg-white text-[#08160A] px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
						Explore the Island
					</a>
				</div>
			</div>
		</div>

		<a
			href="#sights"
			class="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
		>
			<ChevronDown size={26} class="animate-bounce" />
		</a>
	</section>

	<Section id="sights" header="Natural Sights" description="" tagline="">
		<NaturalSights />
	</Section>

	<Section id="entertainment" header="Entertainment" description="" tagline="">
		<Entertainment />
	</Section>

	<Section id="stay" header="Where to Stay" description="" tagline="" class="bg-accent/10">
		<WhereToStay />
	</Section>

	<Section id="dine" header="Where to Eat" description="" tagline="">
		<WhereToEat />
	</Section>

	<Section id="transport" header="Transport" description="" tagline="" class="bg-accent/10">
		<Transport />
	</Section>

	<FAQ />
</div>
