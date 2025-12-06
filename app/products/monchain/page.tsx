import Monchain from "@/views/Monchain";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Monchain by Colyon | AI-powered crypto wallet",
    description:
        "Discover Monchain, Colyon's AI-powered crypto wallet that proactively stops fraud and scams in real-time to prevent loss of funds. Monchain API also helps developers build secure applications by integrating with Colyon's AI-powered autonomous fraud detection engine.",
    path: "/products/monchain",
    type: "website",
});

export default function MonchainPage() {
    return <Monchain/>;
}
