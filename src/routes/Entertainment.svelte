<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import ActivityHighlight from '$lib/components/ActivityHighlight.svelte';
	import { TrendingUp } from '@lucide/svelte';

	const activities = [
		{
			name: "Local History Museum",
			desc: "Explore the island's volcanic origins and indigenous heritage",
			sub: "Merriton Landing",
			img: "https://images.unsplash.com/photo-1584652868574-0669f4292976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Cultural"],
		},
		{
			name: "Chartered Fishing Tours",
			desc: "Deep-sea trips for marlin, tuna, and mahi-mahi",
			sub: "Yellow Leaf Bay Dock",
			img: "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Adventure"],
		},
		{
			name: "Snorkeling",
			desc: "Guided reef tours and equipment rental daily",
			sub: "Multiple beaches",
			img: "https://images.unsplash.com/photo-1583364493238-248032147fbd?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Water"],
		},
		{
			name: "Rainforest Zip-Lining",
			desc: "Canopy tours with 8 platforms and suspension bridges",
			sub: "Selva Verde area",
			img: "https://images.unsplash.com/photo-1651183993471-ea2391960f6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Adventure"],
		},
		{
			name: "Pubs & Microbrewery",
			desc: "Local craft beers and traditional island spirits",
			sub: "Merriton Landing",
			img: "https://images.unsplash.com/photo-1725148029785-397acd3c1be3?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Nightlife"],
		},
		{
			name: "Dance Club",
			desc: "New waterfront venue with live DJs every weekend",
			sub: "Merriton Landing",
			img: "https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Nightlife"],
		},
		{
			name: "Movie Theater",
			desc: "Air-conditioned cinema showing international films",
			sub: "Merriton Landing",
			img: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Entertainment"],
		},
		{
			name: "Helicopter Rides",
			desc: "Aerial volcano and island tours — unforgettable views",
			sub: "Airport & Bay",
			img: "https://images.unsplash.com/photo-1557818673-effec50525e1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Adventure"],
		},
		{
			name: "Arcade",
			desc: "Classic and modern games, perfect for rainy afternoons",
			sub: "Merriton Landing",
			img: "https://images.unsplash.com/photo-1640301133815-4bec64fca33f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Entertainment"],
		},
		{
			name: "Art Galleries",
			desc: "Local artists showcasing island-inspired paintings and sculptures",
			sub: "Merriton Landing",
			img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Cultural"],
		},
		{
			name: "Bowling Alley",
			desc: "Eight lanes with bar service and food menu",
			sub: "Merriton Landing",
			img: "https://images.unsplash.com/photo-1538511059256-46e76f13f071?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Entertainment"],
		},
		{
			name: "Golf Course (Coming Soon)",
			desc: "Nine-hole course expected to open next year",
			sub: "North Bay Area",
			img: "https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			// facts: ["Sports"],
		},
	];
</script>

<div class="flex flex-col gap-2">
	<Carousel.Root>
		<Carousel.Content>
			{#each activities as activity (activity.name)}
				<Carousel.Item class="max-w-xs">
					<ActivityHighlight {...activity} ratio={1} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous></Carousel.Previous>
		<Carousel.Next></Carousel.Next>
	</Carousel.Root>

	<div class="p-6 border border-border bg-secondary/60">
		<div class="flex items-start gap-4">
			<div class="shrink-0 w-11 h-11 flex items-center justify-center bg-[#D4622A]">
				<TrendingUp size={18} color="white" />
			</div>
			<div>
				<h3 class="mb-1.5 font-serif text-lg font-semibold">
					Coming Soon: Golf Course
				</h3>
				<p class="text-sm text-muted-foreground leading-relaxed">
					A nine-hole golf course is expected to open next year in the North Bay Area, adding even more recreational options to the island.
				</p>
			</div>
		</div>
	</div>
</div>


