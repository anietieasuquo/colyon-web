import ContactUs from "@/views/ContactUs";
import {buildMetadata} from "@/lib/seo";
import {Metadata} from "next";

export const metadata: Metadata = buildMetadata({
    title: "Contact Colyon | Talk to our team",
    description: "Reach Colyon for partnerships, media, product support, and research collaborations.",
    keywords: [
        "Colyon contact",
        "Colyon partnerships",
        "Colyon media inquiries",
        "AI agent sales",
        "Colyon support team",
    ],
    path: "/contact",
});

export default function ContactPage() {
    return <ContactUs/>;
}
