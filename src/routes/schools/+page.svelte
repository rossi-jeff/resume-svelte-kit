<script lang="ts">
	import { onMount } from 'svelte';
	import type { School } from '../../types/school.type';
	import { graphQLClient } from '$lib/grqphql-client';
	import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools';
	import SchoolCard from './school-card.svelte';

	let schools: School[] = [];

	onMount(() => {
		graphQLClient.request(GET_SCHOOLS_QUERY).then((result: any) => (schools = result.getSchools));
	});
</script>

<h2 class="text-xl text-three font-bold mb-2">Schools</h2>

{#each schools as school (school.Id)}
	<SchoolCard {school} />
{/each}
