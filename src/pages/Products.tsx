import { useParams } from "react-router-dom";
import { getProductsByCategory, categories } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];
  const categoryInfo = categories.find((c) => c.id === category);

  if (!categoryInfo) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-3xl font-bold">Category Not Found</h1>
          <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4 animate-fade-in-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Collection
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            {categoryInfo.name}
          </h1>
          <p className="text-muted-foreground text-lg">
            {categoryInfo.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No products found in this category.
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
