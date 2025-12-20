"use client";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <a href="#main-content"
               className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded">
                Skip to main content
            </a>
            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
                    Build with Autonomous AI
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
                   style={{animationDelay: "0.1s"}}>
                    Colyon builds collaborative AI systems that reason and act in complex environments.
                    Our flagship product, Monchain, applies this architecture to secure the future of Web3.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                     style={{animationDelay: "0.2s"}}>
                    <Button variant="hero" size="lg" asChild>
                        <Link href="https://monchain.ai/business" className="gap-2">
                            For Businesses: Our API
                            <ArrowRight className="w-4 h-4 animate-[bounce-x_1.5s_ease-in-out_infinite]"/>
                        </Link>
                    </Button>
                    <Button variant="heroOutline" size="lg" asChild>
                        <a href="https://monchain.ai">For Users: Monchain Wallet</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
