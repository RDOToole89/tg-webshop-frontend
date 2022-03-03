import { Product, ProductDetails } from './../types/data.types.d';
export type BottomTabParams = {
  Home: undefined;
  Cart: undefined;
  Search: undefined;
  Categories: undefined;
  Profile: undefined;
  Products: {
    categoryName: string;
  };
  ProductDetails: ProductDetails;
  AccountDetails: undefined;
  AddProducts: {
    title: string;
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
  Review: undefined;
  AccountDetails: undefined;
  AddProducts: {
    title: string;
  };
};
