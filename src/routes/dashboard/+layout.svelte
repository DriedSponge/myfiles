<script lang="ts">
  import AppwriteManager from "$lib/AppwriteManager";
  import { authenticated } from "$lib/Auth/AuthStore";
  import {goto} from "$app/navigation";
</script>
{#if $authenticated}
  <slot />
{:else}
    {#if $authenticated}
    <slot />
    {:else}
      <div class="appearance-none">
        { goto("/login") }
      </div>
    {/if}
{/if}
