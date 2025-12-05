import {Metadata} from "next";
import NewsDetail from "@/views/NewsDetail";
import {getNewsBySlug} from "@/lib/serverNews";
import {buildMetadata} from "@/lib/seo";


export const dynamic = "force-dynamic";

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const news = await getNewsBySlug(params.slug);

    if (!news) {
        return buildMetadata({
            title: "Colyon News",
            description: "Latest updates from Colyon",
            path: `/news/${params.slug}`,
            noIndex: true,
        });
    }

    return buildMetadata({
        title: `${news.title} | Colyon News`,
        description: news.description,
        path: `/news/${params.slug}`,
        type: "article",
        publishedTime: new Date(news.date).toISOString(),
        image: news.featuredImage,
        keywords: [news.category, "Colyon", "news"],
    });
}

export default function NewsDetailPage() {
    return <NewsDetail/>;
}
