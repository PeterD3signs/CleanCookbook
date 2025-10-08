<script lang="ts">
	import FoodCard from './FoodCard.svelte';
	import { fallbackRecipes } from '$lib/fallbackRecipes';
</script>

<!-- Container -->
<div
	class={`w-full flex justify-center bg-base-300 p-[3rem] gap-[1.5rem] grid sm:grid-cols-1 lg:grid-cols-3`}
>
	{#each fallbackRecipes as recipe}
		<FoodCard {recipe} />
	{/each}
</div>
