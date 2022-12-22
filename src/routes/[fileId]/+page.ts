import type { PageLoad } from './$types';
import { Client, Storage } from "appwrite";
import AppwriteManager from "$lib/AppwriteManager";

export const load = (async ({ url, params }) => {
    const storage = new Storage(AppwriteManager.client);
    try{
        const file = await storage.getFile("files",params.fileId);
        return {
            found: true,
            url: storage.getFileView("files",params.fileId),name:file.name, pageUrl:url,
            type:file.mimeType,
            download: await storage.getFileDownload("files",file.name).href,
            size: file.sizeOriginal,
            created_at: file.$createdAt
        }
    }catch (e){
        return {found: false}
    }
}) satisfies PageLoad;