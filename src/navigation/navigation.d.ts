import { Product } from './../types/data.types.d';
export type BottomTabParams = {
  Home: undefined;
  Cart: undefined;
  Search: undefined;
  Categories: undefined;
  Profile: undefined;
  Products: {
    categoryName: string;
  };
  ProductDetails: Product;
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
  AccountDetails: undefined;
};
