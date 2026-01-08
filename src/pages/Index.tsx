import Hero from "@/components/home/Hero";
import CategoryCard from "@/components/home/CategoryCard";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { categories } from "@/data/products";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Treats
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Browse by Category
            </h2>
            <p className="text-muted-foreground">
              Each category is filled with handcrafted delights waiting to be discovered
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard
                  id={category.id}
                  name={category.name}
                  description={category.description}
                  image={category.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">🍫</span>
              </div>
              <h3 className="font-serif text-xl font-semibold">Premium Ingredients</h3>
              <p className="text-muted-foreground text-sm">
                Only the finest chocolate, butter, and fresh ingredients make it into our kitchen
              </p>
            </div>
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="font-serif text-xl font-semibold">Baked Fresh</h3>
              <p className="text-muted-foreground text-sm">
                Every order is baked to order, ensuring maximum freshness and flavor
              </p>
            </div>
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="font-serif text-xl font-semibold">Made with Love</h3>
              <p className="text-muted-foreground text-sm">
                Every treat is crafted with care and passion, just like homemade
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
