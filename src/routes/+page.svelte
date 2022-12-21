<script lang="ts">
  import AppwriteManager from "$lib/AppwriteManager";
  import { goto } from "$app/navigation";
  import LoginForm from "$lib/Auth/LoginForm.svelte";
  import { authenticated } from "$lib/Auth/AuthStore";
  import { browser } from "$app/environment";

  export const prerender = false;
</script>

<svelte:head>
  <title>DriedSponge's Image Server</title>
</svelte:head>
<a href="/dashboard" class="text-center">Dashboard</a>