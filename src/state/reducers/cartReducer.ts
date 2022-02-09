import { Action } from 'redux';
import {
  findItemByIdGen,
  addQuantityToItemGen,
  subtractQuantityFromItemGen,
  removeItemByIdGen,
} from './helperFunctions/cartHelpers';
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
          cartItems: subtractQuantityFromItemGen(state.cartItems, productId, 1),
        };
      }
      return {
        ...state,
        cartItems: removeItemByIdGen(state.cartItems, productId),
      };
    }

    case ActionType.ADD_QUANTITY_TO_CART: {
      const { productId, quantity } = action.payload;
      const itemAlreadyInCart = findItemByIdGen(state.cartItems, productId);

      if (itemAlreadyInCart && itemAlreadyInCart.quantity) {
        return {
          ...state,
          cartItems: addQuantityToItemGen(state.cartItems, productId, quantity),
        };
      }
      return {
        ...state,
        cartItems: removeItemByIdGen(state.cartItems, productId),
      };
    }

    case ActionType.SUBTRACT_QUANTITY_FROM_CART: {
      const { productId, quantity } = action.payload;
      const itemAlreadyInCart = findItemByIdGen(state.cartItems, productId);

      if (itemAlreadyInCart && itemAlreadyInCart.quantity) {
        return {
          ...state,
          cartItems: subtractQuantityFromItemGen(
            state.cartItems,
            productId,
            quantity
          ),
        };
      }
      return {
        ...state,
        cartItems: removeItemByIdGen(state.cartItems, productId),
      };
    }

    case ActionType.DELETE_FROM_CART: {
      const { productId } = action.payload;

      return {
        ...state,
        cartItems: removeItemByIdGen(state.cartItems, productId),
      };
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
