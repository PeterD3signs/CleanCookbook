<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { isHorizontal } from '../stores/orientation';
	import Logo from './Logo.svelte';
	import InfoIcon from '$lib/assets/icons/info_icon.svelte';
</script>

<header class="sticky top-0 z-1000">
	<div class="navbar bg-base-300">
		<!-- start (only shown in vertical view)-->
		<div class="navbar-start pl-[1.2rem]">
			<!-- About -->
			<button class="btn btn-ghost hover:text-primary" on:click={() => goto('/about')}> <InfoIcon /></button>
		</div>
		<!-- center -->
		<div class="navbar-center">
			<Logo />
		</div>
		<!-- end -->
		<div class="navbar-end pr-[1.6rem]">
			<!-- Dropdown subdomain selection -->
			<div class="dropdown dropdown-hover dropdown-center">
				<div tabindex="0" role="button" class="btn m-1 flex flex-col btn-ghost hover:text-primary" on:click={() => goto('/')}>
					menu
				</div>
				<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 pl-0 shadow-sm bg-base-300 border-b border-l border-r">
					<li><button class="btn btn-ghost hover:text-primary justify-start" on:click={() => goto('/recipes')}>recepies</button></li>
					<li><button class="btn btn-ghost hover:text-primary justify-start" on:click={() => goto('/planner')}>planner</button></li>
					<li><button class="btn btn-ghost hover:text-primary justify-start whitespace-nowrap" on:click={() => goto('/shoppingList')}>shopping list</button></li>
				</ul>
			</div>
			<!-- Logging in -->
			<button class="btn btn-ghost hover:text-primary"> log in </button>
		</div>
	</div>
</header>
