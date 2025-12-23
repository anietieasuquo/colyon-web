import {Button} from "@/components/ui/button";
import {
    ArrowLeft,
    ArrowRight, BookCheck, Briefcase, CheckCircle2, ClipboardList, FileSpreadsheet, Scale, ShieldCheck, Workflow
} from "lucide-react";
import Link from "next/link";

const highlights = [
    {
        title: "Automated Travel Rule packets",
        detail: "Generate beneficiary originator data with cryptographic proofs and send via your preferred TRP."
    },
    {
        title: "Case-ready narratives",
        detail: "Evidence summaries include timestamps, chain analysis, and analyst comments for SAR/STR filing."
    },
    {
        title: "Escalation orchestration",
        detail: "Map score bands to ServiceNow, Actimize, Unit21, or custom case systems with zero additional dev work."
    }
];

const workflows = [
    {
        title: "Risk signal ingestion",
        detail: "Hook Monchain Check to settlement queues, custody movements, NFT marketplaces, or OTC desks."
    },
    {
        title: "Policy routing",
        detail: "Granular rules per entity, counterparty, asset, and geography ensure only material cases reach analysts."
    },
    {
        title: "Case hand-off",
        detail: "Auto-create tickets with attachments, comments, and follow-up tasks to keep regulators satisfied."
    }
];

const controls = [
    {
        title: "KYT & AML",
        detail: "Continuous scanning of counterparties with rolling sanctions, PEP, and consortium updates.",
        icon: ShieldCheck
    },
    {
        title: "Policy attestations",
        detail: "Exportable control evidence for NYDFS 504, FCA PS21/19, MAS PSN02, and local VASP regimes.",
        icon: Scale
    },
    {
        title: "Retention & privacy",
        detail: "Field-level redaction, role-based access, and seven-year immutable records for audit.",
        icon: FileSpreadsheet
    }
];

const MonchainCheckCompliance = () => {
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
                                Plug Monchain Check into your case tools and Travel Rule stack
                            </h1>
                            <p className="text-lg text-foreground/70">
                                From initial alert to regulator-ready case, automate the investigative paperwork while analysts stay focused on judgement calls.
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
                                <Link href="/talk-to-us?product=monchain-check&about=compliance" target="_blank">
                                    Connect compliance stack
                                </Link>
                            </Button>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[{label: "Travel Rule coverage", value: "32 VASPs"}, {
                                label: "Avg. case prep",
                                value: "< 3 min"
                            }, {label: "Manual escalations drop", value: "-61%"}].map(({label, value}) => (
                                <div key={label} className="rounded-2xl border border-border/70 bg-card/50 p-4">
                                    <p className="text-2xl font-semibold text-foreground">{value}</p>
                                    <p className="text-xs uppercase tracking-wide text-foreground/60">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-background via-card to-card/60 p-8 space-y-6">
                        <div className="flex items-center gap-3 text-sm text-foreground/60">
                            <ClipboardList className="h-5 w-5 text-accent"/>
                            Travel Rule packet · Auto generated
                        </div>
                        <div className="rounded-2xl border border-border/70 bg-background/60 p-6 space-y-4 text-sm">
                            <div className="flex items-center justify-between">
                                <span>Originator</span>
                                <span className="font-semibold">Atlas Digital Ltd</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Beneficiary</span>
                                <span className="font-semibold">Nova OTC Desk</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Score band</span>
                                <span className="font-semibold text-amber-400">Watch · 64</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Action</span>
                                <span className="font-semibold">Send enhanced due diligence</span>
                            </div>
                            <div className="text-foreground/60">
                                Supporting evidence: 3 historical links to sanctioned counterparties. Mixer exposure 1.1%. Geo risk flagged (HK {'>'} US).
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-3xl font-semibold">Workflow automation, end to end</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {workflows.map(({title, detail}) => (
                            <div key={title} className="rounded-2xl border border-border/70 bg-card/50 p-6 space-y-2">
                                <p className="text-sm uppercase tracking-wide text-foreground/60">{title}</p>
                                <p className="text-foreground/70">{detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-3">
                    {highlights.map(({title, detail}, index) => (
                        <div key={title} className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                {[Workflow, Briefcase, BookCheck][index] &&
                                    (() => {
                                        const Icon = [Workflow, Briefcase, BookCheck][index];
                                        return <Icon className="h-6 w-6"/>;
                                    })()}
                            </div>
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">{detail}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-3xl border border-border/70 bg-gradient-to-br from-accent/5 via-mint/5 to-transparent p-10 space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <Briefcase className="h-10 w-10 text-accent"/>
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-accent">Control center</p>
                            <h2 className="text-2xl font-semibold">Evidence, attestations, and audit in one place</h2>
                        </div>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-3 text-sm text-foreground/70">
                        {controls.map(({title, detail, icon: Icon}) => (
                            <li key={title} className="flex items-start gap-2">
                                <Icon className="h-4 w-4 text-accent mt-0.5"/>
                                <div>
                                    <p className="font-semibold">{title}</p>
                                    <p>{detail}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="hero" asChild>
                            <Link href="/talk-to-us?product=monchain-check&about=compliance" target="_blank">
                                Meet a compliance engineer
                                <ArrowRight className="w-4 h-4"/>
                            </Link>
                        </Button>
                        <Button variant="heroOutline" asChild>
                            <a href="https://docs.colyon.ai/api-docs?slug=monchain/overview&merchant=compliance" target="_blank" rel="noopener noreferrer">
                                Download policy packet
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MonchainCheckCompliance;

