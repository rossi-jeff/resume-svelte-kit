<script lang="ts">
	import { FormatAddress } from '../../lib/format-address';
	import { FormatName } from '../../lib/format-name';
	import type { Reference } from '../../types/reference.type';

	export let reference: Reference = {};
</script>

<div class="mx-2 mb-4">
	{#if reference.Name}
		<h3>{FormatName(reference.Name)}</h3>
	{/if}
	{#if reference.Company}
		<div>
			<strong>Company</strong>
			{reference.Company}
		</div>
	{/if}
	{#if reference.Title}
		<div>
			<strong>Title</strong>
			{reference.Title}
		</div>
	{/if}
	{#if reference.Address && FormatAddress(reference.Address)}
		<div>
			<strong>Address</strong>
			{FormatAddress(reference.Address)}
		</div>
	{/if}
</div>
