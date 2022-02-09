export interface Product {
  id: number;
  name: string;
  desc: string;
  imgUrl: string;
  categoryId: number;
  stock: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
