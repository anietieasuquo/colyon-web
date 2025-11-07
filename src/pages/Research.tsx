import { Brain, Network, Zap } from "lucide-react";

const Research = () => {
  return (
    <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Research at Colyon
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Advancing the frontier of collective intelligence through multi-agent systems,
              adaptive learning, and secure AI architectures.
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors animate-fade-in">
              <Brain className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Multi-Agent Intelligence</h3>
              <p className="text-foreground/70">
                Exploring how autonomous AI agents can collaborate, learn from each other,
                and make collective decisions that surpass individual capabilities.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-mint transition-colors animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Network className="w-12 h-12 text-mint mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Adaptive Security</h3>
              <p className="text-foreground/70">
                Developing AI systems that continuously evolve to detect emerging threats,
                predict attack patterns, and protect digital ecosystems in real-time.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Transparent AI</h3>
              <p className="text-foreground/70">
                Building explainable AI frameworks that make complex decision-making processes
                understandable, auditable, and trustworthy.
              </p>
            </div>
          </div>

          {/* Publications Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Recent Publications</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6 py-4">
                <h4 className="text-xl font-semibold mb-2">
                  Collective Intelligence in Decentralized Security Systems
                </h4>
                <p className="text-foreground/60 text-sm mb-2">Colyon Research Team • 2025</p>
                <p className="text-foreground/70">
                  An exploration of how multi-agent AI frameworks can enhance security
                  in blockchain and cryptocurrency ecosystems.
                </p>
              </div>

              <div className="border-l-2 border-mint pl-6 py-4">
                <h4 className="text-xl font-semibold mb-2">
                  Adaptive Threat Detection Through Agent Collaboration
                </h4>
                <p className="text-foreground/60 text-sm mb-2">Colyon Research Team • 2025</p>
                <p className="text-foreground/70">
                  A novel approach to real-time scam detection using coordinated AI agents
                  that learn from each other's observations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Research;
