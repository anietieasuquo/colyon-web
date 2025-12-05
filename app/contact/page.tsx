import ContactUs from "@/views/ContactUs";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Contact Colyon | Talk to our team",
    description: "Reach Colyon for partnerships, media, product support, and research collaborations.",
    path: "/contact",
});

export default function ContactPage() {
    return <ContactUs/>;
}
