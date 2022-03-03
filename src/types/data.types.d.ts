export interface Product {
  productId: number | string;
  name: string;
  desc: string;
  brand: string;
  tags: string[];
  platforms: string[];
  imgUrl: string;
  extraImages: string[];
  categoryId: number;
  stock: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
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
