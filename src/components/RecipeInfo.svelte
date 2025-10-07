<script lang="ts">
	import { selectedRecipe, closeRecipeModal } from '../stores/currentRecipe';
	import { goto } from '$app/navigation';
	import ClockIcon from '$lib/assets/icons/clock_icon.svelte';
    import HeartIcon from '$lib/assets/icons/heart_icon.svelte';
    import AddToCalendarIcon from '$lib/assets/icons/addToCalendar_icon.svelte';
    import CartPlusIcon from '$lib/assets/icons/cartPlus_icon.svelte';
</script>

{#if $selectedRecipe}
	<!-- blurry background -->
	<div
		class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
		onclick={() => closeRecipeModal()}
		role="button"
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') goto('/');
		}}
		tabindex="0"
	>
		<!-- modal container (with anti propagation)-->
		<div
			class="bg-base-100 rounded-2xl shadow-lg max-w-4xl max-h-140 overflow-y-auto w-[90%] p-6 mt-25 relative transform transition-all duration-300 scale-100 flex justify-between"
			tabindex="-1"
			role="button"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
		>
            <!-- Left side -->
			<div>
				<!-- Close button -->
				<div class="p-2.5 bg-base-100 absolute top-0 right-0 rounded-full">
					<button
						class="btn btn-sm btn-circle border border-primary text-primary"
						onclick={() => closeRecipeModal()}
					>
						✕
					</button>
				</div>

				<!-- Recipe Title -->
				<h2 class="text-2xl font-bold text-primary">{$selectedRecipe.name}</h2>

				<!-- Prep time & servings-->
				<div class="flex items-center gap-[1rem] opacity-80 mb-5 mt-1">
					<div class="flex items-center gap-[0.5rem]">
						<ClockIcon />
						<p>
							{$selectedRecipe.prepTimeMinutes} min
						</p>
					</div>
					<p>|</p>
					<p>
						{$selectedRecipe.servings} servings
					</p>
				</div>

				<!-- Ingredients -->
				<h3 class="font-semibold mt-3 mb-1">Ingredients</h3>
				<ul class="list-disc list-inside text-sm opacity-80">
					{#each $selectedRecipe.ingredients as ing}
						<li>{ing.name} — {ing.amount}{ing.unit ? ` ${ing.unit}` : ''}</li>
					{/each}
				</ul>

				<!-- Steps -->
				<h3 class="font-semibold mt-4 mb-1">Steps</h3>
				<ol class="list-decimal list-inside text-sm opacity-80">
					{#each $selectedRecipe.steps as step}
						<li>{step}</li>
					{/each}
				</ol>
			</div>
            <!-- Right side -->
			<div>
                <!-- Image -->
				<img
					src={$selectedRecipe.image ?? 'https://via.placeholder.com/300x200?text=Recipe'}
					alt={$selectedRecipe.name}
					class="object-cover h-68 w-68 rounded-lg"
				/>
                <!-- Dish info  -->
				<div class="flex justify-center">
					<p class="opacity-80 mt-3">
						{$selectedRecipe.dishType} • {$selectedRecipe.meatType} • {$selectedRecipe.difficulty}
					</p>
				</div>
                <!-- Interactive buttons -->
                <div class="flex justify-center mt-7 gap-[1rem] items-center">
                    <p>|</p>
                    <div class="tooltip tooltip-top" data-tip="Add to planner">
                        <button class="btn btn-sm btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300">
                            <AddToCalendarIcon />
                        </button>
                    </div>
                    <p>|</p>
                    <div class="tooltip tooltip-top" data-tip="Add to shopping list">
                        <button class="btn btn-sm btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300">
                            <CartPlusIcon />
                        </button>
                    </div>
                    <p>|</p>
                    <div class="tooltip" data-tip="Save to favorites">
                        <button class="btn btn-sm btn-circle btn-ghost text-primary hover:bg-primary hover:text-base-300">
                            <HeartIcon />
                        </button>
                    </div>
                    <p>|</p>
				</div>
			</div>
		</div>
	</div>
{/if}
