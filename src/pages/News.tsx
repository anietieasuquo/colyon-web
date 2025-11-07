import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchNews } from "@/store/newsSlice";
import { Filter, Grid3x3, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type ViewMode = "list" | "grid";
type SortOrder = "newest" | "oldest";

const News = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.news);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen]);

  // Get unique categories and years
  const categories = ["all", ...Array.from(new Set(items.map((item) => item.category)))];
  const years = ["all", ...Array.from(new Set(items.map((item) => item.year.toString())))];

  // Filter and sort items
  const filteredItems = items
    .filter((item) => {
      const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
      const yearMatch = selectedYear === "all" || item.year.toString() === selectedYear;
      return categoryMatch && yearMatch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            News & Updates
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Stay updated with the latest from Colyon — product launches, research breakthroughs,
            and company milestones.
          </p>
        </div>

        {/* Controls */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <div className="relative" ref={filterRef}>
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="gap-2"
              >
                <Filter className="w-4 h-4" />
                Filter
                <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
              </Button>

              {/* Filter Dialog */}
              {isFilterOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg p-4 z-50 animate-fade-in">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category === "all" ? "All Categories" : category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Year</label>
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year === "all" ? "All Years" : year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="px-4 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list" ? "bg-black text-white" : "hover:bg-muted"
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid" ? "bg-black text-white" : "hover:bg-muted"
              }`}
              aria-label="Grid view"
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* News Content */}
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

          {!loading && !error && filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60">No news items found matching your filters.</p>
            </div>
          )}

          {!loading && !error && filteredItems.length > 0 && (
            <>
              {/* List View */}
              {viewMode === "list" && (
                <div className="space-y-12">
                  {filteredItems.map((item, index) => {
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

              {/* Grid View */}
              {viewMode === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, index) => {
                    const badgeClass = item.accentColor === "accent" 
                      ? "bg-accent/10 text-accent border border-accent/20" 
                      : "bg-mint/10 text-mint border border-mint/20";
                    
                    return (
                      <Link
                        key={item.id}
                        to={`/news/${item.id}`}
                        className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {item.featuredImage && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={item.featuredImage}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-foreground/60 text-xs">{item.date}</span>
                            <span className={`px-2 py-1 ${badgeClass} rounded-full text-xs font-medium`}>
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-foreground/70 text-sm line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
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
