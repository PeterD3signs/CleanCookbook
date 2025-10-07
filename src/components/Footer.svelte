<script lang="ts">
    import LinkedInIcon from "$lib/assets/icons/linkedin_icon.svelte";
    import YoutubeIcon from "$lib/assets/icons/youtube_icon.svelte";
    import GithubIcon from "$lib/assets/icons/github_icon.svelte";

    const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/piotr-kosowicz-4896b9352',
			icon: LinkedInIcon
		},
		{
			name: 'GitHub',
			url: 'https://github.com/PeterD3signs',
			icon: GithubIcon
		},
		{
			name: 'Youtube',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			icon: YoutubeIcon
		}
	];
</script>

<footer class="bg-base-300 text-base-content p-6 mt-5 flex justify-between items-end">
	<div class="ml-6">
        <p>If you like the clean cookbook</p>
        <p>and are interested about what elese I am doing,</p>
        <p>please don't hasitate to visit me on my social media:</p>
    </div>
    <div class="mr-8">
        <div>
				<h3 class="text-xl mb-2 font-semibold">Socials</h3>
				{#each socialLinks as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener"
						class="mb-1 flex items-center gap-2 hover:underline"
					>
                        <svelte:component this={link.icon} class = 'text-primary'/>
						<span>{link.name}</span>
					</a>
				{/each}
			</div>
    </div>
</footer>
