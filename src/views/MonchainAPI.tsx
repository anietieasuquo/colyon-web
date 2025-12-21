import {Button} from "@/components/ui/button";
import {ArrowRight, CheckCircle2, CircuitBoard, FileText, Layers3, ShieldCheck, Zap} from "lucide-react";
import Link from "next/link";

const MonchainAPI = () => {
    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in-up">
                    <div
                        className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
                        Flagship Product
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Monchain API
                    </h1>
                    <p className="text-2xl text-foreground/70 leading-relaxed mb-8">
                        Monchain API embeds Colyon&apos;s multi-agent intelligence directly into your wallet, exchange,
                        or institutional rails. Detect anomalous flows, enforce policy, and block fraud before
                        settlement, all without adding latency to customer transactions.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button variant="hero" size="lg" asChild>
                            <Link href="/talk-to-us?product=monchain-api&about=integrations" target="_blank">
                                Talk to Sales
                                <ArrowRight className="w-4 h-4 animate-[bounce-x_1.5s_ease-in-out_infinite]"/>
                            </Link>
                        </Button>
                        <Button variant="heroOutline" size="lg" asChild>
                            <a href="https://docs.colyon.ai/products/monchain/api" target="_blank" rel="noopener noreferrer">
                                View API Docs
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-card border border-border rounded-lg p-6 text-center animate-fade-in">
                        <p className="text-sm uppercase tracking-wide text-foreground/60 mb-2">Decision Time</p>
                        <p className="text-4xl font-bold text-accent mb-2">&lt;40 ms</p>
                        <p className="text-foreground/70 text-sm">Inline scoring layer keeps settlement speeds
                            intact.</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6 text-center animate-fade-in"
                         style={{animationDelay: "0.1s"}}>
                        <p className="text-sm uppercase tracking-wide text-foreground/60 mb-2">Coverage</p>
                        <p className="text-4xl font-bold text-mint mb-2">120+</p>
                        <p className="text-foreground/70 text-sm">Chains, L2s, and custody providers supported out of
                            the box.</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6 text-center animate-fade-in"
                         style={{animationDelay: "0.2s"}}>
                        <p className="text-sm uppercase tracking-wide text-foreground/60 mb-2">Accuracy</p>
                        <p className="text-4xl font-bold text-accent mb-2">96%</p>
                        <p className="text-foreground/70 text-sm">Verified fraud-block rate based on enterprise
                            pilots.</p>
                    </div>
                </div>

                {/* Pain to Solution */}
                <div className="max-w-6xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">Built for Security, Risk, and Compliance
                        Leaders</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-card border border-border rounded-lg p-6">
                            <ShieldCheck className="w-10 h-10 text-accent mb-4"/>
                            <h3 className="text-xl font-semibold mb-3">Policy Enforcement</h3>
                            <p className="text-foreground/70 text-sm">
                                Define custom guardrails per desk, geography, or asset. Monchain executes them in code
                                and
                                returns deterministic allow/deny guidance.
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6">
                            <Layers3 className="w-10 h-10 text-mint mb-4"/>
                            <h3 className="text-xl font-semibold mb-3">Agentic Defense Mesh</h3>
                            <p className="text-foreground/70 text-sm">
                                Specialized AI agents monitor behavioral baselines, external intel, and sanction feeds,
                                collaborating to surface only high-signal alerts.
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6">
                            <FileText className="w-10 h-10 text-accent mb-4"/>
                            <h3 className="text-xl font-semibold mb-3">Audit-Ready Explanations</h3>
                            <p className="text-foreground/70 text-sm">
                                Each verdict ships with traceable rationale so legal, regulators, and counterparties can
                                understand the decision path instantly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Architecture */}
                <div className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">How the Platform Operates</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent flex items-center justify-center text-accent font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Unified Data Ingestion</h3>
                                <p className="text-foreground/70">
                                    Stream wallet intents, custodial transfer requests, and blockchain mempool data into
                                    a
                                    single normalized schema via REST, gRPC, or webhook adapters.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-mint/10 border border-mint flex items-center justify-center text-mint font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Multi-Agent Risk Scoring</h3>
                                <p className="text-foreground/70">
                                    Behavioral, on-chain intelligence, sanction intelligence, and counterparty
                                    reputation
                                    agents collaborate, weighting signals in real time for a composite risk posture.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent flex items-center justify-center text-accent font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Deterministic Actions</h3>
                                <p className="text-foreground/70">
                                    Responses map to your policies, allow, step-up verification, quarantine, or block, and
                                    notify downstream systems with a transparent decision artifact.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-mint/10 border border-mint flex items-center justify-center text-mint font-bold">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Closed-Loop Learning</h3>
                                <p className="text-foreground/70">
                                    Confirmed fraud, analyst overrides, and regulator feedback feed back into the model
                                    so
                                    every team benefits from shared intelligence without exposing PII.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Integrations */}
                <div className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-8">
                    <div className="bg-card border border-border rounded-xl p-8">
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <CircuitBoard className="w-6 h-6 text-accent"/>
                            Integration Patterns
                        </h3>
                        <ul className="space-y-4 text-foreground/70 text-sm">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-mint mt-0.5"/>
                                REST, streaming, and webhook endpoints with SDKs for TypeScript, Kotlin, and Go.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-mint mt-0.5"/>
                                Policy-as-code templates deployable via Terraform or GitOps pipelines.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-mint mt-0.5"/>
                                Real-time alerting to Slack, PagerDuty, ServiceNow, and SIEM connectors.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-8">
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <Zap className="w-6 h-6 text-accent"/>
                            Deployment Options
                        </h3>
                        <ul className="space-y-4 text-foreground/70 text-sm">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-mint mt-0.5"/>
                                Multi-tenant SaaS with dedicated data partitions and regional residency controls.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-mint mt-0.5"/>
                                Private cloud or on-prem appliance for regulated markets needing air-gapped control.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-mint mt-0.5"/>
                                24/7 enterprise support with named technical account managers and 99.95% SLA.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Governance */}
                <div
                    className="max-w-5xl mx-auto mb-20 bg-gradient-to-br from-accent/5 to-mint/5 border border-accent/20 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Compliance and Governance Ready</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-sm text-foreground/80">
                        <div>
                            <p className="font-semibold mb-2">Regulatory Alignment</p>
                            <p>Supports Travel Rule, AMLD6, MAS PSN02, and NYDFS 504 reporting with exportable logs.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Data Controls</p>
                            <p>Tenant-level encryption, field-level masking, and flexible retention to satisfy internal
                                governance mandates.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Human-in-the-Loop</p>
                            <p>Analyst overrides automatically document root cause analysis for internal audit
                                records.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Launch a Secure Pilot</h2>
                    <p className="text-foreground/70 mb-8 text-lg">
                        Partner with Colyon&apos;s solution architects to integrate Monchain API in under two sprints,
                        run
                        parallel monitoring, and certify controls with your risk office.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button variant="hero" size="lg" asChild>
                            <Link href="/talk-to-us?product=monchain-api&about=security-review" target="_blank">
                                Schedule a Security Review
                            </Link>
                        </Button>
                        <Button variant="heroOutline" size="lg" asChild>
                            <a href="https://docs.colyon.ai/products/monchain/api" target="_blank" rel="noopener noreferrer">
                                Explore Docs
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MonchainAPI;
