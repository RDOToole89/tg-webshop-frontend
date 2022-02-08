export interface LoadProductsAction {
  type: 'load_products';
}

export interface LoadProductsSuccessAction {
  type: 'load_products_success';
  payload: string[];
}

export interface LoadProductsErrorAction {
  type: 'load_products_error';
  payload: string;
}

export type TLoadProductsAction =
  | LoadProductsAction
  | LoadProductsSuccessAction
  | LoadProductsErrorAction;
