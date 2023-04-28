<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { palettes } from '../lib/palettes';
	import NavPanel from './nav-panel.svelte';
	import FooterBar from './footer-bar.svelte';
	import TitleBar from './title-bar.svelte';

	const paletteNames = Object.keys(palettes);
	let palette = paletteNames[0];
	let visibleMenu = false;

	const changePalette = (ev: any) => {
		console.log('changePalette');
		palette = paletteNames[ev.target.selectedIndex];
		const main = document.getElementById('main');
		const menu = document.getElementById('nav-panel');
		if (main) main.setAttribute('data-theme', palette);
		if (menu) menu.setAttribute('data-theme', palette);
	};

	const toggleMenu = () => {
		const menu = document.getElementById('nav-panel');
		visibleMenu = !visibleMenu;
		console.log('toggleMenu', visibleMenu);
		if (visibleMenu) {
			if (menu) menu.style.width = '200px';
		} else {
			if (menu) menu.style.width = '0px';
		}
	};

	const bgClick = () => {
		if (!visibleMenu) return;
		toggleMenu();
	};

	onMount(() => {
		const main = document.getElementById('main');
		if (main) main.setAttribute('data-theme', palette);
	});
</script>

<main id="main" class="bg-four m-0 p-0 text-one">
	<NavPanel {toggleMenu} />

	<div class="flex flex-col h-screen">
		<TitleBar {toggleMenu} />
		<div class="flex-grow overflow-y-auto h-full p-2" on:click={bgClick} on:keypress={bgClick}>
			<slot />
		</div>
		<FooterBar {changePalette} />
	</div>
</main>
