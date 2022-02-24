import { Product } from '../../types/data.types';

export interface AddToCartAction {
  type: 'add_to_cart';
  payload: { productId: number; platform: string };
}

export interface RemoveFromCartAction {
  type: 'remove_from_cart';
  payload: { productId: number; platform: string };
}

export interface AddQuantityToCartAction {
  type: 'add_quantity_to_cart';
  payload: { productId: number; platform: string; quantity: number };
}

export interface RemoveQuantityFromCartAction {
  type: 'subtract_quantity_from_cart';
  payload: { productId: number; platform: string; quantity: number };
}

export interface DeleteFromCartAction {
  type: 'delete_from_cart';
  payload: { productId: number };
}

export interface PushItemsToCheckoutAction {
  type: 'push_items_to_checkout';
}

export interface EmptyCartAction {
  type: 'empty_cart';
}

export interface LoadCartAction {
  type: 'load_cart';
}

export interface LoadCartSuccessAction {
  type: 'load_cart_success';
  payload: Product[];
}

export interface LoadCartErrorAction {
  type: 'load_cart_error';
  payload: string;
}

export type TCartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | AddQuantityToCartAction
  | RemoveQuantityFromCartAction
  | DeleteFromCartAction
  | PushItemsToCheckoutAction
  | EmptyCartAction
  | LoadCartAction
  | LoadCartSuccessAction
  | LoadCartErrorAction;
