<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import type { User } from '@supabase/supabase-js';
	import '../app.css';
	import Header from '../components/Header.svelte';
	import { watchResize } from '$lib/resizeHelper';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	let user: null | User = $state(null);
	let userEmail = $derived.by(() => {
		if (user) {
			return user.email;
		}
		return null;
	});
	let userEmailFirstLetter: null | string = $derived.by(() => {
		if (userEmail) {
			return userEmail.charAt(0).toUpperCase();
		}
		return null;
	});

	onMount(() => {
		const cleanup = watchResize();
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
			user = newSession?.user ?? null;
		});

		return () => {
			cleanup();
			data.subscription.unsubscribe();
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header {userEmailFirstLetter}/>
<div
	class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
	{@render children()}
</div>
