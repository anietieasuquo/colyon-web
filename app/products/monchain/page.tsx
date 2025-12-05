import Monchain from "@/views/Monchain";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Monchain by Colyon | AI-powered crypto wallet",
    description:
        "Discover Monchain, Colyon's AI-powered wallet with real-time fraud detection and explainable protection.",
    path: "/products/monchain",
    type: "website",
});

export default function MonchainPage() {
    return <Monchain/>;
}
