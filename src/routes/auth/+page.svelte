<script lang="ts">
	import InteractiveBook from '../../components/InteractiveBook.svelte';
	import { fade } from 'svelte/transition';

	//Form
	let {form} = $props();

	//variables for the interactive book:
	let mouseX = $state(0);
	let mouseY = $state(0);

	let passwordFocused = $state(false);

	let windowWidth = $state(10000);
	let windowHeight = $state(10000);

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	//other:
	let pBox1: HTMLInputElement | null = $state(null);
	let pBox2: HTMLInputElement | null = $state(null);

	let signUpActive: boolean = $state(false);
	let showPassword: boolean = $state(false);
	let passwordsMatch: boolean = $state(false);

	let passwordLongerThanMin: boolean = $state(false);
	const minPasswordLength: number = 6;

	function checkPasswordMatch() {
		if (pBox1 && pBox2 && pBox1.value != '' && pBox1.value == pBox2.value) {
			passwordsMatch = true;
		} else {
			passwordsMatch = false;
		}
		if (pBox1 && pBox1.value.length >= minPasswordLength) {
			passwordLongerThanMin = true;
		} else {
			passwordLongerThanMin = false;
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div
	class="flex items-center justify-center bg-base-100 p-10"
	onmousemove={handleMouseMove}
	role="none"
>
	<form
		method="POST"
		action="?/login"
		class="bg-base-300 p-10 rounded-2xl flex flex-col items-center gap-6 w-96"
	>
		<!-- Book Character -->
		<InteractiveBook
			{mouseX}
			{mouseY}
			{windowWidth}
			{windowHeight}
			{passwordFocused}
			{signUpActive}
		/>

		<!-- Fail Message -->
		{#if form?.error || true}
		<div class="absolute w-70 h-20 border border-3 rounded-full right-60 top-35 flex flex-col items-center justify-center bg-base-100 z-10">
			<p class="text-primary">{form ? form.error : null},</p>
			<p class="text-primary">try again.</p>
		</div>
		<div class="absolute w-40 h-40 border-b-3 rounded-full top-15 right-110">
		</div>
		{/if}

		<!-- Inputs -->
		<div class="w-full flex flex-col gap-1">
			<label class="flex flex-col pb-4">
				Email
				<input name="email" type="email" required class="mt-1 px-4 py-2 border rounded-lg" />
			</label>

			<div class="flex flex-col pb-4 gap-1">
				<label class="flex flex-col">
					Password
					<input
						name="password"
						type={showPassword ? 'text' : 'password'}
						required
						class="mt-1 px-4 py-2 border rounded-lg"
						onfocus={() => (passwordFocused = true)}
						onblur={() => (passwordFocused = false)}
						onchange={() => checkPasswordMatch()}
						oninput={() => checkPasswordMatch()}
						bind:this={pBox1}
					/>
				</label>
				<div class="flex justify-end">
					{#if passwordFocused && !passwordLongerThanMin}
						<p class="text-xs text-primary" transition:fade >Password must be longer than 5 characters!</p>
					{/if}
				</div>
			</div>
			{#if signUpActive}
				<label class="flex flex-col" transition:fade>
					Confirm password
					<input
						name="passwordConfirmation"
						type={showPassword ? 'text' : 'password'}
						required
						class="mt-1 px-4 py-2 border rounded-lg"
						onfocus={() => (passwordFocused = true)}
						onblur={() => (passwordFocused = false)}
						onchange={() => checkPasswordMatch()}
						oninput={() => checkPasswordMatch()}
						bind:this={pBox2}
					/>
				</label>
				<div class="flex justify-end">
					{#if !passwordsMatch}
						<p class="text-xs text-primary" transition:fade >Passwords must match!</p>
					{/if}
				</div>
			{/if}
			<label class="label flex items-end justify-end pt-2">
				<input type="checkbox" bind:checked={showPassword} class="checkbox checkobox-neutral font-mono" />
				<p>show password</p>
			</label>
		</div>

		<!-- Buttons -->
		{#if signUpActive}
			<div class="flex gap-4 mt-4 justify-between items-end w-full">
				<div class="flex gap-4 mt-4 items-end justify-between w-full">
					<div class="flex flex-col items-left gap-2">
						<p>my mistake,</p>
						<button class="btn btn-outline" onclick={() => (signUpActive = false)}> go back</button>
					</div>
					<button
						class="btn btn-primary btn-outline"
						formaction="?/signup"
						disabled={!passwordsMatch}
					>
						Sign up
					</button>
				</div>
			</div>
		{:else}
			<div class="flex gap-4 mt-4 items-end justify-between w-full">
				<div class="flex flex-col items-left gap-2">
					<p>no account yet?</p>
					<button class="btn btn-outline" onclick={() => (signUpActive = true)}> Sign up </button>
				</div>
				<button class="btn btn-primary btn-outline"> Log in </button>
			</div>
		{/if}
	</form>
</div>
