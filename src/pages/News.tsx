import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchNews } from "@/store/newsSlice";

const News = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
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
          {loading && (
            <div className="text-center py-12">
              <p className="text-foreground/60">Loading news...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500">Error: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-12">
              {items.map((item, index) => {
                const borderColor = item.accentColor === "accent" ? "border-accent" : "border-mint";
                const badgeClass = item.accentColor === "accent" 
                  ? "bg-accent/10 text-accent border border-accent/20" 
                  : "bg-mint/10 text-mint border border-mint/20";
                
                return (
                  <div
                    key={item.id}
                    className={`border-l-4 ${borderColor} pl-8 pb-8 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-foreground/60 text-sm">{item.date}</span>
                      <span className={`px-3 py-1 ${badgeClass} rounded-full text-xs font-medium`}>
                        {item.category}
                      </span>
                    </div>
                    <Link 
                      to={`/news/${item.id}`}
                      className="group"
                    >
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
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
  );
};

export default News;
