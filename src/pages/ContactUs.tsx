import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <a href="mailto:hello@colyon.ai" className="text-foreground/70 hover:text-accent transition-colors">
                hello@colyon.ai
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <MapPin className="w-12 h-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-foreground/70">
                San Francisco, CA
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Careers</h3>
              <a href="mailto:careers@colyon.ai" className="text-foreground/70 hover:text-accent transition-colors">
                careers@colyon.ai
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
