import {buildMetadata} from "@/lib/seo";
import MonchainCheckCompliance from "@/views/MonchainCheckCompliance";

export const metadata = buildMetadata({
    title: "Compliance & KYT Automation | Monchain Check by Colyon",
    description: "Connect Monchain Check scores to Travel Rule partners, case management tools, and audit workflows to accelerate compliance investigations.",
    path: "/products/monchain/check/compliance",
    type: "website",
});

const ComplianceAutomationPage = () => {
    return <MonchainCheckCompliance/>;
};

export default ComplianceAutomationPage;
