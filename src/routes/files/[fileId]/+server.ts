import type {RequestHandler} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const GET = (async ({request,params}) =>{
    return  Response.redirect(`https://appwrite.driedsponge.net/v1/storage/buckets/files/files/${params.fileId}/view?project=63843ea0359d982fc2ff`,301)
}) satisfies RequestHandler