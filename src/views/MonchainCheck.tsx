import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    Activity,
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    CircuitBoard,
    FileText,
    Gauge,
    Globe,
    Layers,
    Layers3,
    LineChart,
    ShieldCheck,
    Target,
    Users,
    Zap
} from "lucide-react";

const MonchainCheck = () => {
    return (
        <main className="pt-24 pb-20">
            <div className="container mx-auto px-6 space-y-24">
                {/* Hero */}
                <section className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6 max-w-2xl">
                        <div
                            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-sm font-medium text-accent">
                            Flagship Product
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                Monchain Check
                            </h1>
                            <p className="text-lg md:text-xl text-foreground/70">
                                Monchain Check analyzes wallets, transactions, and smart contracts in milliseconds,
                                returning a transparent fraud score with the signals that influenced the decision.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="hero" size="lg" asChild>
                                <a href="https://check.monchain.ai" target="_blank" rel="noopener noreferrer">
                                    Run a free risk check
                                    <ArrowRight className="w-4 h-4 animate-[bounce-x_1.5s_ease-in-out_infinite]"/>
                                </a>
                            </Button>
                            <Button variant="heroOutline" size="lg" asChild>
                                <a href="https://docs.colyon.ai/api-docs?slug=monchain/overview" target="_blank" rel="noopener noreferrer">
                                    View API Docs
                                </a>
                            </Button>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-3 text-center">
                            {[{label: "Addresses screened", value: "500K+"}, {
                                label: "Avg. response",
                                value: "420ms"
                            }, {label: "Confirmed fraud blocked", value: "$1.3M"}].map(({label, value}) => (
                                <div key={label} className="rounded-lg border border-border/70 bg-card/40 p-4">
                                    <p className="text-3xl font-semibold text-foreground">{value}</p>
                                    <p className="text-sm text-foreground/60">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="rounded-3xl border border-border/80 bg-gradient-to-br from-background via-card to-card/60 p-8 shadow-2xl">
                            <div className="flex items-center justify-between text-sm text-foreground/70">
                                <span>Live Risk Check</span>
                                <div className="flex items-center gap-2">
                                    <span>Last scan • 0.4s ago</span>
                                    <Activity className="h-4 w-4 text-mint"/>
                                </div>
                            </div>
                            <div className="mt-10 flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-foreground/60">Address score</p>
                                        <p className="text-4xl font-semibold text-foreground">92 / 100</p>
                                    </div>
                                    <div
                                        className="rounded-full border border-mint/50 bg-mint/10 px-4 py-2 text-sm font-medium text-mint">
                                        Low risk
                                    </div>
                                </div>
                                <div className="h-3 rounded-full bg-border/70">
                                    <div
                                        className="h-full w-[92%] rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-mint"/>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-2 text-mint">
                                        <CheckCircle2 className="h-4 w-4"/>
                                        Clean on-chain history across 27 chains
                                    </div>
                                    <div className="flex items-center gap-2 text-foreground/70">
                                        <AlertTriangle className="h-4 w-4 text-amber-400"/>
                                        Minor exposure to flagged mixer (0.8% of volume)
                                    </div>
                                    <div className="flex items-center gap-2 text-foreground/70">
                                        <Globe className="h-4 w-4"/>
                                        Linked identities verified via KYT partners
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Unified value pillars */}
                <section className="space-y-10">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">Single fraud intelligence layer for UI and
                            API</h2>
                        <p className="text-foreground/70 text-lg">
                            The same multi-agent backend powers the self-serve checker, enterprise API, and embeddable
                            SDKs so your teams can experiment in minutes and deploy at scale without rebuilding policy
                            logic twice. It includes risk-scoring and explainability built-in.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
                        {[{
                            title: "Unified data graph",
                            copy: "Bring wallet behavior, contract bytecode, sanction lists, and social graphs into one investigation surface.",
                            icon: Layers
                        }, {
                            title: "Score bands that matter",
                            copy: "Low, watch, high, and block ranges tuned to capital controls, compliance, and consumer UX.",
                            icon: Gauge
                        }, {
                            title: "Explainable signals",
                            copy: "Every score ships with reasoning, confidence, and remediation steps for analysts.",
                            icon: LineChart
                        }, {
                            title: "Auto-escalation",
                            copy: "Push high-risk events to SOC, case management, Slack, or your own playbooks instantly.",
                            icon: Target
                        }].map(({title, copy, icon: Icon}, index) => (
                            <div key={title} className="rounded-2xl border border-border/80 bg-card/60 p-6"
                                 style={{animationDelay: `${index * 0.05}s`}}>
                                <div
                                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <Icon className="h-6 w-6"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-sm text-foreground/70 leading-relaxed">{copy}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Architecture + scoring */}
                <section className="max-w-5xl mx-auto">
                    <div className="text-center space-y-3 mb-12">
                        <p className="text-sm uppercase tracking-[0.3em] text-accent">Process</p>
                        <h2 className="text-3xl font-bold">How the Monchain Check engine operates</h2>
                        <p className="text-foreground/70 text-lg">Each step is deterministic, logged, and auditable so
                            regulators and partners can reproduce the call. Every channel, from the free checker UI to
                            mission-critical APIs, runs on this deterministic pipeline.</p>
                    </div>
                    <div className="space-y-10">
                        {[{
                            step: "Unified data ingestion",
                            detail: "Stream wallet intents, exchange transfers, custody instructions, and mempool data via REST, gRPC, or webhooks into one normalized schema.",
                            color: "bg-accent/10 border-accent"
                        }, {
                            step: "Multi-agent risk scoring",
                            detail: "Behavioral, graph, semantic, and sanctions agents collaborate in parallel, each submitting a verdict + confidence score. We normalize the vote into a 0-100 score, attach supporting evidence, and provide recommended responses.",
                            color: "bg-mint/10 border-mint"
                        }, {
                            step: "Deterministic actions",
                            detail: "Policies you define map scores to allow, warn, hold, or block responses which propagate back to UI kits, SDKs, or downstream systems.",
                            color: "bg-accent/10 border-accent"
                        }, {
                            step: "Closed-loop learning",
                            detail: "Analyst overrides, confirmed fraud, and regulator feedback retrain the models so every org benefits without sharing PII.",
                            color: "bg-mint/10 border-mint"
                        }].map(({step, detail, color}, idx) => (
                            <div key={step} className="flex flex-col gap-4 rounded-2xl border p-6 lg:flex-row"
                                 style={{animationDelay: `${idx * 0.08}s`}}>
                                <div
                                    className={`flex h-12 w-12 min-w-12 max-w-12 min-h-12 max-h-12 items-center justify-center rounded-full border text-sm font-semibold uppercase tracking-wide ${color}`}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{step}</h3>
                                    <p className="text-foreground/70 text-base leading-relaxed">{detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Enterprise modules */}
                <section className="space-y-10">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold">Converged toolkit for teams and developers</h2>
                        <p className="text-foreground/70 text-lg">Switch between the hosted checker, SDK widgets, and
                            raw API access without touching a different data source.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3">
                            <ShieldCheck className="w-10 h-10 text-accent"/>
                            <h3 className="text-xl font-semibold">Policy enforcement</h3>
                            <p className="text-sm text-foreground/70">Define guardrails per desk, geography, or asset
                                once. The same logic powers the UI checker, SDK banners, and API responses.</p>
                        </div>
                        <div className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3">
                            <Layers3 className="w-10 h-10 text-mint"/>
                            <h3 className="text-xl font-semibold">Agentic defense mesh</h3>
                            <p className="text-sm text-foreground/70">Specialized AI agents monitor behavioral
                                baselines, sanction feeds, and consortium intel to surface only high-signal alerts.</p>
                        </div>
                        <div className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3">
                            <FileText className="w-10 h-10 text-accent"/>
                            <h3 className="text-xl font-semibold">Audit-ready explanations</h3>
                            <p className="text-sm text-foreground/70">Every verdict ships with traceable rationale so
                                legal, regulators, and counterparties can replay the decision path instantly.</p>
                        </div>
                    </div>
                </section>

                {/* Integration + deployment */}
                <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
                    <div className="bg-card border border-border rounded-xl p-8 space-y-4">
                        <h3 className="text-2xl font-semibold flex items-center gap-3">
                            <CircuitBoard className="w-6 h-6 text-accent"/>
                            Integration patterns
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
                    <div className="bg-card border border-border rounded-xl p-8 space-y-4">
                        <h3 className="text-2xl font-semibold flex items-center gap-3">
                            <Zap className="w-6 h-6 text-accent"/>
                            Deployment options
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
                </section>

                {/* Governance */}
                <section
                    className="max-w-5xl mx-auto bg-gradient-to-br from-accent/5 to-mint/5 border border-accent/20 rounded-2xl p-12 space-y-6">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl font-bold">Compliance and governance ready</h2>
                        <p className="text-foreground/70">Travel Rule, AMLD6, MAS PSN02, NYDFS 504 reporting, and custom
                            attestations supported out of the box.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 text-sm text-foreground/80">
                        <div>
                            <p className="font-semibold mb-2">Regulatory alignment</p>
                            <p>Exportable logs map scores to the controls regulators expect.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Data controls</p>
                            <p>Tenant-level encryption, field-level masking, and flexible retention.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Human-in-the-loop</p>
                            <p>Analyst overrides automatically document root cause analysis for audit.</p>
                        </div>
                    </div>
                </section>

                {/* Use cases */}
                <section className="space-y-12">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold">Configured for every fraud prevention team</h2>
                        <p className="text-foreground/70 text-lg">Turn scoring results into automated actions across
                            your entire stack.</p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {[{
                            title: "Exchanges",
                            description: "Screen deposits and withdrawals before settlement. Auto-freeze addresses that trip high-risk rules while giving analysts full rationale.",
                            cta: "See exchange workflow",
                            link: "/products/monchain/check/exchange"
                        }, {
                            title: "Wallet & dApp",
                            description: "Deliver in-wallet warnings so end-users understand exposure and can opt-out of malicious contracts before signing.",
                            cta: "Embed risk banner",
                            link: "/products/monchain/check/wallet"
                        }, {
                            title: "Compliance & KYT",
                            description: "Route alerts to case tools, export SAR-ready evidence packets, and meet Travel Rule obligations instantly.",
                            cta: "Connect to case tools",
                            link: "/products/monchain/check/compliance"
                        }].map(({title, description, cta, link}) => (
                            <div key={title}
                                 className="rounded-2xl border border-border/80 bg-card/50 p-6 flex flex-col gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                                        <Users className="h-4 w-4"/>
                                        {title}
                                    </div>
                                    <p className="text-base text-foreground/70 leading-relaxed">{description}</p>
                                </div>
                                <Button variant="ghost"
                                        className="justify-start gap-2 text-accent hover:text-white hover:bg-transparent"
                                        asChild>
                                    <Link href={link}>
                                        {cta}
                                        <ArrowRight className="h-4 w-4"/>
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trust signals */}
                <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div
                        className="rounded-3xl border border-border/80 bg-gradient-to-br from-card to-background/40 p-8 space-y-6">
                        <h2 className="text-3xl font-bold">Why leading teams rely on Monchain</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {[{
                                title: "Global coverage",
                                detail: "Monitoring 27 chains, 180K smart contracts, and 95 exchanges in real time.",
                                icon: Globe
                            }, {
                                title: "Enterprise controls",
                                detail: "SOC 2 Type II, GDPR, and Travel Rule readiness baked into every API call.",
                                icon: ShieldCheck
                            }, {
                                title: "Outcome proof",
                                detail: "$1.3M+ in attempted fraud blocked for institutional partners during 2025.",
                                icon: LineChart
                            }, {
                                title: "Human + AI loop",
                                detail: "Analyst overrides feed back into models so scores keep improving.",
                                icon: Users
                            }].map(({title, detail, icon: Icon}) => (
                                <div key={title} className="rounded-2xl border border-border/70 bg-background/40 p-4">
                                    <div
                                        className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                        <Icon className="h-5 w-5"/>
                                    </div>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-3xl border border-border/80 bg-card/70 p-8 space-y-6">
                        <div className="flex items-center gap-3 text-sm text-foreground/60">
                            <ShieldCheck className="h-4 w-4 text-accent"/>
                            Compliance-grade audit trail
                        </div>
                        <blockquote className="text-lg italic text-foreground/80">
                            "Monchain Check turned a weeks-long enrichment process into a sub-second answer with
                            confidence we can show regulators."
                        </blockquote>
                        <div>
                            <p className="font-semibold">Head of Compliance</p>
                            <p className="text-sm text-foreground/60">Tier-1 LATAM exchange</p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-background/60 p-5 space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-foreground/60">SLA uptime</span>
                                <span className="font-semibold">99.98%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-foreground/60">API latency (P95)</span>
                                <span className="font-semibold">420ms</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-foreground/60">Evidence retention</span>
                                <span className="font-semibold">7 years</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-mint/10 to-transparent p-10 text-center space-y-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-accent">Start in minutes</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Plug Monchain Check into your risk stack</h2>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        Run unlimited self-serve checks, connect to our API for production flows, or drop in our UI
                        toolkits to warn users before they sign anything risky, all on the same backend.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button variant="hero" size="lg" asChild>
                            <a href="https://check.monchain.ai" target="_blank" rel="noopener noreferrer">
                                Launch the checker
                                <ArrowRight className="w-4 h-4 animate-[bounce-x_1.5s_ease-in-out_infinite]"/>
                            </a>
                        </Button>
                        <Button variant="heroOutline" size="lg" asChild>
                            <Link href="/talk-to-us?product=monchain-check&about=enterprise" target="_blank">
                                Talk to the team
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MonchainCheck;

