import { Button } from "@/components/ui/button";
import { Shield, Zap, Eye, Lock } from "lucide-react";

const Monchain = () => {
  return (
    <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              Flagship Product
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Monchain
            </h1>
            <p className="text-2xl text-foreground/70 leading-relaxed mb-8">
              The world's first AI-powered crypto wallet with real-time scam detection
              and multi-agent security.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://monchain.ai" target="_blank" rel="noopener noreferrer">
                  Get Early Access
                </a>
              </Button>
              <Button variant="heroOutline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-Time Protection</h3>
              <p className="text-foreground/70 text-sm">
                Every transaction analyzed by multiple AI agents before execution.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Zap className="w-10 h-10 text-mint mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant Alerts</h3>
              <p className="text-foreground/70 text-sm">
                Get notified immediately when suspicious activity is detected.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Eye className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Full Transparency</h3>
              <p className="text-foreground/70 text-sm">
                Understand exactly why decisions are made with explainable AI.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Lock className="w-10 h-10 text-mint mb-4" />
              <h3 className="text-xl font-semibold mb-3">Your Keys, Your Crypto</h3>
              <p className="text-foreground/70 text-sm">
                Non-custodial security. We never have access to your private keys.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">How Monchain Works</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent flex items-center justify-center text-accent font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connect Your Wallet</h3>
                  <p className="text-foreground/70">
                    Import your existing wallet or create a new one. Monchain integrates seamlessly
                    with all major chains.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mint/10 border border-mint flex items-center justify-center text-mint font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Agents Activate</h3>
                  <p className="text-foreground/70">
                    Multiple specialized agents begin monitoring your transactions, analyzing patterns,
                    and learning from global threat intelligence.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent flex items-center justify-center text-accent font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Analysis</h3>
                  <p className="text-foreground/70">
                    Before every transaction, agents assess risk, check against known scams, and
                    evaluate recipient addresses. All in milliseconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mint/10 border border-mint flex items-center justify-center text-mint font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Execution</h3>
                  <p className="text-foreground/70">
                    If all agents agree it's safe, your transaction proceeds. If not, you get a clear
                    explanation and can make an informed decision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-foreground/70 mb-8 text-lg">
              Monchain is currently in private beta. Be among the first to experience
              the future of crypto security.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://monchain.ai" target="_blank" rel="noopener noreferrer">
                Request Early Access
              </a>
            </Button>
          </div>
        </div>
      </main>
  );
};

export default Monchain;
