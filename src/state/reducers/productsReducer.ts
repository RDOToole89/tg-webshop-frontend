import { ActionType } from '../action-types';
import { TLoadProductsAction } from '../actions/loadProductsInterfaces';

export interface ProductsState {
  loading: boolean;
  error: string | null;
  data: string[];
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
  // Switch statements search as typeguards
  switch (action.type) {
    case ActionType.LOAD_PRODUCTS:
      return { loading: true, error: null, data: [] };
    case ActionType.LOAD_PRODUCTS_SUCCESS:
      // 100% certain that 'action' is SearchRepositoriesSuccessAction
      return { loading: false, error: null, data: action.payload };
    case ActionType.LOAD_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
