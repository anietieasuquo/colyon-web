import XAI from "@/views/XAI";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Colyon XAI | Explainable multi-agent systems",
    description:
        "How Colyon delivers explainable AI decisions with transparent, auditable reasoning across our agent colony.",
    path: "/xai",
});

export default function XAIPAge() {
    return <XAI/>;
}
