import { Product } from '../../types/data.types';
import { ActionType } from '../action-types';
import { TLoadProductsAction } from '../actionsInterfaces/ProductsInterfaces';

export interface ProductsState {
  loading: boolean;
  error: string | null;
  data: Product[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const reducer = (
  state: ProductsState = initialState,
  action: TLoadProductsAction
): ProductsState => {
  switch (action.type) {
    case ActionType.LOAD_PRODUCTS:
      return { loading: true, error: null, data: [] };

    case ActionType.LOAD_PRODUCTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.LOAD_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
