<script lang="ts">
	import { fallbackRecipes } from '$lib/fallbackRecipes';
	import RecipeCard from './FoodCard.svelte';

	const recipe = fallbackRecipes[0];
</script>

<!-- concise vertical -->
<RecipeCard {recipe} />

<!-- expanded vertical -->
<RecipeCard {recipe} expanded />

<!-- concise horizontal -->
<RecipeCard {recipe} horizontal />

<!-- expanded horizontal -->
<RecipeCard {recipe} expanded horizontal />