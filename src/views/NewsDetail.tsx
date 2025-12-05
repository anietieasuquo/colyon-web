"use client";
import {useEffect} from "react";
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";
import {ArrowLeft} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {fetchNews} from "@/store/newsSlice";
import AutoLinkText from "@/components/AutoLinkText";
import {slugify} from "@/lib/utils";
import {absoluteUrl, siteConfig} from "@/lib/seo";

const NewsDetail = () => {
    const params = useParams();
    const slug = typeof params?.slug === "string"
        ? params.slug
        : Array.isArray(params?.slug)
            ? params?.slug[0]
            : undefined;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {items, loading} = useAppSelector((state) => state.news);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchNews());
        }
    }, [dispatch, items.length]);

    const newsItem = items.find((item) =>
        item && slug && item.title && slugify(item.title) === slug
    );

    if (!loading && !newsItem) {
        // If not found, navigate back to /news
        router.push("/news");
        return null;
    }

    if (loading || !newsItem) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <p className="text-foreground/60">Loading...</p>
            </div>
        );
    }

    const borderColor = newsItem.accentColor === "accent" ? "border-accent" : "border-mint";
    const badgeClass = newsItem.accentColor === "accent"
        ? "bg-accent/10 text-accent border border-accent/20"
        : "bg-mint/10 text-mint border border-mint/20";

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: newsItem.title,
        datePublished: new Date(newsItem.date).toISOString(),
        image: newsItem.featuredImage ? [newsItem.featuredImage] : [absoluteUrl(siteConfig.ogImage)],
        description: newsItem.description,
        author: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: absoluteUrl(siteConfig.logo),
            },
        },
        mainEntityOfPage: absoluteUrl(`/news/${slug}`),
    };

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6">
                <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                    Back to News
                </Link>

                <article className="max-w-4xl mx-auto">
                    <script type="application/ld+json"
                            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/>
                    <div className={`border-l-4 ${borderColor} pl-8 animate-fade-in`}>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-foreground/60 text-sm">{newsItem.date}</span>
                            <span className={`px-3 py-1 ${badgeClass} rounded-full text-xs font-medium`}>
                                {newsItem.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            {newsItem.title}
                        </h1>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                                {newsItem.description}
                            </p>

                            {newsItem.content && (
                                <div className="text-foreground/70 leading-relaxed space-y-4">
                                    {/* Render paragraphs and auto-link URLs, preserving line breaks */}
                                    <AutoLinkText
                                        text={newsItem.content}
                                        paragraphClassName="mb-4"
                                        linkClassName="underline underline-offset-4 hover:text-foreground"
                                        treatSameOriginAsInternal
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};

export default NewsDetail;
