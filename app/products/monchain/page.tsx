import Monchain from "@/views/Monchain";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Monchain by Colyon | AI-powered crypto platform",
    description:
        "Discover Monchain, Colyon's AI-powered security platform that stops crypto fraud before it happens. Built by Colyon using adaptive multi-agent intelligence, we provide a proactive security layer for wallets, exchanges, and DeFi platforms, shifting from reactive warnings to real-time prevention.",
    path: "/products/monchain",
    type: "website",
});

export default function MonchainPage() {
    return <Monchain/>;
}
