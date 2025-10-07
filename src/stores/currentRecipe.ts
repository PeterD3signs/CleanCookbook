import { writable } from 'svelte/store';
import type { Recipe } from '$lib/types';

export const selectedRecipe = writable<Recipe | null>(null);

export function openRecipeModal(recipe: Recipe) {
	selectedRecipe.set(recipe);
}

export function closeRecipeModal() {
	selectedRecipe.set(null);
}