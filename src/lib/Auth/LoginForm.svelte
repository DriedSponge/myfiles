<script>
  import AppwriteManager from "$lib/AppwriteManager";
  import {authenticated as loggedIn, authenticated, username} from "$lib/Auth/AuthStore";
  import Button from "$lib/forms/Button.svelte";

  let email = "";
  let password = "";

  // Use blur event
  async function login() {
    await AppwriteManager.login(email, password).then((response) => {
      console.log(response);
      AppwriteManager.authenticated();
      authenticated.set(true);
    });
  }

</script>
<div class="mx-auto flex flex-col justify-center items-center max-w-lg align-middle h-screen">
  <div class="bg-backroundsecondary px-4 py-5 md:py-6 md:px-6 mx-2 md:mx-0  rounded-lg shadow-xl">
    <h1 class="text-center text-white mb-3 font-bold text-xl md:text-2xl">DriedSponge's File Server</h1>
    <h2 class="text-center text-white mb-3  text-lg md:text-xl">Please Login</h2>
    <form on:submit|preventDefault={login}>
        <input bind:value={email} type="email" placeholder="Email" />
        <input type="password" bind:value={password} placeholder="Password" />
        <Button class="my-1 rounded-lg" name="Login" style="danger" type="submit" />
    </form>
    <br>
    <p class="text-center text-clickblue underline">What's this?</p>
  </div>
</div>
<style lang="postcss">
  input {
    @apply my-1 w-full p-3 border-none rounded-lg tracking-wide;
  }
</style>
