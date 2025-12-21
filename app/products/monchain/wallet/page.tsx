import MonchainWallet from "@/views/MonchainWallet";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Monchain AI Wallet by Colyon | AI-powered smart crypto wallet",
    description:
        "Discover Monchain Wallet, Colyon's AI-powered crypto wallet that proactively stops fraud in real-time to prevent loss of funds. Built using Colyon's adaptive multi-agent intelligence, Monchain Wallet combines proactive security with AI-driven trading signals and market insights, all in a non-custodial wallet.",
    path: "/products/monchain/wallet",
    type: "website",
});

export default function MonchainWalletPage() {
    return <MonchainWallet/>;
}
