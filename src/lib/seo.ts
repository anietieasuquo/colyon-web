import type {Metadata} from "next";

export const siteConfig = {
    name: "Colyon",
    tagline: "A colony of AI agents",
    description: "Colyon builds collaborative AI systems that reason and act in complex environments. Our flagship product, Monchain, applies this architecture to secure the future of Web3.",
    url: "https://www.colyon.ai",
    logo: "/img/colyon-logo.png",
    ogImage: "/img/colyon-og-image.png",
    icon: "/favicon.png",
    twitter: "@colyonai",
    sameAs: [
        "https://twitter.com/colyonai",
        "https://linkedin.com/company/colyon",
        "https://github.com/colyonai",
        "https://medium.com/@colyon",
        "https://www.tiktok.com/@colyonai",
    ],
    contactEmail: "hello@colyon.ai",
    category: "Artificial Intelligence",
};

const defaultKeywords = [
    "ai",
    "colyon",
    "ai agents",
    "multi-agent systems",
    "ai safety",
    "monchain",
    "fraud intelligence",
    "crypto wallet",
    "collective intelligence",
    "artificial intelligence",
    "fraud detection",
    "blockchain",
    "non-custodial"
];

export type BuildMetadataOptions = {
    title?: string;
    description?: string;
    path?: string;
    image?: string;
    type?: "website" | "article" | "profile";
    keywords?: string[] | string;
    noIndex?: boolean;
    publishedTime?: string;
    modifiedTime?: string;
};

export const absoluteUrl = (path = "/"): string => {
    if (path.startsWith("http")) return path;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${siteConfig.url}${normalized}`;
};

export const buildMetadata = (options: BuildMetadataOptions = {}): Metadata => {
    const {
        title = `${siteConfig.name} | ${siteConfig.tagline}`,
        description = siteConfig.description,
        path = "/",
        image = siteConfig.ogImage,
        type = "website",
        keywords,
        noIndex,
        publishedTime,
        modifiedTime,
    } = options;

    const keywordsValue = keywords ?? defaultKeywords;
    const imageUrl = absoluteUrl(image);

    return {
        title,
        description,
        abstract: description,
        metadataBase: new URL(absoluteUrl(path)),
        applicationName: siteConfig.name,
        keywords: keywordsValue,
        alternates: {
            canonical: absoluteUrl(path),
        },
        authors: [
            {
                name: siteConfig.name,
                url: absoluteUrl(path)
            }
        ],
        creator: siteConfig.name,
        category: siteConfig.category,
        icons: {
            icon: absoluteUrl(siteConfig.icon),
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl(path),
            type,
            siteName: siteConfig.name,
            images: [{url: imageUrl}],
            ...(publishedTime ? {publishedTime} : {}),
            ...(modifiedTime ? {modifiedTime} : {}),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            creator: siteConfig.twitter,
            site: siteConfig.twitter,
            images: [imageUrl],
        },
        robots: noIndex
            ? {
                index: false,
                follow: false,
            }
            : undefined,
    };
};

export const siteUrl = siteConfig.url;
