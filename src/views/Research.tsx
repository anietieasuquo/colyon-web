import {Brain, Network, Zap} from "lucide-react";
import PageHeader from "@/components/PageHeader";

const Research = () => {
    const publications = [
        {
            title: "Game-Theoretic MARL for Analyzing and Countering Sophisticated Economic Attacks.",
            content: "This research pioneers the use of game-theoretic multi-agent reinforcement learning (MARL) to model and defend against sophisticated economic exploits in decentralized finance (DeFi). Instead of just detecting transactional fraud, we treat the network as a complex economic game. Our AI agents, representing attackers and defenders, compete to find and neutralize strategic vulnerabilities like flash loan exploits and oracle manipulation. By simulating these adversarial interactions, we aim to proactively identify and patch critical security flaws before they can be exploited, building a new generation of resilient and self-defending financial systems.",
            year: "2025",
            href: "/research",
            colour: "border-accent"
        },
        {
            title: "GraphSwarm: A Communicating Multi-Agent Reinforcement Learning System for Proactive Detection of Complex DeFi Exploits.",
            content: "A swarm of cooperative AI agents, equipped with local graph perception and a learned communication protocol, can detect and attribute sophisticated, multi-step fraud schemes on Ethereum with higher precision and recall than monolithic (single-agent) GNN models, while providing inherent explainability via its communication traces.",
            year: "2025",
            href: "/research",
            colour: "border-mint"
        },
    ];
    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-6">
                <PageHeader
                    title="Research at Colyon"
                    description="Advancing the frontier of collective intelligence through multi-agent systems, adaptive learning, and secure AI architectures."
                />

                {/* Research Areas */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div
                        className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors animate-fade-in">
                        <Brain className="w-12 h-12 text-accent mb-4"/>
                        <h3 className="text-2xl font-semibold mb-4">Multi-Agent Intelligence</h3>
                        <p className="text-foreground/70">
                            Exploring how autonomous AI agents can collaborate, learn from each other,
                            and make collective decisions that surpass individual capabilities.
                        </p>
                    </div>

                    <div
                        className="bg-card border border-border rounded-lg p-8 hover:border-mint transition-colors animate-fade-in"
                        style={{animationDelay: "0.1s"}}>
                        <Network className="w-12 h-12 text-mint mb-4"/>
                        <h3 className="text-2xl font-semibold mb-4">Adaptive Security</h3>
                        <p className="text-foreground/70">
                            Developing AI systems that continuously evolve to detect emerging threats,
                            predict attack patterns, and protect digital ecosystems in real-time.
                        </p>
                    </div>

                    <div
                        className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors animate-fade-in"
                        style={{animationDelay: "0.2s"}}>
                        <Zap className="w-12 h-12 text-accent mb-4"/>
                        <h3 className="text-2xl font-semibold mb-4">Transparent AI</h3>
                        <p className="text-foreground/70">
                            Building explainable AI frameworks that make complex decision-making processes
                            understandable, auditable, and trustworthy.
                        </p>
                    </div>
                </div>

                {/* Publications Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Recent Publications</h2>
                    <div className="space-y-6">
                        {
                            publications.map((pub, index) => (
                                <div key={index} className={`border-l-2 ${pub.colour} pl-6 py-4`}>
                                    <h4 className="text-xl font-semibold mb-2">{pub.title}</h4>
                                    <p className="text-foreground/60 text-sm mb-2">Colyon Research Team • {pub.year}</p>
                                    <p className="text-foreground/70">{pub.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Research;
