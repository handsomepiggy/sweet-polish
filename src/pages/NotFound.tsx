import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center space-y-6 animate-fade-in-up">
          <div className="text-8xl font-serif font-bold text-primary/20">404</div>
          <h1 className="font-serif text-3xl font-bold">Page Not Found</h1>
          <p className="text-muted-foreground">
            Oops! The page you're looking for seems to have wandered off to find more treats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/">
              <Button variant="bakery" size="lg">
                <Home className="h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
