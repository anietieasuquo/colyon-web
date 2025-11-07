import { Outlet, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NewsLayout = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Outlet />
      </div>
    </main>
  );
};

export default NewsLayout;
