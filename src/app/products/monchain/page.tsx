import Monchain from "@/views/Monchain";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Monchain by Colyon | Unified proactive security for Web3",
    description:
        "Explore Monchain, Colyon's proactive Web3 security platform. Learn how Monchain Check protects enterprises with APIs and UI toolkits, and how Monchain Wallet keeps consumers safe with AI-powered defenses.",
    path: "/monchain",
    type: "website",
});

export default function MonchainPage() {
    return <Monchain/>;
}

