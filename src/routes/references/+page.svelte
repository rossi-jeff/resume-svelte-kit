<script lang="ts">
	import { onMount } from 'svelte';
	import type { Reference } from '../../types/reference.type';
	import { graphQLClient } from '$lib/grqphql-client';
	import { GET_REFERENCES_QUERY } from '../../graphql/queries/get-references';
	import ReferenceCard from './reference-card.svelte';

	let references: Reference[] = [];

	onMount(() => {
		graphQLClient
			.request(GET_REFERENCES_QUERY)
			.then((result: any) => (references = result.getReferences));
	});
</script>

{#each references as reference (reference.Id)}
	<ReferenceCard {reference} />
{/each}
