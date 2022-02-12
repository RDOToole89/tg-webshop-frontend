export interface Product {
  productId: number;
  name: string;
  desc: string;
  imgUrl: string;
  categoryId: number;
  stock: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
