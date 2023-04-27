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

<div class="my-4">
	<div class="flex flex-wrap bg-one text-four mx-2 px-2">
		<div class="w-36 text-left flex-grow">Description</div>
		<div class="w-20 text-center">Type</div>
		<div class="w-20 text-right">Visit</div>
	</div>
</div>
{#each links as link (link.Id)}
	<LinkCard {link} />
{/each}
