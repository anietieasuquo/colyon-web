import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";

const Safety = () => {
  return (
    <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Safety & Security
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Building AI systems that prioritize user protection, ethical decision-making,
              and robust defense mechanisms against emerging threats.
            </p>
          </div>

          {/* Safety Principles */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Safety Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
                <Shield className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Proactive Defense</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our AI agents don't just react to threats — they predict and prevent them.
                  Through continuous learning and pattern recognition, we stay ahead of
                  malicious actors.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Lock className="w-12 h-12 text-mint mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Privacy First</h3>
                <p className="text-foreground/70 leading-relaxed">
                  User data is protected through end-to-end encryption and privacy-preserving
                  AI techniques. Your security never comes at the cost of your privacy.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Eye className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Transparent Operations</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every decision made by our AI systems is logged, explainable, and auditable.
                  You always know why our agents took specific actions.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <AlertTriangle className="w-12 h-12 text-mint mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Fail-Safe Systems</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Built-in redundancies and fallback mechanisms ensure that even if one agent
                  fails, the system continues to protect you.
                </p>
              </div>
            </div>
          </div>

          {/* Safety in Action */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6">Safety in Action: Monchain</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Our flagship product, Monchain, demonstrates our commitment to safety through
              real-time scam detection, transaction analysis, and user protection in the
              cryptocurrency space.
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Real-time analysis of every transaction before execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-mint mr-3 mt-1">•</span>
                <span>Multi-agent consensus for high-risk decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Continuous learning from global threat intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-mint mr-3 mt-1">•</span>
                <span>Zero knowledge of your private keys or sensitive data</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
  );
};

export default Safety;
