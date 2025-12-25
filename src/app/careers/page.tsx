import Careers from "@/views/Careers";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Careers at Colyon | Join the colony",
    description:
        "Join Colyon's team of researchers and engineers building safe, multi-agent systems and products like Monchain.",
    path: "/careers",
});

export default function CareersPage() {
    return <Careers/>;
}
