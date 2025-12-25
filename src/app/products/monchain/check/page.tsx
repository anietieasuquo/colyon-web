import {buildMetadata} from "@/lib/seo";
import MonchainCheck from "@/views/MonchainCheck";

export const metadata = buildMetadata({
    title: "Monchain Check by Colyon | AI-powered crypto platform",
    description:
        "Discover Monchain Check, Colyon's AI-powered security platform that stops crypto fraud before it happens. Built using Colyon's adaptive multi-agent intelligence, we provide a proactive security layer for wallets, exchanges, and DeFi platforms, shifting from reactive warnings to real-time prevention.",
    path: "/products/monchain/check",
    type: "website",
});

export default function MonchainCheckPage() {
    return <MonchainCheck/>;
}
