<script lang="ts">
	import InfoIcon from "$lib/assets/icons/info_icon.svelte";
	import AddToCalendarIcon from "$lib/assets/icons/addToCalendar_icon.svelte";
	import HeartIcon from "$lib/assets/icons/heart_icon.svelte";
	import CartPlusIcon from "$lib/assets/icons/cartPlus_icon.svelte";

	let {recipe, vSize = 48, hSize = 48} = $props();
</script>

<div
	class={'card bg-base-100 border border-base-300 hover:border-primary'}
>
	<figure>
		<img
			src={recipe.image ?? 'https://via.placeholder.com/300x200?text=Recipe'}
			alt={recipe.name}
			class={`object-cover h-68 w-full`}
		/>
	</figure>

	<div class="card-body">
		<h2 class="card-title text-lg font-bold">{recipe.name}</h2>

		<!-- concise info -->
		<p class="text-sm opacity-80">
			{recipe.dishType} • {recipe.meatType} • {recipe.difficulty}
		</p>
		<p class="text-sm opacity-70">⏱ {recipe.prepTimeMinutes} min • 🍽 {recipe.servings} servings</p>

		<div class="card-actions justify-end mt-2">
			<button class="btn btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300"><InfoIcon /></button>
			<button class="btn btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300"><AddToCalendarIcon /></button>
			<button class="btn btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300"><CartPlusIcon /></button>
			<button class="btn btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300"><HeartIcon /></button>
		</div>
	</div>
</div>