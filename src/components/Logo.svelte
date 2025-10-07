<script lang="ts">
    import { goto } from '$app/navigation';
</script>

<button on:click={() => goto('/')}>
    <div class="flex gap-[0.5rem]">
        <div class="flex flex-col items-end justify-center">
            <text class="text-primary font-mono text-[1rem]">The</text>
            <text class="text-primary font-mono text-[1rem]">clean</text>
        </div>
        <text class="text-primary font-mono text-[3rem]">Cookbook</text>
    </div>
</button>