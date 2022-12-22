<script lang="ts">
    import type { PageData } from './$types';
    import { page } from "$app/stores"
    import { toast } from '@zerodevx/svelte-toast'
    import { Client, Storage } from "appwrite";
    import AppwriteManager from "$lib/AppwriteManager";
    export let data: PageData;
    let storage = new Storage(AppwriteManager.client);
    let copy = (async (text:String)=>{
        await  navigator.clipboard.writeText(text)
        toast.push("Copied!")
    })
</script>
<svelte:head>
    {#if data.found}
        <title>{`DriedSponge.net | Files - ${data.name}`}</title>
        <meta name="twitter:title" content={data.name} />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:image" content="{data.url}"/>
        <meta name="twitter:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="DriedSponge.net | Files" />
        <meta property="og:title" content={data.name} />
        <meta property="og:url" content={data.pageUrl} />
        <meta property="og:image:type" content="{data.type}"/>
        <meta property="og:image" content="{data.url}"/>

    {:else }
        <title>File Not Found</title>
    {/if}
</svelte:head>
<div class="flex flex-col h-screen justify-center items-center space-y-4">
    {#if data.found }

        <h1 class="text-center text-white sm:text-5xl text-3xl font-bold">{data.name}</h1>
        <figure class="flex items-center justify-center container max-h-screen overflow-y-auto">
            <img src="{data.url}" class="object-contain shadow-xl sm:shadow-2xl rounded-lg">
        </figure>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 text-center text-md sm:text-lg items-center justify-center">
            <a class="button" href="{data.download}">Download</a>
            <button class="button" on:click={copy(data.pageUrl)}>Copy Link</button>
            <button class="button" on:click={copy(data.url)}>Copy Image Link</button>
        </div>
    {:else }
        <div>
            <h1 class="text-center text-white text-5xl font-bold">Not Found</h1>
        </div>
    {/if}
</div>
<style lang="postcss">
    .button{
        @apply text-white bg-backroundsecondary p-3 rounded-md block;
        @apply hover:bg-[#424B57] hover:shadow-xl;
        @apply transition-all ease-in-out duration-300;
    }
</style>
