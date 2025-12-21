import {buildMetadata} from "@/lib/seo";
import MonchainCheck from "@/views/MonchainCheck";

export const metadata = buildMetadata({
    title: "Monchain Check by Colyon | AI-powered crypto platform",
    description:
        "With Monchain Check, you can instantly check any wallet or transaction address for fraud signals. Powered by the same AI engine that secures Colyon's enterprise API and wallet.",
    path: "/products/monchain/check",
    type: "website",
});

export default function MonchainCheckPage() {
    return <MonchainCheck/>;
}
