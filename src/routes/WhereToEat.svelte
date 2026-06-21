<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { Badge } from '$lib/components/ui/badge';
	import { ToggleGroupItem } from '$lib/components/ui/toggle-group';
	import { Star, Clock } from '@lucide/svelte';

	const categories = [
		{ id: "all", label: "All (10)" },
		{ id: "fish", label: "Fish & Rice" },
		{ id: "american", label: "American" },
		{ id: "asian", label: "Pan-Asian" },
	];

	const allRestaurants = [
		{
			category: "fish",
			name: "Mariscos La Bahía",
			sub: "Harbor District",
			img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=480&fit=crop&auto=format",
			price: "$$",
			rating: 4.8,
			hours: "12 pm – 10 pm",
			must: "Grilled whole snapper over coconut rice",
		},
		{
			category: "fish",
			name: "El Pescador",
			sub: "Fisherman's Wharf",
			img: "https://images.unsplash.com/photo-1562158079-e4b9ed06b62d?w=600&h=480&fit=crop&auto=format",
			price: "$",
			rating: 4.5,
			hours: "7 am – 4 pm",
			must: "Daily catch plate, black bean rice",
		},
		{
			category: "fish",
			name: "Playa Chiringuito",
			sub: "West Shore",
			img: "https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?w=600&h=480&fit=crop&auto=format",
			price: "$",
			rating: 4.5,
			hours: "8 am – sunset",
			must: "Fish sandwich, coconut rice bowl",
		},
		{
			category: "fish",
			name: "La Ola Azul",
			sub: "Cliffside Terrace",
			img: "https://images.unsplash.com/photo-1600582910964-5b7c109e6868?w=600&h=480&fit=crop&auto=format",
			price: "$$",
			rating: 4.6,
			hours: "11 am – 9 pm",
			must: "Tuna poke over saffron rice",
		},
		{
			category: "fish",
			name: "Casa del Mar",
			sub: "South Lagoon",
			img: "https://images.unsplash.com/photo-1688541197205-02bd8c71074d?w=600&h=480&fit=crop&auto=format",
			price: "$$",
			rating: 4.7,
			hours: "12 pm – 9 pm",
			must: "Shrimp and crab rice casserole",
		},
		{
			category: "american",
			name: "The Island Grill",
			sub: "Puerto Centro",
			img: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=600&h=480&fit=crop&auto=format",
			price: "$$",
			rating: 4.3,
			hours: "11 am – 11 pm",
			must: "Smash burger, island-spiced fries",
		},
		{
			category: "american",
			name: "Sunrise Diner",
			sub: "Old Town",
			img: "https://images.unsplash.com/photo-1651510689024-0e9c3bc79063?w=600&h=480&fit=crop&auto=format",
			price: "$",
			rating: 4.4,
			hours: "7 am – 2 pm",
			must: "Buttermilk pancakes, loaded breakfast plate",
		},
		{
			category: "american",
			name: "Harbor House",
			sub: "Marina District",
			img: "https://images.unsplash.com/photo-1777863895689-3da81ec075e1?w=600&h=480&fit=crop&auto=format",
			price: "$$$",
			rating: 4.6,
			hours: "5 pm – 10 pm",
			must: "Dry-aged ribeye, New York cheesecake",
		},
		{
			category: "asian",
			name: "Bamboo Garden",
			sub: "Central Village",
			img: "https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?w=600&h=480&fit=crop&auto=format",
			price: "$$",
			rating: 4.7,
			hours: "12 pm – 10 pm",
			must: "Dim sum brunch, black sesame ice cream",
		},
		{
			category: "asian",
			name: "Spice Route",
			sub: "East Quarter",
			img: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&h=480&fit=crop&auto=format",
			price: "$$",
			rating: 4.8,
			hours: "5 pm – 11 pm",
			must: "Thai green curry, Vietnamese banh mi",
		},
	];

	let selectedCategory = $state("all");

	const restaurants = $derived.by(() => {
		if (selectedCategory === 'all') {
			return allRestaurants;
		}

		return allRestaurants.filter(r => r.category === selectedCategory);
	})

</script>

{#snippet categoryLabel(id: string)}
	{#if id === 'fish'}
		<Badge class="bg-blue-900">Fish &amp; Rice</Badge>
		{:else if id === 'american'}
		<Badge class="bg-accent">American</Badge>
		{:else if id === 'asian'}
		<Badge class="bg-green-900">Pan-Asian</Badge>
		{:else}
		<div></div>
	{/if}
{/snippet}

	<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
		<div>
			<h2 class="leading-[0.93] tracking-tight font-serif font-semibold text-[clamp(2.4rem,6vw,4rem)]">
				The island's finest
				<br />
				<em class="italic text-[#D4622A]">tables.</em>
			</h2>
		</div>

		<ToggleGroup.Root type="single" bind:value={selectedCategory}>
			{#each categories as category (category.id)}
				<ToggleGroupItem value={category.id}>{category.label}</ToggleGroupItem>
			{/each}
		</ToggleGroup.Root>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
		{#each restaurants as restaurant (restaurant.name)}
			<div class="group cursor-pointer">
				<div class="relative overflow-hidden mb-4 bg-muted">
					<img
						src={restaurant.img}
						alt={restaurant.name}
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>

					<div class="absolute inset-0 flex flex-col justify-between p-3">
						<div class="flex items-start justify-between">
							<span class="text-[10px] font-semibold px-2 py-0.5 bg-background/90 backdrop-blur-sm text-foreground">
								{restaurant.price}
							</span>
							{@render categoryLabel(restaurant.category)}
						</div>
					</div>
				</div>

				<div class="flex items-start justify-between mb-0.5">
					<h3 class="leading-snug font-serif font-semibold">
						{restaurant.name}
					</h3>
					<div class="flex items-center gap-1 shrink-0 ml-2 mt-0.5">
						<Star size={10} fill="#D4622A" color="#D4622A" />
						<span class="text-xs font-medium">{restaurant.rating}</span>
					</div>
				</div>

				<p class="text-muted-foreground text-[10px] uppercase tracking-wider mb-1.5">{restaurant.sub}</p>
				<div class="flex items-center gap-1.5 text-muted-foreground text-xs mb-1.5">
					<Clock size={10} />
					<span>{restaurant.hours}</span>
				</div>
				<p class="text-xs text-muted-foreground">
					<span class="text-foreground font-medium">Must try: </span>
					{restaurant.must}
				</p>
			</div>
		{/each}
	</div>

