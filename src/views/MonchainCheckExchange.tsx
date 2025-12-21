import {Button} from "@/components/ui/button";
import {
    AlertTriangle as LucideAlertTriangle,
    ArrowLeft, ArrowRight, Banknote, BarChart3, CheckCircle2, CircuitBoard, ShieldCheck, Zap
} from "lucide-react";
import Link from "next/link";

const stats = [
    {label: "Assets screened daily", value: "$4.1B"},
    {label: "Automated holds", value: "72%"},
    {label: "Analyst time saved", value: "38 hrs/wk"}
];

const steps = [
    {
        title: "Pre-settlement intake",
        detail: "Every deposit, withdrawal, and internal transfer is enriched with counterparty intel before it hits your core ledger."
    },
    {
        title: "Multi-agent scoring",
        detail: "Behavioral, consortium, and sanction agents vote with confidence and attach evidence packets for SOC review."
    },
    {
        title: "Policy automation",
        detail: "Scores map to allow, step-up KYC, manual review, or auto-freeze rules you define per asset, geography, or desk."
    },
    {
        title: "Closed-loop learning",
        detail: "Analyst decisions feed the model so the next alert is sharper and duplicative reviews disappear."
    }
];

const integrations = [
    {
        title: "Core ledgers",
        detail: "Direct connectors for Fireblocks, Copper, BitGo, self-custody, and bespoke custody stacks.",
        icon: CircuitBoard
    },
    {
        title: "Alert routing",
        detail: "Out-of-the-box webhooks for PagerDuty, ServiceNow, Slack, Jira, and custom SOC tooling.",
        icon: Zap
    },
    {
        title: "Reporting",
        detail: "Regulator-ready exports for SAR, STR, and custom compliance narratives in one click.",
        icon: BarChart3
    }
];

const MonchainCheckExchange = () => {
    return (
        <main className="pt-24 pb-20">
            <div className="container mx-auto px-6 space-y-20">
                <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
                    <div className="space-y-6">
                        <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-sm font-medium text-accent">
                            Monchain Check
                        </p>
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Resolve high-risk exchange flows before they land on your books
                            </h1>
                            <p className="text-lg text-foreground/70">
                                Monchain Check gives operations, compliance, and treasury teams a single screen to spot mixer exposure, sanctioned wallets, and account takeovers without slowing settlement.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="hero" size="lg" asChild>
                                <Link href="/products/monchain/check">
                                    <ArrowLeft className="w-4 h-4"/>
                                    Back to Monchain Check
                                </Link>
                            </Button>
                            <Button variant="heroOutline" size="lg" asChild>
                                <a href="mailto:tech@colyon.ai?subject=Exchange%20workflow%20demo">
                                    Book a workflow review
                                </a>
                            </Button>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {stats.map(({label, value}) => (
                                <div key={label} className="rounded-2xl border border-border/70 bg-card/50 p-4">
                                    <p className="text-2xl font-semibold text-foreground">{value}</p>
                                    <p className="text-xs uppercase tracking-wide text-foreground/60">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-background via-card to-card/60 p-8 space-y-6">
                        <div className="flex items-center justify-between text-sm text-foreground/60">
                            <span>Sample decision</span>
                            <span>Settlement window · 24s</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-foreground/60">Incoming deposit</p>
                                    <p className="text-2xl font-semibold">12.5 BTC</p>
                                </div>
                                <div className="rounded-full border border-border/60 px-3 py-1 text-sm">USDT pair</div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-mint">
                                    <CheckCircle2 className="h-4 w-4"/>
                                    Address clean across 27 chains
                                </div>
                                <div className="flex items-center gap-2 text-amber-400">
                                    <LucideAlertTriangle className="h-4 w-4"/>
                                    Linked to mixer exposure 42 days ago
                                </div>
                                <div className="flex items-center gap-2 text-foreground/70">
                                    <Banknote className="h-4 w-4"/>
                                    Velocity exceeds VIP profile by 6x
                                </div>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 space-y-2 text-sm">
                                <div className="flex items-center justify-between">
                                    <span>Composite score</span>
                                    <span className="font-semibold">68 · Watch</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Policy response</span>
                                    <span className="font-semibold text-amber-400">Auto-hold + KYC refresh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-semibold">How the exchange workflow runs</h2>
                    <div className="space-y-6">
                        {steps.map(({title, detail}, index) => (
                            <div key={title} className="flex gap-6 rounded-2xl border border-border/70 bg-card/40 p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{title}</h3>
                                    <p className="text-foreground/70">{detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-3">
                    {integrations.map(({title, detail, icon: Icon}) => (
                        <div key={title} className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                <Icon className="h-6 w-6"/>
                            </div>
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">{detail}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-3xl border border-border/70 bg-gradient-to-br from-accent/5 via-mint/5 to-transparent p-10 space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <ShieldCheck className="h-10 w-10 text-accent"/>
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-accent">Assurance package</p>
                            <h2 className="text-2xl font-semibold">Share regulator-ready evidence instantly</h2>
                        </div>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-3 text-sm text-foreground/70">
                        <li>Deterministic audit log per decision with immutable hashes.</li>
                        <li>SAR/STR narrative templates populated with the score rationale.</li>
                        <li>Evidence retention policies configurable per jurisdiction.</li>
                    </ul>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="hero" asChild>
                            <Link href="/talk-to-us?product=monchain-check&about=compliance" target="_blank">
                                Schedule a compliance deep dive
                                <ArrowRight className="w-4 h-4"/>
                            </Link>
                        </Button>
                        <Button variant="heroOutline" asChild>
                            <a href="https://docs.colyon.ai/product/monchain/check?merchant=exchange" target="_blank" rel="noopener noreferrer">
                                Explore API docs
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MonchainCheckExchange;
