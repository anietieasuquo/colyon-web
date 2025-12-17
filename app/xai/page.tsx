import {Metadata} from "next";
import XAI from "@/views/XAI";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Colyon XAI | Explainable multi-agent systems",
    description:
        "How Colyon delivers explainable AI decisions with transparent, auditable reasoning across our agent colony.",
    keywords: [
        "explainable AI agents",
        "auditable multi-agent systems",
        "transparent AI reasoning",
        "Colyon XAI",
        "safety-first XAI",
    ],
    path: "/xai",
});

export default function XAIPAge() {
    return <XAI/>;
}
