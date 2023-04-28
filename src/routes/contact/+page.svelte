<script lang="ts">
	import { FormatName } from '$lib/format-name';
	import { graphQLClient } from '$lib/grqphql-client';
	import { CREATE_CONTACT_MUTATION } from '../../graphql/mutations/create-contact';
	import { RemoveBlanks } from '$lib/remove-blanks';

	const salutations = ['Mr', 'Mrs', 'Ms', 'Dr', 'Miss'];
	const emailTypes = ['Home', 'Work'];
	const phoneTypes = [...emailTypes, 'Cell'];
	const preferredTypes = ['Phone', 'Email'];
	let formComplete = false;
	let formSent = false;

	let contact = {
		Name: {
			Salutation: '',
			First: '',
			Middle: '',
			Last: '',
			Suffix: ''
		},
		Address: {
			Address: '',
			Suite: '',
			City: '',
			State: '',
			Zip: ''
		},
		Email: '',
		EmailType: 'Work',
		Phone: '',
		PhoneType: 'Work',
		Preferred: 'Email',
		Subject: '',
		Message: ''
	};

	const toggleDiv = (id: string) => {
		const div = document.getElementById(id);
		if (div) div.style.display = div.style.display == 'block' ? 'none' : 'block';
	};

	const checkComplete = () => {
		let complete = true;
		if (!FormatName(contact.Name)) complete = false;
		if (!(contact.Email || contact.Phone)) complete = false;
		if (!(contact.Subject && contact.Message)) complete = false;
		formComplete = complete;
	};

	const sendForm = async () => {
		const data = await graphQLClient.request(CREATE_CONTACT_MUTATION, RemoveBlanks(contact));
		if (data) formSent = true;
	};
</script>

<h2 class="text-xl text-three font-bold mb-2">Contact Me</h2>

{#if formSent}
	<div>Thank You for your comment</div>
{:else}
	<div class="border border-one rounded p-2 mb-4">
		<button
			class="bg-three text-two rounded px-2 py-1 w-full text-left"
			on:click={() => toggleDiv('name-field')}>Name</button
		>
		<div class="bg-one text-four rounded p-2 mt-2 hidden transition" id="name-field">
			<div class="flex flex-wrap justify-between">
				<div>
					<label for="salutation">Salutation</label>
					<select name="salutation" bind:value={contact.Name.Salutation}>
						{#each salutations as s}
							<option value={s}>{s}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="first">First</label>
					<input
						type="text"
						name="first"
						placeholder="First"
						bind:value={contact.Name.First}
						on:change={checkComplete}
					/>
				</div>
				<div>
					<label for="middle">Middle</label>
					<input
						type="text"
						name="middle"
						placeholder="Middle"
						bind:value={contact.Name.Middle}
						on:change={checkComplete}
					/>
				</div>
				<div>
					<label for="last">Last</label>
					<input
						type="text"
						name="last"
						placeholder="Last"
						bind:value={contact.Name.Last}
						on:change={checkComplete}
					/>
				</div>
				<div>
					<label for="suffix">Suffix</label>
					<input
						type="text"
						name="suffix"
						placeholder="Suffix"
						class="w-20"
						bind:value={contact.Name.Suffix}
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="border border-one rounded p-2 mb-4">
		<button
			class="bg-three text-two rounded px-2 py-1 w-full text-left"
			on:click={() => toggleDiv('address-field')}>Address (optional)</button
		>
		<div class="bg-one text-four rounded p-2 mt-2 hidden transition" id="address-field">
			<div class="mb-4">
				<label for="address">Address</label>
				<input
					type="text"
					name="address"
					placeholder="Address"
					class="w-full"
					bind:value={contact.Address.Address}
				/>
			</div>
			<div class="mb-4">
				<label for="suite">Suite</label>
				<input
					type="text"
					name="suite"
					placeholder="Suite"
					class="w-full"
					bind:value={contact.Address.Suite}
				/>
			</div>
			<div class="flex flex-wrap justify-between">
				<div>
					<label for="city">City</label>
					<input type="text" name="city" placeholder="City" bind:value={contact.Address.City} />
				</div>
				<div>
					<label for="state">State</label>
					<input type="text" name="state" placeholder="State" bind:value={contact.Address.State} />
				</div>
				<div>
					<label for="zip">Zip Code</label>
					<input type="text" name="zip" placeholder="Zip Code" bind:value={contact.Address.Zip} />
				</div>
			</div>
		</div>
	</div>

	<div class="border border-one rounded p-2 mb-4">
		<button
			class="bg-three text-two rounded px-2 py-1 w-full text-left"
			on:click={() => toggleDiv('contact-field')}>Contact Methods</button
		>
		<div class="bg-one text-four rounded p-2 mt-2 hidden transition" id="contact-field">
			<div class="flex flex-wrap justify-between">
				<div>
					<label for="email-type">Email Type</label>
					<select name="email-type" bind:value={contact.EmailType}>
						{#each emailTypes as e}
							<option value={e}>{e}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						placeholder="Email"
						bind:value={contact.Email}
						on:change={checkComplete}
					/>
				</div>
				<div>
					<label for="phone-type">Phone Type</label>
					<select name="phone-type" bind:value={contact.PhoneType}>
						{#each phoneTypes as p}
							<option value={p}>{p}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="phone">Phone</label>
					<input
						type="tel"
						name="phone"
						placeholder="Phone"
						bind:value={contact.Phone}
						on:change={checkComplete}
					/>
				</div>
				<div>
					<label for="preferred">Preferred</label>
					<select name="preferred" bind:value={contact.Preferred}>
						{#each preferredTypes as p}
							<option value={p}>{p}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
	</div>

	<div class="border border-one rounded p-2 mb-4">
		<button
			class="bg-three text-two rounded px-2 py-1 w-full text-left"
			on:click={() => toggleDiv('comment-field')}>Comment</button
		>
		<div class="bg-one text-four rounded p-2 mt-2 hidden transition" id="comment-field">
			<div class="mb-4">
				<label for="subject">Subject</label>
				<input
					type="text"
					name="subject"
					placeholder="Subject"
					class="w-full"
					bind:value={contact.Subject}
					on:change={checkComplete}
				/>
			</div>
			<div>
				<label for="message">Message</label>
				<textarea
					name="message"
					placeholder="Message"
					class="w-full h-16"
					bind:value={contact.Message}
					on:change={checkComplete}
				/>
			</div>
		</div>
	</div>

	{#if formComplete}
		<button class="bg-three text-two rounded px-2 py-1" on:click={sendForm}> Send Form </button>
	{/if}
{/if}

<style>
	input,
	select,
	textarea {
		@apply bg-three text-two px-2 py-1 rounded;
	}
	label {
		@apply font-bold block;
	}
</style>
