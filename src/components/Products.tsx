"use client";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AutoLinkText from "@/components/AutoLinkText";

const Products = () => {
    const productList = [
        {
            title: "Monchain Check",
            description: "Monchain Check is your complete solution for real-time crypto fraud detection. From instant address screening to enterprise-grade API integrations, our platform delivers 96% accurate risk scoring, powered by our multi-agent autonomous AI engine.",
            accent: "bg-mint/10",
            link: "/products/monchain/check",
            cta: "Explore"
        },
        {
            title: "Monchain Wallet",
            description: "Secure your crypto assets with proactive fraud blocking (96% accuracy using the same core AI as our enterprise API), and access AI-driven trading signals and market insights, all in one intelligent, non-custodial wallet.",
            accent: "bg-accent/10",
            link: "/products/monchain/wallet",
            cta: "Discover"
        }
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
                <div className="grid md:grid-cols-2 gap-8">
                    {productList.map((product, index) => (
                        <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                             key={product.title}>
                            <div
                                className={`w-12 h-12 ${product.accent} rounded-xl flex items-center justify-center mb-6`}>
                                <Image
                                    src="/img/monchain/favicon.png"
                                    alt="Monchain"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                            <AutoLinkText
                                text={product.description}
                                paragraphClassName="text-lg text-muted-foreground mb-6 leading-relaxed"
                                linkClassName="text-accent font-semibold underline underline-offset-4 hover:text-foreground"
                                treatSameOriginAsInternal
                            />
                            <div className="animate-fade-in-up" style={{animationDelay: "0.3s"}}>
                                <Button variant="heroOutline" size="lg" asChild>
                                    <Link href={product.link}>
                                        {product.cta} {product.title}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
