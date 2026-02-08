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
    const blocks = await fetchChildren(pageId);
    return blocks;
})

async function fetchChildren(blockId: string): Promise<BlockObjectResponse[]> {
    let children: BlockObjectResponse[] = [];
    let cursor: string | undefined;

    while (true) {
        const response = await notion.blocks.children.list({
            block_id: blockId,
            start_cursor: cursor,
        });

        const results = response.results as BlockObjectResponse[];
        children = [...children, ...results];

        if (!response.has_more) {
            break;
        }
        cursor = response.next_cursor as string;
    }

    // Recursively fetch children for blocks that have them
    const childrenWithNested = await Promise.all(
        children.map(async (block) => {
            if (block.has_children) {
                // @ts-ignore
                block.children = await fetchChildren(block.id);
            }
            return block;
        })
    );

    return childrenWithNested;
}
