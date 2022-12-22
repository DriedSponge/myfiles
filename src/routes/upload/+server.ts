import {error, json} from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import * as fs from "fs";
import sdk, {AppwriteException, InputFile} from 'node-appwrite';
import {Readable} from "stream";
import * as process from "process";
import {PUBLIC_PROJECT_ENDPOINT, PUBLIC_PROJECT_ID} from "$env/static/public";

export const POST = (async ({ request, url }) => {
    const client = new sdk.Client();
    if(!request.headers.get("x-appwrite-key")){
        throw error(401,"No api key supplied")
    }
    client.setEndpoint(PUBLIC_PROJECT_ENDPOINT)
    client.setProject(PUBLIC_PROJECT_ID)
    // @ts-ignore
    client.setKey(request.headers.get("x-appwrite-key").toString())
    const data = await request.formData();
    const file = data.get("file") as File;
    if(!file){
        throw error(400,"No file attached")
    }
    const directory = `temp/${file.name}`
    const storage = new sdk.Storage(client);
    await fs.promises.writeFile(directory, Buffer.from(await file.arrayBuffer()))
    try {
        //simple check for api key
        const health = new sdk.Health(client);
        await health.getTime();

        const appFile = await storage.createFile("files",file.name,InputFile.fromPath(directory,file.name))
        await fs.promises.unlink(directory);
        return json({success:true,url:`${url.origin}/${file.name}`,raw_url: `${PUBLIC_PROJECT_ENDPOINT}/storage/buckets/${appFile.bucketId}/files/${appFile.$id}/view?project=${PUBLIC_PROJECT_ID}`})
    }catch (e){
        await fs.promises.unlink(directory);
        console.log(e)
        return json({sucess:false})
    }


}) satisfies RequestHandler;