<script lang="ts">
	import { onMount } from 'svelte';
	import type { Job } from '../../types/job.type';
	import { graphQLClient } from '$lib/grqphql-client';
	import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs';
	import type { School } from '../../types/school.type';
	import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools';
	import type { Reference } from '../../types/reference.type';
	import { GET_REFERENCES_QUERY } from '../../graphql/queries/get-references';
	import { FormatAddress } from '$lib/format-address';
	import { FormatName } from '$lib/format-name';
	import { Printer } from 'svelte-heros';

	let jobs: Job[] = [];
	let schools: School[] = [];
	let references: Reference[] = [];

	const print = () => {
		const container = document.getElementById('print-container');
		if (container) {
			const content = container.innerHTML;
			const printWindow = window.open('', '', 'height=500, width=500');
			if (printWindow) {
				printWindow.document.write('<html>');
				printWindow.document.write('<body>');
				printWindow.document.write(content);
				printWindow.document.write('</body>');
				printWindow.document.write('</html>');
				printWindow.document.close();
				printWindow.print();
			}
		}
	};

	onMount(() => {
		graphQLClient.request(GET_JOBS_QUERY).then((result: any) => (jobs = result.getJobs));
		graphQLClient.request(GET_SCHOOLS_QUERY).then((result: any) => (schools = result.getSchools));
		graphQLClient
			.request(GET_REFERENCES_QUERY)
			.then((result: any) => (references = result.getReferences));
	});
</script>

<button on:click={print} class="bg-three text-two border border-two rounded px-2 py-1 mb-2 ml-2">
	<Printer class="inline-block" />
	Print
</button>

<div class="border border-black rounded p-4 bg-white text-black mx-2 my-2" id="print-container">
	<div class="font-bold text-lg">Jeff Rossi</div>
	<div>SoftWare Developer</div>
	<hr class="border-2 border-black mb-4" />

	<div class="font-bold mt-4">Employment</div>
	<hr class="border-2 border-black mb-4" />

	{#each jobs as job}
		<div class="mb-6">
			<div class="font-bold">{job.Company}</div>
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
	{/each}

	<div class="font-bold mt-4">Education</div>
	<hr class="border-2 border-black mb-4" />

	{#each schools as school}
		<div class="mb-6">
			<div class="font-bold">{school.Name}</div>
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
	{/each}

	<div class="font-bold mt-4">References</div>
	<hr class="border-2 border-black mb-4" />

	{#each references as reference}
		<div class="mb-6">
			{#if reference.Name}
				<div class="font-bold">{FormatName(reference.Name)}</div>
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
			{#if reference.Phones && reference.Phones.length}
				<div>
					<strong>Phone</strong>
					{reference.Phones.map((p) => p.Number).join(', ')}
				</div>
			{/if}
			{#if reference.Emails && reference.Emails.length}
				<div>
					<strong>Email</strong>
					{reference.Emails.map((e) => e.Address).join(', ')}
				</div>
			{/if}
		</div>
	{/each}

	<div class="font-bold mt-4">Online</div>
	<hr class="border-2 border-black mb-4" />

	<div>
		<strong>React:</strong>
		https://resume-react.jeff-rossi.com/
	</div>
	<div>
		<strong>Vue:</strong>
		https://resume-vue.jeff-rossi.com/
	</div>
	<div>
		<strong>Angular:</strong>
		https://resume-angular.jeff-rossi.com/
	</div>
	<div>
		<strong>Svelte:</strong>
		https://resume-svelte.jeff-rossi.com/
	</div>

	<div class="font-bold mt-4">Contact</div>
	<hr class="border-2 border-black mb-4" />

	<div>
		<strong>Address:</strong>
		1506 Tuscaloosa Ave, Holly Hill Florida 32117
	</div>
	<div>
		<strong>Home:</strong>
		(386) 226-8913
	</div>
	<div>
		<strong>Cell:</strong>
		(386) 316-8485
	</div>
	<div>
		<strong>Email:</strong>
		inquiries@jeff-rossi.com
	</div>
</div>
