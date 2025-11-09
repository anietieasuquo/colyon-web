"use client";
import { Button } from "@/components/ui/button";
import { Code, Brain, Palette, Shield } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI Research Scientist",
      department: "Research",
      location: "Remote / San Francisco",
      type: "Full-time",
      icon: Brain,
      color: "accent",
    },
    {
      title: "Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      icon: Code,
      color: "mint",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      icon: Palette,
      color: "accent",
    },
    {
      title: "Security Engineer",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      icon: Shield,
      color: "mint",
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="Join the Colony"
          description="Help us build the future of collective intelligence. We're looking for exceptional people who want to solve hard problems and create AI that matters."
        />

        {/* Why Colyon */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Colyon?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ambitious Mission</h3>
              <p className="text-foreground/70">
                Work on cutting-edge AI research that's actually being deployed in production.
                Your code will protect millions of dollars in crypto assets.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Learn & Grow</h3>
              <p className="text-foreground/70">
                Collaborate with world-class researchers and engineers. We invest heavily in
                your growth through mentorship, conferences, and continuous learning.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ownership & Impact</h3>
              <p className="text-foreground/70">
                Take ownership of major features and systems. Your decisions shape products
                used by thousands of people. Plus competitive equity compensation.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Remote-First Culture</h3>
              <p className="text-foreground/70">
                Work from anywhere. We believe in async communication, clear documentation,
                and trust. Optional hubs in SF and other cities.
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => {
              const Icon = position.icon;
              const colorClass = position.color === "accent" ? "text-accent" : "text-mint";
              const borderClass = position.color === "accent" ? "hover:border-accent" : "hover:border-mint";
              
              return (
                <div
                  key={index}
                  className={`bg-card border border-border rounded-lg p-8 ${borderClass} transition-colors animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex gap-6 flex-1">
                      <Icon className={`w-12 h-12 ${colorClass} flex-shrink-0`} />
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-foreground/60 text-sm mb-4">
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                          <span>•</span>
                          <span>{position.type}</span>
                        </div>
                        <p className="text-foreground/70">
                          Join our team and help build the next generation of AI-powered security systems.
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="lg" className="flex-shrink-0">
                      Apply Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-foreground/70 mb-8 text-lg">
            We're always looking for exceptional talent. Send us your resume and tell us
            how you'd like to contribute to Colyon's mission.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Careers;
