import News from "@/views/News";
import {buildMetadata} from "@/lib/seo";
import {Metadata} from "next";

export const metadata: Metadata = buildMetadata({
    title: "Colyon News & Updates",
    description: "Latest Colyon announcements, research breakthroughs, and product launches.",
    keywords: [
        "Colyon press",
        "Colyon announcements",
        "multi-agent research",
        "Monchain updates",
        "Colyon blog",
    ],
    path: "/news",
});

export default function NewsPage() {
    return <News/>;
}
