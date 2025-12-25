import {buildMetadata} from "@/lib/seo";
import MonchainCheckExchange from "@/views/MonchainCheckExchange";

export const metadata = buildMetadata({
    title: "Exchange Workflow | Monchain Check",
    description: "See how Monchain Check automates fraud scoring, policy enforcement, and compliance workflows for centralized and hybrid exchanges.",
    path: "/products/monchain/check/exchange",
    type: "website",
});

const ExchangeWorkflowPage = () => {
    return <MonchainCheckExchange/>;
};

export default ExchangeWorkflowPage;
