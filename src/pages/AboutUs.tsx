import { Target, Users, Rocket } from "lucide-react";

const AboutUs = () => {
  return (
    <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              About Colyon
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              An independent AI research and product studio engineering the future
              of collective intelligence.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Founded in 2025, Colyon emerged from a simple observation: individual AI systems,
                no matter how advanced, have inherent limitations. But when multiple AI agents
                work together — learning from each other, challenging assumptions, and reaching
                consensus — something remarkable happens.
              </p>
              <p>
                We call this collective intelligence, inspired by nature's most successful
                collaborative systems. Like a colony of organisms working in harmony, our
                AI agents form adaptive, resilient ecosystems that solve problems no single
                agent could tackle alone.
              </p>
              <p>
                Our first product, Monchain, demonstrates this philosophy in action: protecting
                cryptocurrency users through real-time collaboration between specialized AI agents.
                But this is just the beginning. We're building a new paradigm for AI — one where
                intelligence is distributed, decisions are transparent, and systems continuously
                evolve to serve human needs.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Purposeful Innovation</h3>
              <p className="text-foreground/70">
                We build AI that solves real problems, not just impressive demos.
                Every system we create has a clear purpose and measurable impact.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Users className="w-12 h-12 text-mint mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Collaborative Intelligence</h3>
              <p className="text-foreground/70">
                We believe the best solutions emerge from diverse perspectives working together,
                whether human or artificial.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Rocket className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Ambitious Execution</h3>
              <p className="text-foreground/70">
                We set audacious goals and execute with precision. Excellence isn't optional —
                it's our standard.
              </p>
            </div>
          </div>

          {/* Team Philosophy */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Colyon is built by a diverse team of AI researchers, security experts, and product
              designers who share a common vision: making AI more intelligent through collaboration.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We're researchers who ship, engineers who think deeply, and designers who understand
              both humans and machines. We're building not just for today's problems, but for the
              challenges of tomorrow.
            </p>
          </div>
        </div>
      </main>
  );
};

export default AboutUs;
