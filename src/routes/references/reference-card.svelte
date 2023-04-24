<script lang="ts">
	import { FormatAddress } from '../../lib/format-address';
	import { FormatName } from '../../lib/format-name';
	import type { Reference } from '../../types/reference.type';

	export let reference: Reference = {};

	let showContact = false;
	let showComment = false;
</script>

<div class="mx-2 mb-4">
	{#if reference.Name}
		<h3>{FormatName(reference.Name)}</h3>
	{/if}
	{#if reference.Company}
		<div>
			<strong>Company</strong>
			{reference.Company}
		</div>
	{/if}
	{#if reference.Title}
		<div>
			<strong>Title</strong>
			{reference.Title}
		</div>
	{/if}
	{#if (reference.Phones && reference.Phones.length) || (reference.Emails && reference.Emails.length) || (reference.Address && FormatAddress(reference.Address))}
		<div>
			<button on:click={() => (showContact = !showContact)}>Contact</button>
			<div class={showContact ? 'visible' : 'hidden'}>
				{#if reference.Phones && reference.Phones.length}
					<div>
						<strong>Phone</strong>
						{reference.Phones.map((p) => p.Number).join(', ')}
					</div>
				{/if}
				{#if reference.Emails && reference.Emails.length}
					<div>
						<strong>Email</strong>
						{reference.Emails.map((e) => e.Address).join(', ')}
					</div>
				{/if}
				{#if reference.Address && FormatAddress(reference.Address)}
					<div>
						<strong>Address</strong>
						{FormatAddress(reference.Address)}
					</div>
				{/if}
			</div>
		</div>
	{/if}
	{#if reference.Comments && reference.Comments.length}
		<div>
			<button on:click={() => (showComment = !showComment)}>Comments</button>
			<div class={showComment ? 'visible' : 'hidden'}>
				{#each reference.Comments as comment (comment.Id)}
					<div>{comment.Message}</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.visible {
		display: block;
	}
	.hidden {
		display: none;
	}
</style>
