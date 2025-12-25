import Safety from "@/views/Safety";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Colyon Safety | Responsible multi-agent AI",
    description:
        "Discover how Colyon builds accountable, auditable AI agents with safety primitives baked into every layer.",
    path: "/safety",
});

export default function SafetyPage() {
    return <Safety/>;
}
