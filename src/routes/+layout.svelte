<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { palettes } from '../lib/palettes';

	const paletteNames = Object.keys(palettes);
	let palette = paletteNames[Math.floor(Math.random() * paletteNames.length)];

	const changePalette = (ev: any) => {
		palette = paletteNames[ev.target.selectedIndex];
		const main = document.getElementById('main');
		if (main) main.setAttribute('data-theme', palette);
	};

	onMount(() => {
		const main = document.getElementById('main');
		if (main) main.setAttribute('data-theme', palette);
	});
</script>

<main id="main" class="bg-four m-0 p-2 h-full text-one">
	<div class="bg-one text-four">
		<ul class="flex flex-wrap justify-between mx-2 my-2">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/jobs">Jobs</a>
			</li>
			<li>
				<a href="/schools">Schools</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
			<li>
				<a href="/comments">Comments</a>
			</li>
			<li>
				<a href="/references">References</a>
			</li>
			<li>
				<a href="/links">Links</a>
			</li>
		</ul>
	</div>

	<div class="bg-two text-three">
		<label for="theme">Theme</label>
		<select name="theme" value={palette} on:change={changePalette} class="bg-one text-four">
			{#each paletteNames as name}
				<option value={name}>{name}</option>
			{/each}
		</select>
	</div>

	<slot />
</main>
