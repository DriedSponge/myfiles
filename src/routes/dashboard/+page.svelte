<script lang="ts">
  import AppwriteManager from "$lib/AppwriteManager";

  import { username } from "$lib/Auth/AuthStore";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";

  
</script>

<div>
    <Header>Welcome to the dashboard, {$username}!</Header>
</div>
