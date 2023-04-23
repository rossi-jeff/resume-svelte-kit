<script lang="ts">
	import { onMount } from 'svelte';
	import type { Comment } from '../../types/comment.type';
	import { graphQLClient } from '../../lib/grqphql-client';
	import { GET_COMMENTS_QUERY } from '../../graphql/queries/get-comments';
	import CommentCard from './comment-card.svelte';

	let comments: Comment[] = [];

	onMount(() => {
		graphQLClient
			.request(GET_COMMENTS_QUERY)
			.then((result: any) => (comments = result.getComments));
	});
</script>

{#each comments as comment (comment.Id)}
	<CommentCard {comment} />
{/each}
