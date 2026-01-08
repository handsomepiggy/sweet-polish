import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="group bakery-card overflow-hidden">
      {/* Image Container */}
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <span className="font-semibold text-primary whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <Button
          onClick={handleAddToCart}
          variant="bakery"
          size="sm"
          className="w-full group/btn"
        >
          <Plus className="h-4 w-4 transition-transform group-hover/btn:rotate-90" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
