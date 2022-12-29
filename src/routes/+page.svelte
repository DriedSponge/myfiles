<script lang="ts">
  import type { PageData } from './$types';
  import {page} from "$app/stores"
  export let data:PageData;
</script>

<svelte:head>
  <title>DriedSponge's File Server | Welcome</title>
  <meta property="og:title" content="DriedSponge's File Server | Welcome" />
  <meta property="og:description" content="{data.total} Total Files and Counting..." />
  <meta name="description" content="{data.total} Total Files and Counting..." />
</svelte:head>
<div class="flex flex-col items-center justify-center min-h-screen space-y-4 pb-3 mx-3">
  <div class="container max-w-lg space-y-4">
    <div class="text-center space-y-3">
      <h1 class="text-white text-3xl md:text-6xl">Welcome</h1>
      <h2 class="text-gray-400 text-xl md:text-2xl"><strong>{data.total}</strong> Total Files and Counting...</h2>
    </div>
    <div class="text-box">
      <h3>What's This?</h3>
      <p>
        If you're here, I probably shared a link with you at some point. I made this website as a file host for any file
        I upload using ShareX, or another application. It makes it easy for me to share files with others using links like <code>{$page.url.origin}/FILENAME</code>.
      </p>
    </div>
    <div class="text-box">
      <h3>How did you make it?</h3>
      <p>
        It's made using
        <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>,
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>,
        and
        <a rel="noreferrer" target="_blank" href="https://appwrite.io/">Appwrite</a>.
        You can find the source code <a rel="noreferrer" href="https://github.com/DriedSponge/myfiles" target="_blank">here</a>.
      </p>
    </div>
    <div class="text-box">
      <h3>Can I self host this myself?</h3>
      <p>
        No.
      </p>
    </div>
  </div>
</div>
<style lang="postcss">
  p{
    @apply text-center text-gray-100 text-base md:text-lg;
  }
  h3{
    @apply text-center text-white font-bold text-lg md:text-xl tracking-wide;
  }
  .text-box{
    @apply bg-backroundsecondary p-4 rounded-xl space-y-1;
  }
  a{
    @apply text-clickblue hover:text-blue-300;
  }
</style>
