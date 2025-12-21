import {Button} from "@/components/ui/button";
import {
    ArrowLeft,
    ArrowRight,
    BellRing,
    CheckCircle,
    CheckCircle2,
    Layers,
    Lock,
    ShieldHalf,
    Smartphone,
    UserCheck,
    Zap
} from "lucide-react";
import Link from "next/link";

const signals = [
    {
        title: "Malicious contract heuristics",
        detail: "Bytecode comparisons, honeypot signatures, proxy swaps, and gas griefing signals detected before signing.",
        icon: Layers
    },
    {
        title: "User reputation & device",
        detail: "Device fingerprint drift, SIM swap intel, and behavior anomalies highlight likely account takeovers.",
        icon: Smartphone
    },
    {
        title: "Contextual callouts",
        detail: "Plain-language explanations and severity badges show what changed since the last interaction.",
        icon: BellRing
    }
];

const flows = [
    {
        title: "1. Intent capture",
        detail: "Wallet collects transaction details and optional user statements; payload is hashed for privacy and sent to Monchain Check."
    },
    {
        title: "2. Risk banner injection",
        detail: "In under 450 ms, the SDK returns a score, severity band, and copy snippet you drop into your UI."
    },
    {
        title: "3. User decision",
        detail: "Present remediation options (cancel, continue, request support) without forcing the flow offline."
    },
    {
        title: "4. Escalation hooks",
        detail: "High-risk signatures can auto-open support chats, trigger device challenges, or file cases via webhook."
    }
];

const MonchainCheckWallet = () => {
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
                                Embed risk banners that stop drainers without breaking UX
                            </h1>
                            <p className="text-lg text-foreground/70">
                                Give every signer a transparent look at contract behavior, historical fraud, and safer
                                alternatives before they approve a transaction.
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
                                <a href="mailto:tech@colyon.ai?subject=Wallet%20risk%20banner">
                                    Request embed kit
                                </a>
                            </Button>
                        </div>
                        <div
                            className="rounded-3xl border border-border/70 bg-gradient-to-br from-card to-background/60 p-6 space-y-4">
                            <div className="flex items-center justify-between text-sm text-foreground/60">
                                <span>Sample warning</span>
                                <span>Generated in 0.38s</span>
                            </div>
                            <div className="flex items-center gap-3 text-amber-400">
                                <ShieldHalf className="h-6 w-6"/>
                                <div>
                                    <p className="font-semibold">High-risk contract</p>
                                    <p className="text-sm text-foreground/70">Known drain pattern detected. Funds routed
                                        through obfuscated proxy after approval.</p>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm text-foreground/70">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-mint"/>
                                    0 successful withdrawals by trusted peers
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-red-400"/>
                                    Gas usage spikes and inconsistent calldata encoding
                                </div>
                                <div className="flex items-center gap-2">
                                    <UserCheck className="h-4 w-4 text-mint"/>
                                    Suggest connecting verified contract instead
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="hero" size="sm">Block transaction</Button>
                                <Button variant="outline" size="sm">Proceed anyway</Button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-border/80 bg-card/60 p-8 space-y-6">
                        <h2 className="text-2xl font-semibold">Signals explained to your users</h2>
                        <div className="grid gap-4">
                            {signals.map(({title, detail, icon: Icon}) => (
                                <div key={title}
                                     className="rounded-2xl border border-border/70 bg-background/60 p-5 space-y-2">
                                    <div
                                        className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                        <Icon className="h-6 w-6"/>
                                    </div>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-3xl font-semibold">End-to-end embed flow</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {flows.map(({title, detail}) => (
                            <div key={title} className="rounded-2xl border border-border/70 bg-card/50 p-6 space-y-2">
                                <p className="text-sm uppercase tracking-wide text-foreground/60">{title}</p>
                                <p className="text-foreground/70">{detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    className="rounded-3xl border border-border/70 bg-gradient-to-br from-accent/5 via-mint/5 to-transparent p-10 space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <Lock className="h-10 w-10 text-accent"/>
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-accent">Developer toolkit</p>
                            <h2 className="text-2xl font-semibold">Drop-in components for any stack</h2>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 text-sm text-foreground/70">
                        {[
                            'React, React Native, SwiftUI, and Flutter banner kits.',
                            'JSON schema for custom renderers with localization hooks.',
                            'WebAuthn, Passkey, and OTP step-up policies bundled.'
                        ].map(detail => (
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4"/>
                                {detail}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="hero" asChild>
                            <a href="https://docs.colyon.ai/products/monchain/check?merchant=wallet" target="_blank"
                               rel="noopener noreferrer">
                                Explore SDK docs
                                <ArrowRight className="w-4 h-4"/>
                            </a>
                        </Button>
                        <Button variant="heroOutline" asChild>
                            <Link href="/talk-to-us?product=monchain-check&about=wallet-toolkits" target="_blank">
                                Talk to product
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MonchainCheckWallet;

