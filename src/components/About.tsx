import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          About & Careers
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
          Founded in 2025, Colyon is an independent AI research and product studio pushing the boundaries of collective intelligence.
        </p>
        <Button variant="heroPrimary" size="lg" asChild>
          <a href="#careers" className="gap-2">
            Join the Colony
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default About;
