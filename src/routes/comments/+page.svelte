<script lang="ts">
	import { onMount } from 'svelte';
	import type { Comment } from '../../types/comment.type';
	import { graphQLClient } from '../../lib/grqphql-client';
	import { GET_COMMENTS_QUERY } from '../../graphql/queries/get-comments';

	let comments: Comment[] = [];

	onMount(() => {
		graphQLClient
			.request(GET_COMMENTS_QUERY)
			.then((result: any) => (comments = result.getComments));
	});
</script>

<div>{JSON.stringify(comments)}</div>
