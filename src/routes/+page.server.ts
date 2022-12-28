import type {PageServerLoad} from "./$types";
import sdk from "node-appwrite";
import {PUBLIC_PROJECT_ENDPOINT, PUBLIC_PROJECT_ID} from "$env/static/public";
import {APPWRITE_API_KEY} from "$env/static/private";

export  const load = (async ()=>{
    const client = new sdk.Client();
    client.setEndpoint(PUBLIC_PROJECT_ENDPOINT)
    client.setProject(PUBLIC_PROJECT_ID)
    client.setKey(APPWRITE_API_KEY)
    const storage = new sdk.Storage(client);
    let total = await storage.listFiles("files")
    return {total:total.total}
}) satisfies PageServerLoad