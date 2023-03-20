<script lang="ts">
    import type { PageData } from './$types';
    import { toast } from '@zerodevx/svelte-toast'
    import { Storage } from "appwrite";
    import AppwriteManager from "$lib/AppwriteManager";
    import { browser } from "$app/environment";

    import dayjs from "dayjs";
    export let data: PageData;
    let storage = new Storage(AppwriteManager.client);
    let copy = (async (text:String)=>{
        await  navigator.clipboard.writeText(text)
        toast.push("Copied!")
    })
    function readBytes(bytes) {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let unitIndex = 0;

        while (bytes >= 1024) {
            bytes /= 1024;
            unitIndex++;
        }

        return `${bytes.toFixed(2)} ${units[unitIndex]}`;
    }

    function date(date){
        return dayjs(new Date(date)).format("M/D/YYYY h:mm A")
    }
    function share(title, url){
        navigator.share({
            title: title,
            url: url
        }).then(() => {
            console.log("Shared");
        })
    }
</script>
<svelte:head>
    {#if data.found}
        <meta name="robots" content="noindex">
        <title>{`DriedSponge.net | Files - ${data.name}`}</title>
        <meta name="twitter:title" content={data.name} />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:image" content="{data.url}"/>
        <meta property="twitter:image:src" content="{data.url}"/>
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
        <div>
            <h1 class="text-center text-white sm:text-4xl text-3xl font-bold">{data.name}</h1>
            <p class="text-center text-gray-400 text-md">{readBytes(data.size)} &bull; {data.type} &bull; Created {date(data.created_at)}</p>
        </div>
        <figure class="flex items-center justify-center container max-h-screen overflow-y-auto">
            <img src="{data.url}" class="object-contain shadow-xl sm:shadow-2xl rounded-lg">
        </figure>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 text-center text-md sm:text-lg items-center justify-center">
            <a class="button" href="{data.download}">Download</a>
            {#if browser}
            {#if navigator.share}
                <button class="button" on:click={(()=>{share("File "+data.name,data.pageUrl)})}>Share</button>
                {:else}
            <button class="button" on:click={copy(data.pageUrl)}>Copy Link</button>
            <button class="button" on:click={copy(data.url)}>Copy Image Link</button>
            {/if}
            {/if}
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
