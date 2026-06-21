<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';

	const sights = [
		{
			name: "The Beaches",
			sub: "Crystal water · powdered shores",
			img: "https://images.unsplash.com/photo-1672841828478-2fad29c8fa25?w=800&h=1050&fit=crop&auto=format",
			bg: "#0D4A6B",
			facts: ["Water 78–82°F", "Best Nov – Apr"],
			highlights: [
				"Playa Dorada — surf breaks year-round",
				"Coral Cove — snorkel reef at 6 ft depth",
				"Playa Negra — black volcanic sand, quiet",
			],
		},
		{
			name: "The Rainforest",
			sub: "Ancient canopy · hidden trails",
			img: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&h=1050&fit=crop&auto=format",
			bg: "#1A4A1A",
			facts: ["200 – 1,800 ft elev.", "Open year-round"],
			highlights: [
				"Selva Verde — 3 canopy loop walkways",
				"Misty Ridge Trail — 120+ bird species",
				"Río Esmeralda — swimming holes throughout",
			],
		},
		{
			name: "The Volcano",
			sub: "Active summit · otherworldly views",
			img: "https://images.unsplash.com/photo-1619266465172-02a857c3556d?w=800&h=1050&fit=crop&auto=format",
			bg: "#4A1A08",
			facts: ["Last eruption 2019", "Guided only"],
			highlights: [
				"Summit hike — 5 hrs round trip",
				"Caldera viewpoint — 4WD accessible",
				"Lava coast tours — evening glow",
			],
		},
	];
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
	{#each sights as sight (sight.name)}
		<AspectRatio ratio={3/4} class={`bg-[${sight.bg}]`}>
			<img src={sight.img} alt={sight.name} class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale" />

			<div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/75 to-transparent from-10% via-45%" ></div>

			<div class="absolute bottom-0 left-0 right-0 p-6">
				<p class="text-accent-foreground text-[10px] tracking-[0.22em] uppercase mb-1.5">{sight.sub}</p>
				<h3 class="text-accent-foreground mb-3 font-serif text-2xl/1.1 font-semibold">
					{sight.name}
				</h3>
				<ul class="space-y-1.5 mb-4">
					{#each sight.highlights as highlight (highlight)}
						<li class="text-white/75 text-sm flex items-start gap-2">
							<span class="text-white/35 mt-px shrink-0">—</span>
							{highlight}
						</li>
					{/each}
				</ul>
				<div class="flex flex-wrap gap-2">
					{#each sight.facts as fact (fact)}
					<span class="text-[11px] bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-md">
						{fact}
					</span>
					{/each}
				</div>
			</div>
		</AspectRatio>
	{/each}
</div>
