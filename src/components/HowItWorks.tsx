import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Network, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const features = [
    {
      icon: Brain,
      title: "Adaptive Agents",
      description: "Each agent evolves through interaction and feedback.",
    },
    {
      icon: Network,
      title: "Collective Learning",
      description: "Knowledge is shared across the network for exponential growth.",
    },
    {
      icon: Shield,
      title: "Secure Intelligence",
      description: "Built-in safety layers ensure every decision is traceable, explainable, and aligned with human intent.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Built for cooperation.
            <br />
            Designed for autonomy.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Colyon's architecture connects specialized AI agents through a shared intelligence layer. 
            Each agent learns independently but contributes to the collective, enabling systems that 
            adapt, reason, and improve continuously.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-primary">
                <feature.icon className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/xai" className="gap-2">
              Learn About Our Technology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
