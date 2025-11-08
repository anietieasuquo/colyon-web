import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {fetchNews} from "@/store/newsSlice";
import {ChevronDown, Filter, Grid3x3, List, Loader2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {toast} from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader.tsx";
import {slugify} from "@/lib/utils.ts";

type ViewMode = "list" | "grid";
type SortOrder = "newest" | "oldest";

const newsletterSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const News = () => {
    const dispatch = useAppDispatch();
    const {items, loading, error} = useAppSelector((state) => state.news);
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [selectedYear, setSelectedYear] = useState<string>("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset,
    } = useForm<NewsletterFormData>({
        resolver: zodResolver(newsletterSchema),
        mode: "onChange",
    });

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

    const onNewsletterSubmit = async (data: NewsletterFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://staging.monchain.com/p/nos/api/v1/subscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "2f68ec95-940c-4ab1-bce0-9cc6a1dfd87f",
                },
                body: JSON.stringify({
                    email: data.email,
                    product: "colyon",
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to subscribe");
            }

            toast({
                title: "Success!",
                description: "You've been subscribed to our newsletter.",
            });
            reset();
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to subscribe. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-6">
                <PageHeader
                    title="News & Updates"
                    description="Stay updated with the latest from Colyon - product launches, research breakthroughs, and company milestones."
                />

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
                                <Filter className="w-4 h-4"/>
                                Filter
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}/>
                            </Button>

                            {/* Filter Dialog */}
                            {isFilterOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg p-4 z-50 animate-fade-in">
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
                                viewMode === "list" ? "bg-white text-black" : "hover:bg-muted"
                            }`}
                            aria-label="List view"
                        >
                            <List className="w-4 h-4"/>
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded transition-colors ${
                                viewMode === "grid" ? "bg-white text-black" : "hover:bg-muted"
                            }`}
                            aria-label="Grid view"
                        >
                            <Grid3x3 className="w-4 h-4"/>
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
                                                style={{animationDelay: `${index * 0.1}s`}}
                                            >
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="text-foreground/60 text-sm">{item.date}</span>
                                                    <span
                                                        className={`px-3 py-1 ${badgeClass} rounded-full text-xs font-medium`}>
                                                        {item.category}
                                                      </span>
                                                </div>
                                                <Link
                                                    to={`/news/${slugify(item.title)}`}
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
                                                to={`/news/${slugify(item.title)}`}
                                                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all animate-fade-in"
                                                style={{animationDelay: `${index * 0.1}s`}}
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
                                                        <span
                                                            className={`px-2 py-1 ${badgeClass} rounded-full text-xs font-medium`}>
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
                    <div
                        className="bg-gradient-to-br from-accent/10 to-mint/10 border border-accent/20 rounded-xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
                        <p className="text-foreground/70 mb-8 text-lg">
                            Get the latest Colyon news, research updates, and product announcements
                            delivered to your inbox.
                        </p>
                        <form onSubmit={handleSubmit(onNewsletterSubmit)} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        disabled={isSubmitting}
                                        {...register("email")}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1 text-left">{errors.email.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={!isValid || isSubmitting}
                                    className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin"/>
                                            Subscribing...
                                        </>
                                    ) : (
                                        "Subscribe"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default News;
