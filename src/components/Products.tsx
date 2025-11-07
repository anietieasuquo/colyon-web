import { Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <section id="monchain" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          Products
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Monchain */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Monchain</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AI-powered crypto wallet that detects and blocks scams in real time. Your intelligent guardian in the blockchain ecosystem.
            </p>
            <Button variant="hero" asChild>
              <a href="/monchain">Discover Monchain</a>
            </Button>
          </div>

          {/* Future Products */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow opacity-80">
            <div className="w-12 h-12 bg-mint/10 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Future Products</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our next generation of agent-based AI tools are in development. Expanding collective intelligence across new domains.
            </p>
            <Button variant="outline" disabled>
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
