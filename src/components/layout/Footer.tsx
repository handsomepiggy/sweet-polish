import { Heart, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold">bitesbyraf</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Homemade treats baked with love. Every bite tells a story of passion, 
              quality ingredients, and pure deliciousness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="/products/brownies" className="hover:text-primary transition-colors">Brownies</a>
              </li>
              <li>
                <a href="/products/cheesecakes" className="hover:text-primary transition-colors">Cheesecakes</a>
              </li>
              <li>
                <a href="/products/cupcakes" className="hover:text-primary transition-colors">Cupcakes</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a 
                href="mailto:hello@bitesbyraf.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@bitesbyraf.com
              </a>
              <a 
                href="https://instagram.com/bitesbyraf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @bitesbyraf
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 bitesbyraf. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> and lots of butter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
