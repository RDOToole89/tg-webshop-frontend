import { Action, Dispatch } from 'redux';
import { ActionType } from '../action-types';

export const loadProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_PRODUCTS,
    });

    try {
      const response = await fetch('http://localhost:3000/products');
      const products = await response.json();
      console.log('PRODUCTS', products);

      dispatch({
        type: ActionType.LOAD_PRODUCTS_SUCCESS,
        payload: products,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.LOAD_PRODUCTS_ERROR,
        payload: error.message,
      });
    }
  };
};
