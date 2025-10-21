<script lang="ts">
	import InteractiveBook from '../../../components/InteractiveBook.svelte';

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

	let signUpActive: boolean = false;
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	onmousemove={handleMouseMove}
/>

<div class="flex items-center justify-center bg-base-100 p-10 m-20 gap-5 items-stretch" role="none">
	<div class="bg-base-300 rounded-xl p-10">
		<!-- Book Character -->
		<InteractiveBook
			{mouseX}
			{mouseY}
			{windowWidth}
			{windowHeight}
			{passwordFocused}
			{signUpActive}
		/>
	</div>

	<!-- Tank you text -->
	<div class="flex flex-col gap-2 bg-base-300 rounded-xl p-10">
		<p class="text-xl">Thank you for signing up!</p>
		<p class="text-3xl text-primary mb-12">Please check your email and activate your account!</p>
		<div class="text-sm flex flex-col gap-1">
			<p><b>No email?</b></p>
			<p>Make sure to wait a few minutes and to check your spam folder!</p>
			<p>
				If you are positive that no email has arrived, try siging up again. Sorry for the inconvenience!
			</p>
		</div>
	</div>
</div>
