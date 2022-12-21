<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div>
    {#if data.found }
        <img src="{data.name}"/>
        {:else }
        <p>Not found</p>
    {/if}
</div>
