import AboutUs from "@/views/AboutUs";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "About Colyon | Collective AI Research",
    description: "Learn about Colyon's team of MARL researchers building safer AI systems and the story behind our company.",
    path: "/about",
});

export default function AboutPage() {
    return <AboutUs/>;
}
