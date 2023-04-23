<script lang="ts">
	import type { Link } from '../../types/link.type';

	export let link: Link = {};
</script>

<div class="mx-2 mb-4">
	<div class="flex flex-wrap justify-between">
		<div class="w-36 text-left">{link.Title}</div>
		<div class="w-20 text-center">{link.Type}</div>
		<div class="w-20 text-right">
			<a href={link.Url}>Visit</a>
		</div>
	</div>
	<div class="mb-2">{link.Description}</div>
</div>
