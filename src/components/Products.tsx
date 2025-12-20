"use client";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {ArrowRight, Brain, Network, Shield} from "lucide-react";
import AutoLinkText from "@/components/AutoLinkText";

const Products = () => {
    const productList = [
        {
            icon: Brain,
            title: "Monchain API",
            description: "Integrate proactive security directly into your platform. link://monchain.ai[Our API] detects and blocks fraudulent crypto transactions in real-time with 96% accuracy, so you can protect users without slowing them down.",
            accent: "bg-mint/10",
            link: "https://monchain.ai/business"
        },
        {
            icon: Network,
            title: "Monchain Wallet",
            description: "Secure your crypto assets with proactive fraud blocking (96% accuracy), and access AI-driven trading signals and market insights, all in one intelligent, link://monchain.ai[non-custodial wallet].",
            accent: "bg-accent/10",
            link: "https://monchain.ai"
        },
        {
            icon: Shield,
            title: "Monchain Check",
            description: "Instantly screen any wallet or transaction address for fraud signals. Powered by the same AI engine that secures our enterprise API and wallet.",
            accent: "bg-mint/10",
            link: "https://check.monchain.ai"
        },
    ];

    return (
        <section id="monchain" className="py-32 px-6 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Products</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Powered by Colyon's collaborative AI, the Monchain platform delivers proactive security across
                        the Web3 ecosystem.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {productList.map((product, index) => (
                        <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div
                                className={`w-12 h-12 ${product.accent} rounded-xl flex items-center justify-center mb-6`}>
                                <Image src="/img/monchain/favicon.png" alt="Monchain" width={24} height={24}
                                       className="w-6 h-6"/>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                            <AutoLinkText
                                text={product.description}
                                paragraphClassName="text-lg text-muted-foreground mb-6 leading-relaxed"
                                linkClassName="text-accent font-semibold underline underline-offset-4 hover:text-foreground"
                                treatSameOriginAsInternal
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center animate-fade-in-up" style={{animationDelay: "0.3s"}}>
                    <Button variant="hero" size="lg" asChild>
                        <Link href="/products/monchain">
                            Discover Monchain
                            <ArrowRight className="w-4 h-4"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Products;
