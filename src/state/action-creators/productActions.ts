import { Action, Dispatch } from 'redux';
import { axios } from '../../constants/axios';
import { ActionType } from '../action-types';

export const loadProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_PRODUCTS,
    });

    try {
      const response = await axios.get('/products');
      const products = response.data;

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
