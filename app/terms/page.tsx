import {Metadata} from "next";
import TermsOfService from "@/views/TermsOfService";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Colyon Terms of Service",
    description: "Understand the legal terms governing use of Colyon products and services.",
    keywords: [
        "Colyon terms",
        "Colyon legal",
        "multi-agent SaaS terms",
        "Monchain usage terms",
        "AI agent compliance",
    ],
    path: "/terms",
});

export default function TermsPage() {
    return <TermsOfService/>;
}
