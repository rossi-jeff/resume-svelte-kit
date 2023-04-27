<script lang="ts">
	import { FormatAddress } from '$lib/format-address';
	import type { Job } from '../../types/job.type';

	export let job: Job = {};
</script>

<div class="mx-2 mt-2 border-b border-dotted border-b-one">
	<h3 class="text-large font-bold">{job.Company}</h3>
	{#if job.From && job.To}
		<div class="flex flex-wrap">
			<div class="mr-4">
				<strong>From</strong>
				{job.From.Month}
				{job.From.Year}
			</div>
			<div>
				<strong>To</strong>
				{job.To.Month}
				{job.To.Year}
			</div>
		</div>
	{/if}
	{#if job.Address}
		<div>
			<strong>Address</strong>
			{FormatAddress(job.Address)}
		</div>
	{/if}
	{#if job.Title}
		<div>
			<strong>Title</strong>
			{job.Title}
		</div>
	{/if}
	{#if job.Duties}
		<div>
			<strong>Duties</strong>
			{job.Duties}
		</div>
	{/if}
</div>
