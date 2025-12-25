"use client";
import {Rocket, Target, Users} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const AboutUs = () => {
    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-6">
                <PageHeader
                    title="About Colyon"
                    description="An independent AI research and product studio pushing the boundaries of collective intelligence."
                />

                {/* Story Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-8">Our Story</h2>
                    <div className="space-y-6 text-foreground/80 leading-relaxed">
                        <p>
                            Founded in 2025, Colyon began as a question: what if intelligence agents could be built to
                            work together - not just in isolation? Founded by an ex-Binance senior engineering team, and
                            researchers who believe collaboration is the missing ingredient in modern AI, Colyon grew
                            from lab prototypes into a platform that stitches specialized AI agents into a single,
                            cooperative system. We drew inspiration from nature: colonies, swarms, and ecosystems that
                            solve complex problems through simple, coordinated actions. That idea became our blueprint.
                        </p>
                        <p>
                            Today, we are building that blueprint into production-grade technology, as an intelligence
                            layer where autonomous agents communicate, verify, and improve each other's decisions - all
                            while remaining aligned to human values and priorities.
                        </p>
                        <p>
                            Our flagship product, <Link href="/products/monchain" className="gap-2"><span
                            className="text-accent font-semibold">Monchain</span></Link>,
                            demonstrates our promise in the real world. Monchain is a proactive security platform that
                            unifies Monchain Check for enterprises and Monchain Wallet for consumers, all powered by our
                            multi-agent AI architecture to detect and stop fraud, analyze risk in real time, and provide
                            auditable explanations of every decision. Monchain shows how collective intelligence can
                            protect people and assets with speed and transparency.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
                        <div className="mb-4 justify-items-center">
                            <Target className="w-12 h-12 text-accent"/>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Purposeful Innovation</h3>
                        <p className="text-foreground/70 text-center">
                            We build AI that solves real problems, not just impressive demos.
                            Every system we create has a clear purpose and measurable impact.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-8 animate-fade-in"
                         style={{animationDelay: "0.1s"}}>
                        <div className="mb-4 justify-items-center">
                            <Users className="w-12 h-12 text-mint"/>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Collaborative Intelligence</h3>
                        <p className="text-foreground/70 text-center">
                            We believe the best solutions emerge from diverse perspectives working together,
                            whether human or artificial.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-8 animate-fade-in"
                         style={{animationDelay: "0.2s"}}>
                        <div className="mb-4 justify-items-center">
                            <Rocket className="w-12 h-12 text-accent"/>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Ambitious Execution</h3>
                        <p className="text-foreground/70 text-center">
                            We set audacious goals and execute with precision. Excellence isn't optional,
                            it's our standard.
                        </p>
                    </div>
                </div>

                {/* Team Philosophy */}
                <div
                    className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12">
                    <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                        Colyon is built by a diverse team of ex-Binance senior engineers, AI researchers, security
                        experts, and product
                        designers who share a common vision: making AI more intelligent through collaboration.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                        We're researchers who ship, engineers who think deeply, and designers who understand
                        both humans and machines. We're building not only for today's problems, but also for the
                        challenges of tomorrow.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
