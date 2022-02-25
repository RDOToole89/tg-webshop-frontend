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
    brand: string;
    title: string;
    price: number;
    rating: number;
    ratingQuantity: number;
    tags: string[];
    platforms: string[];
    stock: number;
    desc: string;
    imageUrl: string;
    extraImages: string[];
  };
  AccountDetails: undefined;
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
  Review: undefined;
};
