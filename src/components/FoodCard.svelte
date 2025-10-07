<script lang="ts">
	import InfoIcon from '$lib/assets/icons/info_icon.svelte';
	import AddToCalendarIcon from '$lib/assets/icons/addToCalendar_icon.svelte';
	import HeartIcon from '$lib/assets/icons/heart_icon.svelte';
	import CartPlusIcon from '$lib/assets/icons/cartPlus_icon.svelte';
	import ClockIcon from '$lib/assets/icons/clock_icon.svelte';
	import { openRecipeModal } from '../stores/currentRecipe';

	let { recipe, vSize = 48, hSize = 48 } = $props();
</script>

<div
	class="card bg-base-100 border border-base-300 hover:border-primary relative overflow-hidden group"
>
	<!-- image -->
	<figure>
		<img
			src={recipe.image ?? 'https://via.placeholder.com/300x200?text=Recipe'}
			alt={recipe.name}
			class="object-cover h-68 w-full"
		/>
	</figure>

	<!-- Interactive buttons (on a pill-like backround) -->
	<div
		class="absolute bottom-2 right-2 flex flex-col gap-[0.5rem] bg-base-200/70 backdrop-blur-md rounded-full p-1 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity"
	>
		<div class="tooltip tooltip-left" data-tip="Save to favorites">
			<button class="btn btn-sm btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300">
				<HeartIcon />
			</button>
		</div>
		<div class="tooltip tooltip-left" data-tip="Recipe details">
			<button 
				class="btn btn-sm btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300"
				onclick={() => openRecipeModal(recipe)}
			>
				<InfoIcon />
			</button>
		</div>
		<div class="tooltip tooltip-left" data-tip="Add to planner">
			<button class="btn btn-sm btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300">
				<AddToCalendarIcon />
			</button>
		</div>
		<div class="tooltip tooltip-left" data-tip="Add to shopping list">
			<button class="btn btn-sm btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300">
				<CartPlusIcon />
			</button>
		</div>
	</div>

	<!-- Prep time (on a pill-like backround) -->
	<div
		class="absolute items-center gap-[0.5rem] bottom-28 left-2 flex bg-base-200/70 backdrop-blur-md rounded-full p-2 shadow-md z-10 text-primary"
	>
		<ClockIcon />
		<p class="text-sm opacity-70 font-bold">
			{recipe.prepTimeMinutes} min
		</p>
	</div>

	<!-- Body of the card -->
	<div class="card-body">
		<h2 class="card-title text-lg font-bold">{recipe.name}</h2>
		<p class="text-sm opacity-80">
			{recipe.dishType} • {recipe.meatType} • {recipe.difficulty}
		</p>
	</div>

</div>
