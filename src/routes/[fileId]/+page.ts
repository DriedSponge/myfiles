import type { PageLoad } from './$types';
import { Client, Storage } from "appwrite";
import AppwriteManager from "$lib/AppwriteManager";

export const load = (async ({ params }) => {
    const storage = new Storage(AppwriteManager.client);
    return await storage.getFile("files",params.fileId).then((res)=>{
        return {found: true, name: storage.getFileView("files",params.fileId)}
    }).catch((error)=>{
        return {found: false}
    })
}) satisfies PageLoad;