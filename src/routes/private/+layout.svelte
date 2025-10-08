<script lang="ts">
    import type { LayoutData } from "../$types";
    let { data, children } = $props<{data: LayoutData, children: any}>();
    let { supabase } = $derived(data);
    const logout = async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error(error);
      }
    };
</script>
<header>
    <nav>
      <a href="/">Home</a>
    </nav>
    <button onclick={logout}>Logout</button>
</header>
<main>
    {@render children()}
</main>