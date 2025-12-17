import {Metadata} from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Colyon Privacy Policy",
    description:
        "Review how Colyon handles data, privacy protections, and compliance across our products.",
    keywords: [
        "Colyon privacy",
        "Colyon data protection",
        "AI agent privacy",
        "multi-agent compliance",
        "Monchain security",
    ],
    path: "/privacy",
});

export default function PrivacyPage() {
    return <PrivacyPolicy/>;
}
