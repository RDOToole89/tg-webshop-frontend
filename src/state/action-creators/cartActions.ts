import { Action, Dispatch } from 'redux';
import { ActionType } from '../action-types';

export const addToCart = (productId: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: { productId },
    });
  };
};

export const removeFromCart = (productId: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: { productId },
    });
  };
};
