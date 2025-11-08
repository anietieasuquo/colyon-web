import {AlertTriangle, ArrowRight, Eye, Lock, Shield} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

const Safety = () => {
    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-6">
                <PageHeader
                    title="Safety & Security"
                    description="Our architecture is built on the principle that intelligence should be collaborative, not uncontrollable. By designing systems where agents communicate, verify, and regulate one another, we aim to create AI that is both powerful and inherently safe."
                />

                {/* Safety Principles */}
                <div className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Safety Principles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
                            <div className="mb-4 justify-items-center">
                                <Shield className="w-12 h-12 text-accent text-center"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">Collective Alignment</h3>
                            <p className="text-foreground/70 leading-relaxed text-center">
                                Our colony model encourages <span
                                className="font-semibold">mutual accountability</span> among agents.
                                Each agent operates autonomously but within a framework of shared objectives and
                                alignment protocols.
                                This allows the system to identify inconsistencies, cross-check decisions, and reduce
                                the risk of any single agent acting unpredictably.
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-8 animate-fade-in"
                             style={{animationDelay: "0.1s"}}>
                            <div className="mb-4 justify-items-center">
                                <Lock className="w-12 h-12 text-mint"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">Privacy First</h3>
                            <p className="text-foreground/70 leading-relaxed text-center">
                                Our AI systems are designed with <span className="font-semibold">strict privacy protections</span> at
                                their core. We minimize
                                data collection, anonymize where possible, and ensure users remain in full control of
                                their information. Your data belongs to you, and we work relentlessly to keep it that
                                way.
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-8 animate-fade-in"
                             style={{animationDelay: "0.2s"}}>
                            <div className="mb-4 justify-items-center">
                                <Eye className="w-12 h-12 text-accent"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">Transparent Operations</h3>
                            <p className="text-foreground/70 leading-relaxed text-center">
                                Every interaction between agents, from decision-making to data flow, is <span
                                className="font-semibold">auditable and explainable</span>.
                                We design our AI systems to produce traceable reasoning paths, so humans can
                                understand why decisions were made, not just what decisions were made.
                                <Link to="/xai" className="gap-1 text-blue-500 hover:text-blue-700">
                                    {' '}Read more
                                </Link>
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-8 animate-fade-in"
                             style={{animationDelay: "0.3s"}}>
                            <div className="mb-4 justify-items-center">
                                <AlertTriangle className="w-12 h-12 text-mint"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">Human Oversight</h3>
                            <p className="text-foreground/70 leading-relaxed text-center">
                                Our agents are designed to remain grounded in <span
                                className="font-semibold">human intent</span>.
                                We integrate reinforcement learning from human feedback (RLHF-like methods) and ethical
                                constraint layers into our training process to ensure agents optimize not just for
                                performance, but for responsibility.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Safety in Action */}
                <div
                    className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12">
                    <h2 className="text-3xl font-bold mb-6">Safety in Action: Monchain</h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                        Our flagship product, Monchain, demonstrates our commitment to safety through
                        real-time fraud detection, transaction analysis, and user protection in the
                        cryptocurrency space.
                    </p>
                    <ul className="space-y-3 text-foreground/70">
                        <li className="flex items-start">
                            <span className="text-accent mr-3 mt-1">•</span>
                            <span>Real-time analysis of every transaction before execution</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-mint mr-3 mt-1">•</span>
                            <span>Multi-agent consensus for high-risk decisions</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent mr-3 mt-1">•</span>
                            <span>Continuous learning from global threat intelligence</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-mint mr-3 mt-1">•</span>
                            <span>Zero knowledge of your private keys or sensitive data</span>
                        </li>
                    </ul>
                    <p className="mt-8">
                        <Button variant="hero" size="lg" asChild>
                            <Link to="/products/monchain" className="gap-2">
                                Explore Monchain
                                <ArrowRight className="w-4 h-4 animate-[bounce-x_1.5s_ease-in-out_infinite]"/>
                            </Link>
                        </Button>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Safety;
