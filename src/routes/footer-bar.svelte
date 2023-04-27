<script lang="ts">
	import { palettes } from '../lib/palettes';

	const paletteNames = Object.keys(palettes);
	let palette = paletteNames[0];

	export let changePalette = (ev: any) => {};
</script>

<div class="bg-two text-three mx-2 mb-2 p-2 rounded flex flex-wrap">
	<div style="max-w-fit mr-2">
		<a href="mailto:inquiries@jeff-rossi.com">inquiries@jeff-rossi.com</a>
	</div>
	<div class="flex-grow text-center">1506 Tuscaloosa Ave, Holly Hill, FL 32117</div>
	<div class="max-w-fit ml-2">
		<label for="theme" class="font-bold mr-2">Theme</label>
		<select name="theme" value={palette} class="bg-two text-three" on:change={changePalette}>
			{#each paletteNames as name}
				<option value={name}>{name}</option>
			{/each}
		</select>
	</div>
</div>

<style>
	a:hover {
		@apply font-bold underline;
	}
</style>
