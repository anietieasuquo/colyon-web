import TermsOfService from "@/views/TermsOfService";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Colyon Terms of Service",
    description: "Understand the legal terms governing use of Colyon products and services.",
    path: "/terms",
});

export default function TermsPage() {
    return <TermsOfService/>;
}
