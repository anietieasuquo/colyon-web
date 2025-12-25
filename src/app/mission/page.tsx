import Mission from "@/views/Mission";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Colyon Mission | Building Cooperative AI",
  description:
    "Explore Colyon's mission to create trustworthy multi-agent systems that keep people safe while solving complex problems.",
  path: "/mission",
});

export default function MissionPage() {
  return <Mission />;
}
