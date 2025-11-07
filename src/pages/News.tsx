import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const News = () => {
  const newsItems = [
    {
      date: "March 15, 2025",
      category: "Product Launch",
      title: "Monchain Beta Opens to First Users",
      description: "We're excited to announce that Monchain is now in private beta. The first wave of users is experiencing AI-powered crypto security firsthand.",
      accentColor: "accent",
    },
    {
      date: "March 1, 2025",
      category: "Research",
      title: "New Paper: Multi-Agent Consensus in Security Systems",
      description: "Our research team published a breakthrough paper on how multiple AI agents can reach consensus on security decisions in real-time.",
      accentColor: "mint",
    },
    {
      date: "February 20, 2025",
      category: "Company",
      title: "Colyon Secures Seed Funding",
      description: "We've raised seed funding to accelerate our mission of building collective intelligence systems. The round was led by prominent AI-focused VCs.",
      accentColor: "accent",
    },
    {
      date: "February 10, 2025",
      category: "Technology",
      title: "Introducing XAI Framework v1.0",
      description: "Our explainable AI framework is now open-sourced, allowing developers to build transparent multi-agent systems.",
      accentColor: "mint",
    },
    {
      date: "January 15, 2025",
      category: "Company",
      title: "Colyon Officially Launches",
      description: "Today marks the official launch of Colyon. We're on a mission to pioneer safe, adaptive, and collaborative AI ecosystems.",
      accentColor: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              News & Updates
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Stay updated with the latest from Colyon — product launches, research breakthroughs,
              and company milestones.
            </p>
          </div>

          {/* News Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {newsItems.map((item, index) => {
                const borderColor = item.accentColor === "accent" ? "border-accent" : "border-mint";
                const textColor = item.accentColor === "accent" ? "text-accent" : "text-mint";
                
                return (
                  <div
                    key={index}
                    className={`border-l-4 ${borderColor} pl-8 pb-8 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-foreground/60 text-sm">{item.date}</span>
                      <span className={`px-3 py-1 ${item.accentColor === "accent" ? "bg-accent/10 text-accent border border-accent/20" : "bg-mint/10 text-mint border border-mint/20"} rounded-full text-xs font-medium`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-foreground/70 mb-8 text-lg">
                Get the latest Colyon news, research updates, and product announcements
                delivered to your inbox.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
