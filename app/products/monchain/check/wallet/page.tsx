import {buildMetadata} from "@/lib/seo";
import MonchainCheckWallet from "@/views/MonchainCheckWallet";

export const metadata = buildMetadata({
    title: "Wallet & dApp Risk Banners | Monchain Check by Colyon",
    description: "Learn how to embed Monchain Check signals directly inside wallet and dApp experiences to warn users before they sign risky transactions.",
    path: "/products/monchain/check/wallet",
    type: "website",
});

const WalletRiskBannerPage = () => {
    return <MonchainCheckWallet/>;
};

export default WalletRiskBannerPage;

