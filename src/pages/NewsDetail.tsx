import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchNews } from "@/store/newsSlice";

const NewsDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.news);
  const newsItem = items.find((item) => item.id === id);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchNews());
    }
  }, [dispatch, items.length]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-foreground/60">Loading...</p>
      </div>
    );
  }

  if (!newsItem) {
    return <Navigate to="/news" replace />;
  }

  const borderColor = newsItem.accentColor === "accent" ? "border-accent" : "border-mint";
  const badgeClass = newsItem.accentColor === "accent" 
    ? "bg-accent/10 text-accent border border-accent/20" 
    : "bg-mint/10 text-mint border border-mint/20";

  return (
    <>
      <Link
        to="/news"
        className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to News
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className={`border-l-4 ${borderColor} pl-8 animate-fade-in`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-foreground/60 text-sm">{newsItem.date}</span>
            <span className={`px-3 py-1 ${badgeClass} rounded-full text-xs font-medium`}>
              {newsItem.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {newsItem.title}
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              {newsItem.description}
            </p>
            
            {newsItem.content && (
              <div className="text-foreground/70 leading-relaxed space-y-4">
                {newsItem.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default NewsDetail;
