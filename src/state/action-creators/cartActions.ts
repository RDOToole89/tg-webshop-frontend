import { Action, Dispatch } from 'redux';
import { ActionType } from '../action-types';

export const addToCart = (productId: number, platform: string) => {
  console.log('INSIDE ADD TO CART');
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: { productId, platform },
    });
  };
};

export const removeFromCart = (productId: number, platform: string) => {
  console.log('INSIDE REMOVE FROM CART');
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: { productId, platform },
    });
  };
};

export const addQuantityToCart = (productId: number, quantity: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_QUANTITY_TO_CART,
      payload: { productId, quantity },
    });
  };
};

export const removeQuantityFromCart = (productId: number, quantity: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SUBTRACT_QUANTITY_FROM_CART,
      payload: { productId, quantity },
    });
  };
};

export const deleteFromCart = (productId: number, platform: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_FROM_CART,
      payload: { productId, platform },
    });
  };
};
