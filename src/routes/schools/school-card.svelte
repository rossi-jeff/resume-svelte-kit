<script lang="ts">
	import { FormatAddress } from '../../lib/format-address';
	import type { School } from '../../types/school.type';

	export let school: School = {};
</script>

<div class="mx-2 mt-2 border-b border-dotted border-b-one py-2">
	{#if school.Name}
		<h3 class="text-large font-bold">{school.Name}</h3>
	{/if}
	{#if school.From && school.To}
		<div class="flex flex-wrap">
			<div class="mr-4">
				<strong>From</strong>
				{school.From.Month}
				{school.From.Year}
			</div>
			<div>
				<strong>To</strong>
				{school.To.Month}
				{school.To.Year}
			</div>
		</div>
	{/if}
	{#if school.Address && FormatAddress(school.Address)}
		<div>
			<strong>Address</strong>
			{FormatAddress(school.Address)}
		</div>
	{/if}
	{#if school.Degree}
		<div>
			<strong>Degree</strong>
			{school.Degree}
		</div>
	{/if}
	{#if school.Program}
		<div>
			<strong>Program</strong>
			{school.Program}
		</div>
	{/if}
</div>

<style lang="postcss" scoped>
	strong {
		@apply text-three;
	}
	h3 {
		@apply text-xl text-two font-bold;
	}
</style>
