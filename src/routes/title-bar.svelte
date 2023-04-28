<script lang="ts">
	import { Bars3 } from 'svelte-heros';
	export let toggleMenu = () => {};
</script>

<div class="bg-two text-three mx-2 my-2 p-2 rounded flex flex-wrap">
	<div class="mr-2">
		<Bars3 on:click={toggleMenu} />
	</div>
	<div class="flex-grow">
		<span class="text-xl font-bold text-four">Jeff Rossi</span>
		&nbsp;|&nbsp;
		<span class="text-lg text-one">Software Developer</span>
	</div>
	<div style="max-w-fit ml-2">
		<a href="mailto:inquiries@jeff-rossi.com">inquiries@jeff-rossi.com</a>
	</div>
</div>

<style>
	a:hover {
		@apply font-bold underline;
	}
</style>
