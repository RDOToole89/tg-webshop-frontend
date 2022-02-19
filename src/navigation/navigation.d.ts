export type BottomTabParams = {
  Home: undefined;
  Cart: undefined;
  Search: undefined;
  Categories: undefined;
  Profile: undefined;
  Products: {
    categoryName: string;
  };
  ProductDetails: {
    id: number;
    title: string;
    price: number;
    rating: number;
    ratingQuantity: number;
    tags: string[];
    stock: number;
    imageUrl: string;
  };
};

export type RootStackParams = {
  Home: undefined;
  Cart: undefined;
  Search: undefined;
  Categories: undefined;
  Root: undefined;
  Profile: undefined;
  Signup: undefined;
  LoginStack: undefined;
};
