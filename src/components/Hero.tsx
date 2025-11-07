import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="container mx-auto max-w-5xl text-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
                    A Colony of AI Agents.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
                   style={{animationDelay: "0.1s"}}>
                    Colyon builds collaborative ecosystems where AI agents think, learn, and act together - securely and
                    autonomously.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                     style={{animationDelay: "0.2s"}}>
                    <Button variant="hero" size="lg" asChild>
                        <Link to="/monchain" className="gap-2">
                            Explore Monchain
                            <ArrowRight className="w-4 h-4 animate-[bounce-x_1.5s_ease-in-out_infinite]"/>
                        </Link>
                    </Button>
                    <Button variant="heroOutline" size="lg" asChild>
                        <a href="#vision">Learn More</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
