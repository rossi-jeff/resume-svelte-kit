<script lang="ts">
	import { onMount } from 'svelte';
	import type { Job } from '../../types/job.type';
	import { graphQLClient } from '$lib/grqphql-client';
	import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs';

	let jobs: Job[] = [];

	onMount(() => {
		graphQLClient.request(GET_JOBS_QUERY).then((result: any) => (jobs = result.getJobs));
	});
</script>

<div>{JSON.stringify(jobs)}</div>
