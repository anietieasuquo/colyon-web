import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    Activity,
    ArrowRight,
    BarChart3,
    Cpu,
    Layers,
    Radar,
    ShieldCheck,
    Sparkles,
    Users,
    Wallet,
    Zap,
} from "lucide-react";

const Monchain = () => {
    const stats = [
        {label: "Fraud blocked", value: "$1.3M"},
        {label: "Chains covered", value: "27"},
        {label: "Avg. response", value: "420ms"},
    ];

    const offerings = [
        {
            name: "Monchain Check",
            slug: "check",
            audience: "B2B / developers",
            description:
                "Enterprise APIs, SDKs, and analyst workspaces that let exchanges, wallets, and fintechs embed proactive fraud scoring in minutes.",
            features: [
                "Deterministic AI scoring pipeline",
                "UI + API toolkits",
                "Explainability & audit logs",
            ],
        },
        {
            name: "Monchain Wallet",
            slug: "wallet",
            audience: "B2C / consumers",
            description:
                "A non-custodial smart wallet that warns and blocks malicious flows in real-time, plus AI-powered market signals and trading automation.",
            features: [
                "Multi-agent transaction review",
                "AI market copilot",
                "Autonomous trading recipes",
            ],
        },
    ];

    const pillars = [
        {
            title: "Agentic defense mesh",
            copy: "Behavioral, graph, and sanctions agents collaborate, vote, and adapt every time a wallet or transaction is screened.",
            icon: ShieldCheck,
        },
        {
            title: "Unified data graph",
            copy: "Bring on-chain telemetry, intelligence feeds, and customer history into a single risk surface shared across Check and Wallet.",
            icon: Layers,
        },
        {
            title: "Adaptive automation",
            copy: "Low-latency policies can warn, hold, or auto-block, while higher-touch cases escalate to humans with full context.",
            icon: Cpu,
        },
        {
            title: "Human-grade transparency",
            copy: "Every score is backed by reasoning, evidence, and remediation actions so analysts and users trust the outcome.",
            icon: Users,
        },
    ];

    const proofPoints = [
        {
            title: "Fraud intelligence",
            detail: "Live graph of mixers, exploit kits, sanctioned wallets, and botnets keeps both offerings current.",
            icon: Radar,
        },
        {
            title: "AI copilots",
            detail: "Surface natural-language explanations, playbooks, and voice prompts anywhere users interact.",
            icon: Sparkles,
        },
        {
            title: "Financial controls",
            detail: "Policy templates map scores to dollar limits, withdrawal holds, or trading nudges automatically.",
            icon: BarChart3,
        },
        {
            title: "Deployment agility",
            detail: "Use hosted SaaS, dedicated region, or edge SDKs so Monchain can sit wherever your stack lives.",
            icon: Zap,
        },
    ];

    return (
        <main className="pt-24 pb-20">
            <div className="container mx-auto px-6 space-y-20">
                <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
                    <div className="space-y-8">
                        <div
                            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-sm font-medium text-accent">
                            Flagship Platform
                        </div>
                        <div className="space-y-5">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                Monchain stops crypto fraud before it touches capital.
                            </h1>
                            <p className="text-lg md:text-xl text-foreground/70">
                                A single proactive security platform with two offerings: Monchain Check for enterprise
                                teams that need programmable defenses, and Monchain Wallet for consumers who want an AI
                                copilot keeping every transaction safe.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" variant="hero">
                                <Link href="/products/monchain/check">
                                    Explore Monchain Check
                                    <ArrowRight className="w-4 h-4 ml-1 animate-[bounce-x_1.5s_ease-in-out_infinite]"/>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="heroOutline">
                                <Link href="/products/monchain/wallet">
                                    Try Monchain Wallet
                                </Link>
                            </Button>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.label}
                                     className="rounded-xl border border-border/70 bg-card/50 p-4 text-center">
                                    <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                                    <p className="text-sm text-foreground/60">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="rounded-3xl border border-border/80 bg-gradient-to-br from-background via-card to-card/50 p-8 shadow-2xl space-y-6">
                        <div className="flex items-center justify-between text-sm text-foreground/70">
                            <span>Unified risk console</span>
                            <div className="inline-flex items-center gap-2">
                                <Activity className="w-4 h-4 text-mint"/>
                                <span>Streaming in real-time</span>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-foreground/60">Live score</p>
                                    <p className="text-4xl font-semibold text-foreground">92 / 100</p>
                                </div>
                                <div
                                    className="rounded-full border border-mint/50 bg-mint/10 px-4 py-1 text-sm font-medium text-mint">
                                    Low risk
                                </div>
                            </div>
                            <div className="h-3 rounded-full bg-border/60">
                                <div
                                    className="h-full w-[92%] rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-mint"/>
                            </div>
                            <ul className="space-y-3 text-sm text-foreground/70">
                                <li className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-mint"/>
                                    Shared intelligence instantly syncs between Check and Wallet.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Wallet className="w-4 h-4 text-accent"/>
                                    Wallet surfaces in-app warnings before signatures happen.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-foreground/80"/>
                                    Analysts can override or automate responses with one click.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="space-y-10">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <p className="text-sm uppercase tracking-[0.3em] text-accent">Offerings</p>
                        <h2 className="text-3xl md:text-4xl font-bold">Meet the two Monchain experiences</h2>
                        <p className="text-foreground/70 text-lg">
                            One intelligence layer, two tailored delivery models. Pick the enterprise toolkit or the
                            consumer wallet, both benefit from the same AI defenses.
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {offerings.map((offering) => (
                            <div key={offering.slug}
                                 className="rounded-2xl border border-border/70 bg-card/60 p-8 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm uppercase tracking-wide text-foreground/60">{offering.audience}</p>
                                        <h3 className="text-2xl font-semibold text-foreground">{offering.name}</h3>
                                    </div>
                                    {offering.slug === "check" ? (
                                        <ShieldCheck className="w-10 h-10 text-accent"/>
                                    ) : (
                                        <Wallet className="w-10 h-10 text-mint"/>
                                    )}
                                </div>
                                <p className="text-base text-foreground/70 leading-relaxed">{offering.description}</p>
                                <ul className="space-y-3 text-sm text-foreground/80">
                                    {offering.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <ArrowRight className="w-4 h-4 mt-0.5 text-accent"/>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild variant="ghost"
                                        className="justify-start gap-2 text-accent hover:text-white">
                                    <Link href={`/products/monchain/${offering.slug}`}>
                                        View {offering.name}
                                        <ArrowRight className="w-4 h-4"/>
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-10">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold">The platform powering both sides</h2>
                        <p className="text-foreground/70 text-lg">
                            Monchain Check and Monchain Wallet share the same AI-native infrastructure so improvements
                            compound everywhere.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {pillars.map(({title, copy, icon: Icon}) => (
                            <div key={title}
                                 className="rounded-2xl border border-border/80 bg-background/60 p-6 flex gap-4">
                                <div
                                    className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                                    <Icon className="w-6 h-6"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{title}</h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-2xl border border-border/70 bg-card/60 p-8 space-y-6">
                        <h3 className="text-2xl font-semibold flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-accent"/>
                            Why teams choose Monchain Check
                        </h3>
                        <ul className="space-y-4 text-sm text-foreground/80">
                            <li className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 mt-0.5 text-accent"/>
                                Automate AML, KYT, and Travel Rule controls with explainable AI decisions.
                            </li>
                            <li className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 mt-0.5 text-accent"/>
                                Embed risk banners, webhooks, or API verdicts directly into onboarding and treasury ops.
                            </li>
                            <li className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 mt-0.5 text-accent"/>
                                Enterprise support, SLAs, and deployment flexibility for regulated markets.
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-card/60 p-8 space-y-6">
                        <h3 className="text-2xl font-semibold flex items-center gap-3">
                            <Wallet className="w-6 h-6 text-mint"/>
                            Why consumers love Monchain Wallet
                        </h3>
                        <ul className="space-y-4 text-sm text-foreground/80">
                            <li className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 mt-0.5 text-accent"/>
                                In-wallet warnings, blocklists, and coaching before they sign a malicious transaction.
                            </li>
                            <li className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 mt-0.5 text-accent"/>
                                Personalized AI signals and automated trading strategies based on user goals.
                            </li>
                            <li className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 mt-0.5 text-accent"/>
                                Non-custodial architecture keeps keys local while still benefiting from Monchain intel.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-10">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold">Proof points across the stack</h2>
                        <p className="text-foreground/70 text-lg">
                            Intelligence, automation, and controls are synchronized no matter which experience you
                            deploy first.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {proofPoints.map(({title, detail, icon: Icon}) => (
                            <div key={title}
                                 className="rounded-2xl border border-border/70 bg-background/70 p-6 space-y-3">
                                <div
                                    className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                                    <Icon className="w-5 h-5"/>
                                </div>
                                <h3 className="text-lg font-semibold">{title}</h3>
                                <p className="text-sm text-foreground/70 leading-relaxed">{detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    className="rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/10 via-mint/10 to-transparent p-10 text-center space-y-6">
                    <h2 className="text-3xl font-bold">Ready to experience Monchain?</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Spin up Monchain Check in your sandbox, or join the Monchain Wallet waitlist. Either way, the
                        Monchain defense mesh keeps your assets ahead of attackers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" variant="hero">
                            <Link href="https://check.monchain.ai" target="_blank" rel="noopener">
                                Launch Monchain Check
                                <ArrowRight className="w-4 h-4 ml-1 animate-[bounce-x_1.5s_ease-in-out_infinite]"/>
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="heroOutline">
                            <Link href="https://monchain.ai" target="_blank" rel="noopener">
                                Join Wallet Waitlist
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="ghost" className="text-accent">
                            <Link href="/talk-to-us?product=monchain&about=compliance" target="_blank" rel="noopener">
                                Talk to our team
                                <ArrowRight className="w-4 h-4 ml-1"/>
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Monchain;
