import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

const FeaturedProducts = () => {
  // Get one product from each category for featured section
  const featuredProducts = [
    products.find((p) => p.id === "brownie-caramel"),
    products.find((p) => p.id === "cheesecake-berry"),
    products.find((p) => p.id === "cupcake-redvelvet"),
    products.find((p) => p.id === "brownie-classic"),
  ].filter(Boolean);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Customer Favorites
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Best Sellers
          </h2>
          <p className="text-muted-foreground">
            Our most loved treats that keep customers coming back for more
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product!.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product!} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
