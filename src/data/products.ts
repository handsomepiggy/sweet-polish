import brownieImg from "@/assets/brownie.jpg";
import cheesecakeImg from "@/assets/cheesecake.jpg";
import cupcakeImg from "@/assets/cupcake.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  // Brownies
  {
    id: "brownie-classic",
    name: "Classic Fudge Brownie",
    price: 4.50,
    image: brownieImg,
    category: "brownies",
    description: "Rich, fudgy chocolate brownie with a crackly top. Pure chocolate bliss.",
  },
  {
    id: "brownie-walnut",
    name: "Walnut Crunch Brownie",
    price: 5.00,
    image: brownieImg,
    category: "brownies",
    description: "Our classic brownie loaded with toasted walnuts for extra crunch.",
  },
  {
    id: "brownie-caramel",
    name: "Salted Caramel Brownie",
    price: 5.50,
    image: brownieImg,
    category: "brownies",
    description: "Swirled with homemade salted caramel and topped with sea salt flakes.",
  },
  {
    id: "brownie-peanut",
    name: "Peanut Butter Swirl",
    price: 5.50,
    image: brownieImg,
    category: "brownies",
    description: "Chocolate meets creamy peanut butter in this indulgent treat.",
  },

  // Cheesecakes
  {
    id: "cheesecake-classic",
    name: "New York Cheesecake",
    price: 7.50,
    image: cheesecakeImg,
    category: "cheesecakes",
    description: "Creamy, dense, and perfectly tangy New York style cheesecake.",
  },
  {
    id: "cheesecake-berry",
    name: "Mixed Berry Cheesecake",
    price: 8.50,
    image: cheesecakeImg,
    category: "cheesecakes",
    description: "Topped with a luscious mixed berry compote and fresh berries.",
  },
  {
    id: "cheesecake-ube",
    name: "Ube Cheesecake",
    price: 9.00,
    image: cheesecakeImg,
    category: "cheesecakes",
    description: "Filipino-inspired purple yam cheesecake with a coconut crust.",
  },
  {
    id: "cheesecake-matcha",
    name: "Matcha Cheesecake",
    price: 8.50,
    image: cheesecakeImg,
    category: "cheesecakes",
    description: "Japanese green tea infused cheesecake with a subtle earthy sweetness.",
  },

  // Cupcakes
  {
    id: "cupcake-vanilla",
    name: "Vanilla Dream Cupcake",
    price: 4.00,
    image: cupcakeImg,
    category: "cupcakes",
    description: "Light vanilla sponge with fluffy vanilla buttercream frosting.",
  },
  {
    id: "cupcake-chocolate",
    name: "Chocolate Lover Cupcake",
    price: 4.00,
    image: cupcakeImg,
    category: "cupcakes",
    description: "Moist chocolate cake with rich chocolate ganache frosting.",
  },
  {
    id: "cupcake-redvelvet",
    name: "Red Velvet Cupcake",
    price: 4.50,
    image: cupcakeImg,
    category: "cupcakes",
    description: "Classic red velvet with tangy cream cheese frosting.",
  },
  {
    id: "cupcake-strawberry",
    name: "Strawberry Bliss Cupcake",
    price: 4.50,
    image: cupcakeImg,
    category: "cupcakes",
    description: "Fresh strawberry cake with strawberry buttercream and real berry pieces.",
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

export const categories = [
  {
    id: "brownies",
    name: "Brownies",
    description: "Rich, fudgy chocolate goodness",
    image: brownieImg,
  },
  {
    id: "cheesecakes",
    name: "Cheesecakes",
    description: "Creamy, dreamy slices of heaven",
    image: cheesecakeImg,
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Perfectly frosted little treats",
    image: cupcakeImg,
  },
];
