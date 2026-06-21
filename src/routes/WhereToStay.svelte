<script lang="ts">
	import { Star, Check, MapPin } from '@lucide/svelte';

	const lodges = [
		{
			name: "Laguna Azul Villas",
			type: "Overwater Bungalows",
			img: "https://images.unsplash.com/photo-1777863895689-3da81ec075e1?w=800&h=560&fit=crop&auto=format",
			price: "$320",
			rating: 4.9,
			reviews: 284,
			amenities: ["Private plunge pool", "Glass floor panels", "Butler service"],
			location: "South Lagoon",
		},
		{
			name: "Casa Selva Lodge",
			type: "Rainforest Eco-Lodge",
			img: "https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?w=800&h=560&fit=crop&auto=format",
			price: "$175",
			rating: 4.7,
			reviews: 412,
			amenities: ["Guided nature walks daily", "Farm-to-table meals", "Open-air yoga deck"],
			location: "Central Highlands",
		},
		{
			name: "Hotel Fuego Negro",
			type: "Boutique Hotel",
			img: "https://images.unsplash.com/photo-1592288801240-7b18bb06e94f?w=800&h=560&fit=crop&auto=format",
			price: "$210",
			rating: 4.8,
			reviews: 197,
			amenities: ["Rooftop bar & pool", "Volcano-view rooms", "Full concierge"],
			location: "Puerto Centro",
		},
	];
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
	{#each lodges as lodge (lodge.name)}
		<div class="bg-card border border-border overflow-hidden group rounded-md">
			<div class="relative h-52 overflow-hidden bg-muted">
				<img
					src={lodge.img}
					alt={lodge.name}
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div
					class="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1"
				>
					from {lodge.price}
					<span class="text-muted-foreground">/night</span>
				</div>
			</div>

			<div class="p-5">
				<div class="flex items-start justify-between mb-1.5">
					<div>
						<h3 class="leading-snug font-serif text-xl font-semibold">
							{lodge.name}
						</h3>
						<p class="text-muted-foreground text-[10px] uppercase tracking-wider mt-0.5">{lodge.type}</p>
					</div>
					<div class="flex items-center gap-1 text-sm shrink-0 ml-2">
						<Star size={12} fill="#D4622A" color="#D4622A" />
						<span class="font-medium text-xs">{lodge.rating}</span>
						<span class="text-muted-foreground text-xs">({lodge.reviews})</span>
					</div>
				</div>

				<div class="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
					<MapPin size={10} />
					<span>{lodge.location}</span>
				</div>

				<ul class="space-y-1.5 mb-5">
					{#each lodge.amenities as amenity (amenity)}
						<li class="text-sm text-muted-foreground flex items-center gap-2">
							<Check size={11} color="#D4622A" class="shrink-0" />
							{amenity}
						</li>
					{/each}
				</ul>
				<button
					class="w-full border border-foreground text-foreground text-sm py-2.5 hover:bg-foreground hover:text-background transition-colors font-medium"
				>
					View Details
				</button>
			</div>
		</div>
	{/each}
</div>