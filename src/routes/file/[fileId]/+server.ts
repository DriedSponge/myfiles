import type {RequestHandler} from "@sveltejs/kit";
import {PUBLIC_PROJECT_ENDPOINT, PUBLIC_PROJECT_ID} from "$env/static/public";

export const GET = (async ({params}) =>{
    return  Response.redirect(`${PUBLIC_PROJECT_ENDPOINT}/storage/buckets/files/files/${params.fileId}/view?project=${PUBLIC_PROJECT_ID}`,301)
}) satisfies RequestHandler