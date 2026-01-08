import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bakery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious homemade pastries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl space-y-6 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            ✨ Homemade with Love
          </span>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Sweet Bites,{" "}
            <span className="text-primary">Happy</span> Moments
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Handcrafted brownies, cheesecakes, and cupcakes made fresh to order. 
            Every treat is baked with premium ingredients and a whole lot of love.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/products/brownies">
              <Button variant="hero" size="lg">
                Explore Menu
                <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
            <Link to="/products/cupcakes">
              <Button variant="outline" size="lg">
                See Cupcakes
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
