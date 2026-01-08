import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Confirmation = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center space-y-8">
          {/* Success Icon */}
          <div className="animate-scale-in">
            <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              Thank You! 🎉
            </h1>
            <p className="text-lg text-muted-foreground">
              Your order has been placed successfully. We're excited to start baking your treats!
            </p>
          </div>

          {/* Order Details Card */}
          <div
            className="bakery-card p-6 text-left space-y-4 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="font-serif text-lg font-semibold">What's Next?</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                  1
                </span>
                <span>You'll receive an email confirmation shortly with your order details.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                  2
                </span>
                <span>We'll start preparing your order fresh on the scheduled date.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                  3
                </span>
                <span>We'll reach out when your order is ready for pickup or delivery.</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link to="/">
              <Button variant="bakery" size="lg">
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/products/brownies">
              <Button variant="outline" size="lg">
                Order More Treats
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Contact Note */}
          <p
            className="text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Questions about your order?{" "}
            <a href="mailto:hello@bitesbyraf.com" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Confirmation;
