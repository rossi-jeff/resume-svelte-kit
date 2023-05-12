<script lang="ts">
	import type { Link } from '../../types/link.type';

	export let link: Link = {};
</script>

<div class="mb-4 px-2 border-b border-dotted border-b-one">
	<div class="flex flex-wrap">
		<div class="w-36 text-left flex-grow">
			<strong>{link.Title}</strong>
		</div>
		<div class="w-20 text-center">{link.Type}</div>
		<div class="w-20 text-right">
			<a href={link.Url} target="_blank">Visit</a>
		</div>
	</div>
	<div class="my-2">{link.Description}</div>
</div>

<style lang="postcss" scoped>
	strong {
		@apply text-three;
	}
	a {
		@apply font-bold text-two;
	}
	a:hover {
		@apply underline;
	}
</style>
