import {cache} from "react";
import {newsItems} from "@/store/staticNews";
import {slugify} from "@/lib/utils";

export type StaticNewsItem = typeof newsItems[number];

export const getNewsBySlug = cache(async (slug: string) => {
    const normalized = slug?.toLowerCase();
    if (!normalized) return null;
    return newsItems.find((item) => slugify(item.title) === normalized) ?? null;
});
