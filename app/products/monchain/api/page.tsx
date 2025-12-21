import {buildMetadata} from "@/lib/seo";
import MonchainAPI from "@/views/MonchainAPI";

export const metadata = buildMetadata({
    title: "Monchain API by Colyon | AI-powered crypto security API",
    description:
        "Discover Monchain API, Colyon's AI-powered security platform that stops crypto fraud before it happens. Built using Colyon's adaptive multi-agent intelligence, we provide a proactive security layer for wallets, exchanges, and DeFi platforms, shifting from reactive warnings to real-time prevention.",
    path: "/products/monchain/api",
    type: "website",
});

export default function MonchainAPIPage() {
    return <MonchainAPI/>;
}
