<script lang="ts">
	import { onMount } from 'svelte';
	import type { Link } from '../../types/link.type';
	import { graphQLClient } from '$lib/grqphql-client';
	import { GET_LINKS_QUERY } from '../../graphql/queries/get-links';
	import LinkCard from './link-card.svelte';

	let links: Link[] = [];

	onMount(() => {
		graphQLClient.request(GET_LINKS_QUERY).then((result: any) => (links = result.getLinks));
	});
</script>

{#each links as link (link.Id)}
	<LinkCard {link} />
{/each}
