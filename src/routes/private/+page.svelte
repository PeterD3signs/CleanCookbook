<script lang="ts">
	let { data } = $props();
	let { user, supabase } = $derived(data);

	const logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
	};
</script>

<div class="">
  <!-- name + log out -->
	<div class="flex p-5 m-10 bg-base-300 justify-between rounded-xl">
		<p class="text-3xl">{user?.email}</p>
		<button class="btn btn-primary btn-outline" onclick={logout}>Log out</button>
	</div>

	<!-- navigation -->
  <div class="flex">
		<div class="rounded-xl p-5 bg-base-300 m-10">
		</div>
    <div class="rounded-xl p-5 bg-base-300 m-10">
		</div>
    <div class="rounded-xl p-5 bg-base-300 m-10">
		</div>
	</div>

  <!-- stats -->
  <div class="flex flex-col p-5 m-10 bg-base-300 justify-between rounded-xl">
		<p>Member for:</p>
    <p>Own recepies:</p>
    <p>Saved recepies:</p>
    ...
	</div>

	<!-- account option -->
	<div class="rounded-xl p-5 bg-base-300 m-10">
		<div class="flex gap-3 items-end justify-between">
			<button class="btn btn-error btn-outline btn-xs" onclick={logout}>Delete account</button>
			<div class="flex gap-3 justify-end items-end">
				<button class="btn btn-outline" onclick={logout}>Change password</button>
				<button class="btn btn-outline" onclick={logout}>Change e-mail</button>
			</div>
		</div>
	</div>
</div>
