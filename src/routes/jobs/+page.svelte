<script lang="ts">
	import { onMount } from 'svelte';
	import type { Job } from '../../types/job.type';
	import { graphQLClient } from '$lib/grqphql-client';
	import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs';
	import JobCard from './job-card.svelte';

	let jobs: Job[] = [];

	onMount(() => {
		graphQLClient.request(GET_JOBS_QUERY).then((result: any) => (jobs = result.getJobs));
	});
</script>

{#each jobs as job (job.Id)}
	<JobCard {job} />
{/each}
