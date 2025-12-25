import TalkToUs from "@/views/TalkToUs";
import {buildMetadata} from "@/lib/seo";
import {Metadata} from "next";
import {Suspense} from "react";

export const metadata: Metadata = buildMetadata({
    title: "Talk to Colyon | Enterprise Web3 Risk & Compliance",
    description: "Connect with our B2B team to scope Monchain deployments, compliance automation, and safety orchestration across your Web3 stack.",
    keywords: [
        "Colyon sales",
        "Monchain enterprise",
        "Monchain business",
        "Web3 compliance platform",
        "KYB automation",
        "AI risk ops",
    ],
    path: "/talk-to-us",
});

export default function TalkToUsPage() {
    return (
        <Suspense fallback={<div className="py-16 text-center text-sm text-foreground/60">Loading form…</div>}>
            <TalkToUs/>
        </Suspense>
    );
}
