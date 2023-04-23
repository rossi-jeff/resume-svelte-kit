<script lang="ts">
	import { onMount } from 'svelte';
	import type { School } from '../../types/school.type';
	import { graphQLClient } from '$lib/grqphql-client';
	import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools';

	let schools: School[] = [];

	onMount(() => {
		graphQLClient.request(GET_SCHOOLS_QUERY).then((result: any) => (schools = result.getSchools));
	});
</script>

<div>{JSON.stringify(schools)}</div>
