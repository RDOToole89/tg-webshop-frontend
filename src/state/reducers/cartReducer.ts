import {
  findItemByIdGen,
  addQuantityToItemGen,
  subtractQuantityToItemGen,
  removeItemByIdGen,
} from './cartHelper';
import { ActionType } from '../action-types';
import { TCartActions } from '../actionsInterfaces/cartInterfaces';

interface cartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  loading: boolean;
  error: string | null;
  cartItems: cartItem[];
  checkoutItems: cartItem[];
}

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
  checkoutItems: [],
};

export const reducer = (
  state: CartState = initialState,
  action: TCartActions
): CartState => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      const { productId } = action.payload;
      const itemAlreadyInCart = findItemByIdGen(state.cartItems, productId);

      if (itemAlreadyInCart) {
        return {
          ...state,
          cartItems: addQuantityToItemGen(state.cartItems, productId, 1),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { productId: productId, quantity: 1 }],
      };
    }

    case ActionType.REMOVE_FROM_CART: {
      const { productId } = action.payload;
      const itemAlreadyInCart = findItemByIdGen(state.cartItems, productId);

      if (itemAlreadyInCart && itemAlreadyInCart.quantity) {
        return {
          ...state,
          cartItems: subtractQuantityToItemGen(state.cartItems, productId, 1),
        };
      }
      return {
        ...state,
        cartItems: removeItemByIdGen(state.cartItems, productId),
      };
    }

    case ActionType.ADD_QUANTITY_TO_CART: {
      return { ...state };
    }

    case ActionType.SUBTRACT_QUANTITY_FROM_CART: {
      return { ...state };
    }

    case ActionType.PUSH_ITEMS_TO_CHECKOUT: {
      return { ...state, cartItems: [], checkoutItems: [...state.cartItems] };
    }

    case ActionType.EMPTY_CART: {
      return {
        loading: false,
        error: null,
        cartItems: [],
        checkoutItems: [],
      };
    }

    default:
      return state;
  }
};
