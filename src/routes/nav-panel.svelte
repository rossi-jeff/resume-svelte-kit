<script lang="ts">
	import { XCircle } from 'svelte-heros';
	type LinkType = {
		path: string;
		text: string;
	};
	const links: LinkType[] = [
		{ path: '/', text: 'Home' },
		{ path: '/jobs', text: 'Jobs' },
		{ path: '/schools', text: 'Schools' },
		{ path: '/references', text: 'References' },
		{ path: '/comments', text: 'Comments' },
		{ path: '/contact', text: 'Contact' },
		{ path: '/resume', text: 'Download Resume' },
		{ path: '/links', text: 'Links' }
	];
	export let toggleMenu = () => {};
</script>

<div
	id="nav-panel"
	class="bg-one text-four w-0 m-0 p-0 fixed top-0 left-0 h-full z-10 overflow-x-hidden transition"
>
	<XCircle on:click={toggleMenu} class="float-right mt-2 mr-2" />
	<br />
	{#each links as link}
		<div class="mx-2 border-b border-dashed border-b-four py-1">
			<a href={link.path} on:click={toggleMenu}>{link.text}</a>
		</div>
	{/each}
</div>

<style>
	a:hover {
		@apply font-bold underline;
	}
</style>
