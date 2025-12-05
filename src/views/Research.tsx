import {Brain, Network, Zap} from "lucide-react";
import PageHeader from "@/components/PageHeader";

const Research = () => {
    const researchAreas = [
        {
            icon: Brain,
            title: "Multi-Agent Intelligence",
            description: "Exploring how autonomous AI agents can collaborate, learn from each other, and make collective decisions that surpass individual capabilities.",
            hoverClass: "hover:border-accent",
            iconColor: "text-accent"
        },
        {
            icon: Network,
            title: "Adaptive Security",
            description: "Developing AI systems that continuously evolve to detect emerging threats, predict attack patterns, and protect digital ecosystems in real-time.",
            hoverClass: "hover:border-mint",
            iconColor: "text-mint"
        },
        {
            icon: Zap,
            title: "Transparent AI",
            description: "Building explainable AI frameworks that make complex decision-making processes understandable, auditable, and trustworthy.",
            hoverClass: "hover:border-accent",
            iconColor: "text-accent"
        },
    ];

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
                    {researchAreas.map((feature, index) => (
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

                {/* Publications Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Recent Publications</h2>
                    <div className="space-y-6">
                        {
                            publications.map((pub, index) => (
                                <div key={index} className={`border-l-2 ${pub.colour} pl-6 py-4`}>
                                    <h4 className="text-xl font-semibold mb-2">
                                        <a href={pub.href} className="hover:text-blue-600" target="_blank">
                                            {pub.title}
                                        </a>
                                    </h4>
                                    <p className="text-foreground/60 text-sm mb-2">
                                        Colyon Research Team • {pub.year}
                                    </p>
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
