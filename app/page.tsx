import Index from "@/views/Index";
import {buildMetadata, siteConfig} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Colyon | A colony of AI agents",
    description: siteConfig.description,
    path: "/",
});

export default function HomePage() {
    return <Index/>;
}
