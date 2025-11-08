import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
                <Button variant="hero" size="lg" asChild>
                    <Link to="/" className="gap-2">
                        <ArrowLeft className="w-4 h-4"/>
                        Return to Home
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
