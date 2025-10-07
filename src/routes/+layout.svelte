<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<div
    class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
    {@render children()}
</div>
<Footer />
