import News from "@/views/News";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Colyon News & Updates",
    description: "Latest Colyon announcements, research breakthroughs, and product launches.",
    path: "/news",
});

export default function NewsPage() {
    return <News/>;
}
