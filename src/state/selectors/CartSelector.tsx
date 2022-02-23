import { RootState } from '../reducers';

export const selectCartItemsQuantity = (state: RootState) => {
  return state.cart.cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
};
