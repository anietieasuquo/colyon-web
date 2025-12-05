import {FileText, GitBranch, Lightbulb} from "lucide-react";
import PageHeader from "@/components/PageHeader";

const XAI = () => {
    const features = [
        {
            icon: Lightbulb,
            title: "Decision Transparency",
            description: "Every agent decision includes a human-readable explanation of why it was made, what factors were considered, and what alternatives were rejected.",
            hoverClass: "hover:border-accent",
            iconColor: "text-accent"
        },
        {
            icon: GitBranch,
            title: "Reasoning Paths",
            description: "Visualize the complete reasoning chain from input data to final decision, including inter-agent communications and consensus processes.",
            hoverClass: "hover:border-mint",
            iconColor: "text-mint"
        },
        {
            icon: FileText,
            title: "Audit Logs",
            description: "Complete, immutable audit trails for compliance, debugging, and continuous improvement of AI decision-making quality.",
            hoverClass: "hover:border-accent",
            iconColor: "text-accent"
        },
    ];
    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-6">
                <PageHeader
                    title="Explainable AI"
                    description="Making AI decisions transparent, understandable, and accountable. Every action our agents take can be traced, explained, and justified."
                />

                {/* Why XAI Matters */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-8">Why Explainability Matters</h2>
                    <div className="bg-card border border-border rounded-lg p-8">
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            As AI systems become more powerful and autonomous, understanding how they make
                            decisions becomes critical. Black-box AI is not acceptable when real money,
                            personal data, and user safety are at stake.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                            At Colyon, we believe that every AI decision should be explainable in human terms.
                            Our multi-agent systems don't just act, they explain their reasoning, show their
                            confidence levels, and provide audit trails for every action.
                        </p>
                    </div>
                </div>

                {/* XAI Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`text-center bg-card border border-border rounded-lg p-8 ${feature.hoverClass} transition-colors animate-fade-in`}
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="mb-4 text-primary justify-items-center">
                                <feature.icon className={`w-12 h-12 ${feature.iconColor} mb-4`}/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-foreground/70">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Example */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">XAI in Practice</h2>
                    <div className="bg-gradient-to-br from-accent/5 to-mint/5 border border-accent/20 rounded-xl p-8">
                        <h3 className="text-xl font-semibold mb-4 text-accent">
                            Example: Transaction Risk Assessment on Monchain
                        </h3>
                        <div className="space-y-4 text-foreground/70">
                            <div className="border-l-2 border-accent pl-4">
                                <p className="font-medium text-foreground mb-1">Input</p>
                                <p>User attempts to transfer 5 ETH to address 0x1234...</p>
                            </div>
                            <div className="border-l-2 border-mint pl-4">
                                <p className="font-medium text-foreground mb-1">Agent Analysis</p>
                                <p>
                                    • Address flagged by 3 agents as suspicious<br/>
                                    • Pattern matches known phishing campaigns (96% confidence)<br/>
                                    • No prior interaction history with this address<br/>
                                    • Transaction size exceeds user's typical range
                                </p>
                            </div>
                            <div className="border-l-2 border-accent pl-4">
                                <p className="font-medium text-foreground mb-1">Decision</p>
                                <p>Transaction blocked with high confidence (96%)</p>
                            </div>
                            <div className="border-l-2 border-mint pl-4">
                                <p className="font-medium text-foreground mb-1">Explanation to User</p>
                                <p className="italic">
                                    "This transaction was blocked because the recipient address shows multiple
                                    indicators of being a scam, including matching patterns from known phishing
                                    attacks. If you believe this is legitimate, you can override this decision."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default XAI;
