<script lang="ts">
	import { Bike, Bus, Car, Plane, Ship } from '@lucide/svelte';

	const arrivalOptions = [
		{
			Icon: Plane,
			title: "By Air",
			detail: "3 airlines",
			desc: "Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. ",
		},
		{
			Icon: Ship,
			title: "Cruise Stop",
			detail: "One night per week",
			desc: "A small cruise ship docks in Yellow Leaf Bay one night a week.",
		},
	];

	const travelOptions = [
		{
			Icon: Car,
			title: "Rental Car",
			detail: "From $45/day",
			desc: "Best for flexible exploration. Available at the local rental agency near the airport.",
		},
		{
			Icon: Bus,
			title: "Public Bus (Taniti City)",
			detail: "$1.50 per ride",
			desc: "Only serves Taniti City, runs from 5 a.m. to 11 p.m. daily. Taxis are also available in the City",
		},
		{
			Icon: Bike,
			title: "Rental Bicycles",
			detail: "From $15/day",
			desc: "Several rental shops at harbor and main beaches. Helmets are required by law.",
		},
		{
			Icon: Bus,
			title: "Private Bus (Whole Island)",
			detail: "$15.00 per ride",
			desc: "Private buses service the island outside of Taniti City.",
		},
	];

</script>

{#snippet travelOption({ Icon, title, detail, desc })}
	<div class="flex gap-4 p-5 border transition-colors bg-muted/5">
		<div class="shrink-0 w-10 h-10 flex items-center justify-center bg-accent/80">
			<Icon size={17} color="#E8A87C" />
		</div>

		<div>
			<div class="flex items-center gap-2 mb-1">
				<h3 class="font-semibold text-foreground text-sm">{title}</h3>
				<span class="text-[10px] px-1.5 py-0.5">
					{detail}
				</span>
			</div>
			<p class="text-xs leading-relaxed">{desc}</p>
		</div>
	</div>
{/snippet}

<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
	<div>
		<p class="text-[10px] tracking-[0.28em] uppercase mb-3">Getting there</p>

		<div class="space-y-3">
			{#each arrivalOptions as option (option.title)}
				{@render travelOption(option)}
			{/each}
		</div>
	</div>

	<div>
		<p class="text-[10px] tracking-[0.28em] uppercase mb-3">Getting around</p>

		<div class="space-y-3">
			{#each travelOptions as option (option.title)}
				{@render travelOption(option)}
			{/each}
		</div>
	</div>
</div>