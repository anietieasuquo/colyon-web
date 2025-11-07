import { Compass, Shield, Globe, Sparkles } from "lucide-react";

const Mission = () => {
  return (
    <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Mission
            </h1>
            <p className="text-2xl text-foreground/70 leading-relaxed">
              To pioneer safe, adaptive, and collaborative AI ecosystems that amplify
              human potential and protect digital life.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">What Drives Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
                <Compass className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Advancing Collective Intelligence</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We're proving that AI systems working together can achieve what isolated
                  models cannot. Our multi-agent frameworks represent a fundamental shift in
                  how artificial intelligence operates — moving from monolithic black boxes to
                  transparent, collaborative ecosystems.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Shield className="w-12 h-12 text-mint mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Protecting Digital Security</h3>
                <p className="text-foreground/70 leading-relaxed">
                  As digital threats evolve, static defenses fail. We're building adaptive AI
                  that learns continuously, anticipates new attack vectors, and protects users
                  in real-time. Starting with crypto security, expanding to every digital frontier.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Globe className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Making AI Accessible</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Advanced AI shouldn't require a PhD to use or trust. We're creating systems that
                  explain themselves clearly, integrate seamlessly, and empower everyone — from
                  crypto novices to experienced traders — to navigate digital spaces safely.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Sparkles className="w-12 h-12 text-mint mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Building Ethically</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every line of code, every AI model, every product decision is guided by ethical
                  principles. We believe in transparency, user autonomy, privacy preservation, and
                  AI that serves humanity's best interests.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Vision for the Future</h2>
            <div className="bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                We envision a world where AI systems don't just assist — they collaborate.
                Where intelligence is distributed, resilient, and continuously learning.
                Where digital threats are anticipated before they materialize.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                A world where trust in technology is earned through transparency, not demanded
                through complexity. Where AI decisions are explainable, auditable, and aligned
                with human values.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                This isn't science fiction — it's the path we're building today. Starting with
                cryptocurrency security through Monchain, expanding to every domain where
                collective intelligence can make a difference.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Mission</h2>
            <p className="text-foreground/70 text-lg mb-8">
              We're looking for exceptional people who want to shape the future of AI.
            </p>
            <a 
              href="/careers"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </main>
  );
};

export default Mission;
