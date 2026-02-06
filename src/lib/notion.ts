import { BlockObjectResponse, Client, PageObjectResponse } from "@notionhq/client";
import { cache } from "react";
import 'server-only'

export const notion = new Client({
    auth: process.env.NEXT_APP_NOTION_TOKEN,
});

export const fetchPages = cache(async () => {
    const response = await notion.dataSources.query({
        data_source_id: process.env.NEXT_APP_NOTION_DATABASE_ID!,
        filter: {
            property: 'status',
            status: {
                equals: 'Live'
            }
        }
    });
    return response.results;
})

export const fetchBySlug = cache(async (slug: string) => {
    // console.log("FETCH SLUG VALUE:", slug)

    if (!slug) {
        throw new Error("Slug is undefined — route params are broken")
    }
    const response = await notion.dataSources.query({
        data_source_id: process.env.NEXT_APP_NOTION_DATABASE_ID!,
        filter: {
            property: 'slug',
            rich_text: {
                equals: slug
            }
        }
    });
    return response.results[0] as PageObjectResponse | undefined;
})

export const fetchPageBlogs = cache(async (pageId: string) => {
    const response = await notion.blocks.children.list({
        block_id: pageId,
    });
    return response.results as BlockObjectResponse[];
})
