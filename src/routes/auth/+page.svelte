<script lang="ts">
    import {fade, scale} from 'svelte/transition';

	let mouseX = $state(0);
	let mouseY = $state(0);

	let passwordFocused = $state(false);

	let windowWidth = $state(10000);
	let windowHeight = $state(10000);

	let leftEye: HTMLDivElement | null = $state(null);
	let rightEye: HTMLDivElement | null = $state(null);

	let lEyeMoveX = $derived.by(() => {
		let moveRelative = 0;
		if (leftEye) {
			let distanceX = leftEye.getBoundingClientRect().width / 3;
			let mouseMove = 0;
			if (mouseX > windowWidth / 2) {
				mouseMove = mouseX - windowWidth / 2;
			} else {
				mouseMove = -(windowWidth / 2 - mouseX);
			}
			if (distanceX == 0) return 0;
			moveRelative = (((mouseMove * distanceX) / (windowWidth / 2)) * 2) / 3 + distanceX;
		}
		return moveRelative;
	});
	let lEyeMoveY = $derived.by(() => {
		let moveRelative = 0;
		if (leftEye) {
			let distanceY = leftEye.getBoundingClientRect().height / 3;
			let mouseMove = 0;
			if (mouseY > windowHeight / 2) {
				mouseMove = mouseY - windowHeight / 2;
			} else {
				mouseMove = -(windowHeight / 2 - mouseY);
			}
			if (distanceY == 0) return 0;
			moveRelative = (((mouseMove * distanceY) / (windowHeight / 2)) * 2) / 3 + (distanceY * 2) / 3;
		}
		return moveRelative;
	});
	let rEyeMoveX = $derived.by(() => {
		let moveRelative = 0;
		if (rightEye) {
			let distanceX = rightEye.getBoundingClientRect().width / 3;
			let mouseMove = 0;
			if (mouseX > windowWidth / 2) {
				mouseMove = mouseX - windowWidth / 2;
			} else {
				mouseMove = -(windowWidth / 2 - mouseX);
			}
			if (distanceX == 0) return 0;
			moveRelative = (((mouseMove * distanceX) / (windowWidth / 2)) * 2) / 3 + distanceX;
		}
		return moveRelative;
	});
	let rEyeMoveY = $derived.by(() => {
		let moveRelative = 0;
		if (rightEye) {
			let distanceY = rightEye.getBoundingClientRect().height / 3;
			let mouseMove = 0;
			if (mouseY > windowHeight / 2) {
				mouseMove = mouseY - windowHeight / 2;
			} else {
				mouseMove = -(windowHeight / 2 - mouseY);
			}
			if (distanceY == 0) return 0;
			moveRelative = (((mouseMove * distanceY) / (windowHeight / 2)) * 2) / 3 + (distanceY * 2) / 3;
		}
		return moveRelative;
	});

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div
	class="w-full flex items-center justify-center bg-base-200 p-10"
	onmousemove={handleMouseMove}
	role="none"
>
	<form
		method="POST"
		action="?/login"
		class="bg-base-100 p-10 rounded-2xl shadow-lg flex flex-col items-center gap-6 w-96 relative"
	>
		<!-- Book Character -->
		<div class="relative mb-4 flex items-center justify-center">
			<!-- Book outline -->
			<div class="w-34 h-44 rounded-2xl border-4 border-primary flex bg-base-100"></div>
			<div
				class="absolute right-2 top-2 w-34 h-44 rounded-2xl border-4 border-primary flex items-center items-end bg-base-100 text-primary font-mono"
			>
				<p class="text-center w-full pb-3"><b>The clean Cookbook</b></p>
				{#if passwordFocused}
					<!-- Left Eye -->
					<div class="absolute top-7 left-4 w-8 h-0 rounded-full border-3 border-primary" transition:scale></div>
                    <!-- Right Eye -->
					<div class="absolute top-7 right-4 w-8 h-0 rounded-full border-3 border-primary" transition:scale></div>
				{:else}
					<!-- Left Eye -->
					<div
						class="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-primary"
						bind:this={leftEye}
                        transition:scale
					>
						<div
							class="w-2 h-2 bg-primary rounded-full"
							style="transform: translate({lEyeMoveX}px, {lEyeMoveY}px);"
						></div>
					</div>
					<!-- Right Eye -->
					<div
						class="absolute top-3 right-3 w-10 h-10 rounded-full border-4 border-primary"
						bind:this={rightEye}
                        transition:scale
					>
						<div
							class="w-2 h-2 bg-primary rounded-full"
							style="transform: translate({rEyeMoveX}px, {rEyeMoveY}px);"
						></div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Inputs -->
		<div class="w-full flex flex-col gap-4">
			<label class="flex flex-col text-primary">
				Email
				<input
					name="email"
					type="email"
					required
					class="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</label>

			<label class="flex flex-col text-primary">
				Password
				<input
					name="password"
					type="password"
					required
					class="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					onfocus={() => (passwordFocused = true)}
					onblur={() => (passwordFocused = false)}
				/>
			</label>
		</div>

		<!-- Buttons -->
		<div class="flex gap-4 mt-4">
			<button
				type="submit"
				class="px-6 py-2 bg-primary text-base-100 rounded-lg hover:bg-primary-focus transition"
			>
				Log in
			</button>
			<button
				type="submit"
				formaction="?/signup"
				class="px-6 py-2 bg-base-300 text-primary rounded-lg hover:bg-base-200 transition"
			>
				Sign up
			</button>
		</div>
	</form>
</div>
