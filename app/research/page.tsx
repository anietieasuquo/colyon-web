import Research from "@/views/Research";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Colyon Research | Multi-agent breakthroughs",
    description:
        "Read Colyon's research on multi-agent intelligence, adaptive security, and explainable AI.",
    path: "/research",
});

export default function ResearchPage() {
    return <Research/>;
}
