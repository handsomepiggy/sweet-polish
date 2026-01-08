import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  delay?: number;
}

const CategoryCard = ({ id, name, description, image, delay = 0 }: CategoryCardProps) => {
  return (
    <Link
      to={`/products/${id}`}
      className="group block bakery-card overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
          <ArrowRight className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
