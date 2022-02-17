import { RootState } from '../reducers';
import { cartItem, CartState } from '../reducers/cartReducer';

export const selectCartItemsQuantity = (state: RootState) => {
  return state.cart.cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
};
