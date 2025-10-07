<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
</script>

<header class="sticky top-0 z-1000">
	<div class="navbar bg-base-300">
		<div class="navbar-start">
		</div>
		<div class="navbar-center">
			<div class="flex gap-[0.5rem]">
				<div class="flex flex-col items-end justify-center">
					<text class="text-primary font-mono text-[1rem]">The</text>
					<text class="text-primary font-mono text-[1rem]">clean</text>
				</div>
				<text class="text-primary font-mono text-[3rem]">Cookbook</text>
			</div>
		</div>
		<div class="dropdown dropdown-hover dropdown-end">
			<div tabindex="0" role="button" class="btn m-1 flex flex-col btn-ghost">
				menu
			</div>
			<ul tabindex="0" class="dropdown-content menu bg-base-100 w-[10rem] rounded-box z-1 p-2 shadow-sm bg-base-300">
				<li><button class="btn btn-ghost hover:text-primary justify-start" on:click={() => goto('/')}>recepies</button></li>
				<li><button class="btn btn-ghost hover:text-primary justify-start" on:click={() => goto('/planner')}>planner</button></li>
				<li><button class="btn btn-ghost hover:text-primary justify-start" on:click={() => goto('/shoppingList')}>shopping list</button></li>
			</ul>
		</div>
		<div class="navbar-end">
			<button class="btn btn-ghost hover:text-primary"> log in </button>
		</div>
	</div>
</header>
