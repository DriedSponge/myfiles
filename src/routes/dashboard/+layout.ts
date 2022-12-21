import AppwriteManager from "$lib/AppwriteManager";
import type {PageLoad} from "./$types";

export let ssr = false;
export const load = (async () =>{
    await AppwriteManager.authenticated();
    return
}) satisfies PageLoad;