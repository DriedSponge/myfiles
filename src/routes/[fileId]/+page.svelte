<script lang="ts">
    import type { PageData } from './$types';
    import { page } from "$app/stores"
    export let data: PageData;
</script>
<svelte:head>
    {#if data.found}
        <title>{`DriedSponge's Files - ${data.name}`}</title>
        <meta name="twitter:title" content={data.name} />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="DDriedSponge.net | Images" />
        <meta property="og:title" content={data.name} />
        <meta property="og:url" content={data.pageUrl} />
        <meta property="og:image:type" content="{data.type}"/>
    {:else }
        <title>File Not Found</title>
    {/if}
</svelte:head>
<div>
    <div class="flex w-full flex-row items-center justify-center h-screen">
        {#if data.found }

            <div>
                <h1 class="text-center text-white text-5xl font-bold">{data.name}</h1>
                <br>
                <img class="shadow-xl" src="{data.url}" alt="Blah blah"/>
            </div>

        {:else }
            <div>
                <h1 class="text-center text-white text-5xl font-bold">Not Found</h1>
            </div>
        {/if}
    </div>
</div>
