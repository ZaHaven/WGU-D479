<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import Section from '$lib/components/Section.svelte';

	const faqs = [
		{
			q: "What power outlets are used?",
			a: "Power outlets are 120 volts (the same as in the United States).",
		},
		{
			q: "Can you drink on the island?",
			a: "Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m. The drinking age on Taniti is 18 and the drinking age is not strictly enforced.",
		},
		{
			q: "What language is spoken on the island?",
			a: "Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.",
		},
		{
			q: "Is Taniti safe for tourists?",
			a: "Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.",
		},
		{
			q: "What currency can be used on the island?",
			a: "Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.",
		}
	];
</script>

<section class="py-12">
	<div class="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl px-6 mx-auto">
		<p class="text-muted-foreground text-[10px] tracking-[0.28em] uppercase">
			FAQs
		</p>

		<Accordion.Root type="multiple" class="lg:col-span-3">
			{#each faqs as faq (faq.q)}
				<Accordion.Item value={faq.q} class="border-t border-border">
					<Accordion.Trigger class="text-sm font-medium leading-snug font-serif hover:text-accent data-[state=open]:text-accent">{faq.q}</Accordion.Trigger>
					<Accordion.Content>
						<p class="text-sm text-muted-foreground leading-relaxed pb-5 pr-8">
							{faq.a}
						</p>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>

</section>

