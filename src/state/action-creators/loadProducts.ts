import { Action, Dispatch } from 'redux';
import { products } from '../../data/products';
import { ActionType } from '../action-types';

export const loadProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_PRODUCTS,
    });

    try {
      const loadedProducts = products;
      console.log(loadProducts);

      dispatch({
        type: ActionType.LOAD_PRODUCTS_SUCCESS,
        payload: loadedProducts,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.LOAD_PRODUCTS_ERROR,
        payload: error.message,
      });
    }
  };
};
