import PrivacyPolicy from "@/views/PrivacyPolicy";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Colyon Privacy Policy",
    description:
        "Review how Colyon handles data, privacy protections, and compliance across our products.",
    path: "/privacy",
});

export default function PrivacyPage() {
    return <PrivacyPolicy/>;
}
