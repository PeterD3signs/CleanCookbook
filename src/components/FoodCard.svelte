<script lang="ts">
	import type { Recipe } from '../lib/types';

	export let recipe: Recipe;
	export let expanded = false; // true = show full info
	export let horizontal = false; // true = image left, text right
</script>

<div
	class={`card bg-base-100 shadow-sm transition-all duration-200 
		${horizontal ? 'card-side w-full max-w-3xl' : 'w-96'} 
		${expanded ? 'shadow-md' : 'hover:shadow-md hover:scale-[1.02]'}
	`}
>
	<figure class={`${horizontal ? 'w-1/3' : ''}`}>
		<img
			src={recipe.image ?? 'https://via.placeholder.com/300x200?text=Recipe'}
			alt={recipe.name}
			class={`object-cover ${horizontal ? 'h-full w-full' : 'h-48 w-full'}`}
		/>
	</figure>

	<div class="card-body">
		<h2 class="card-title text-lg font-bold">{recipe.name}</h2>

		<!-- concise info -->
		<p class="text-sm opacity-80">
			{recipe.dishType} • {recipe.meatType} • {recipe.difficulty}
		</p>
		<p class="text-sm opacity-70">⏱ {recipe.prepTimeMinutes} min • 🍽 {recipe.servings} servings</p>

		{#if expanded}
			<hr class="my-2 opacity-30" />
			<p class="text-sm">{recipe.description}</p>

			<ul class="list-disc list-inside text-sm mt-2">
				{#each recipe.ingredients.slice(0, 5) as ing}
					<li>{ing.name} {ing.amount}{ing.unit ? ` ${ing.unit}` : ''}</li>
				{/each}
				{#if recipe.ingredients.length > 5}
					<li>...and more</li>
				{/if}
			</ul>

			<ol class="list-decimal list-inside text-sm mt-2">
				{#each recipe.steps.slice(0, 3) as step, i}
					<li>{step}</li>
				{/each}
				{#if recipe.steps.length > 3}
					<li>...and more</li>
				{/if}
			</ol>
		{/if}

		<div class="card-actions justify-end mt-2">
			<button class="btn btn-sm btn-primary">View</button>
		</div>
	</div>
</div>