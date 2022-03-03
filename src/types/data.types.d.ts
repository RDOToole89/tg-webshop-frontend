export interface Product {
  productId: number | string;
  name: string;
  desc: string;
  brand: string;
  tags: string[];
  platforms: string[];
  imageUrl: string;
  extraImages: string[];
  categoryId: number;
  stock: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductDetails {
  id: number | string;
  desc: string;
  brand: string;
  rating: number;
  ratingQuantity: number;
  title: string;
  tags: string[];
  platforms: string[];
  imageUrl: string;
  extraImages: string[];
  stock: number;
  price: number;
}

export type CartItem = {
  id: number;
  title: string;
  brand: string;
  price: number;
  rating: number;
  ratingQuantity: number;
  platform: string;
  imageUrl: string;
};

export type User = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  remainLoggedIn: boolean;
};

export const TESTUSER = {
  userName: 'RDOToole89',
  firstName: 'Roibin',
  lastName: 'OToole',
  email: 'roibinotoole@gmail.com',
  remainLoggedIn: true,
};
