<script lang="ts">
	import { FormatName } from '$lib/format-name';
	import type { Comment } from '../../types/comment.type';

	export let comment: Comment = {};

	const getAuthor = (comment: Comment) => {
		let name: string = '';
		if (comment.Admins && comment.Admins.length) {
			name = FormatName(comment.Admins[0].Name);
		} else if (comment.References && comment.References.length) {
			name = FormatName(comment.References[0].Name);
		} else if (comment.Visitors && comment.Visitors.length) {
			name = FormatName(comment.Visitors[0].Name);
		}
		return name;
	};
</script>

<div class="mx-2 mt-2 border-b border-dotted border-b-one py-2">
	<div class="mb-2">{comment.Message}</div>
	{#if getAuthor(comment)}
		<div class="text-right text-three font-bold">
			--&nbsp;
			{getAuthor(comment)}
		</div>
	{/if}
</div>
