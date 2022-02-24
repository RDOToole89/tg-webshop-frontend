import {
  findItemByIdGen,
  findItemByIdandPlatformGen,
  addQuantityToItemGen,
  subtractQuantityFromItemGen,
  removeItemByIdGen,
} from './helperFunctions/cartHelpers';
import { ActionType } from '../action-types';
import { TCartActions } from '../actionsInterfaces/cartInterfaces';

export interface cartItem {
  productId: number;
  quantity: number;
  platform: string;
}

export interface CartState {
  loading: boolean;
  error: string | null;
  cartItems: cartItem[];
  checkoutItems: cartItem[];
}

const initialState = {
  loading: false,
  error: null,
  cartItems: [{ productId: 1, quantity: 2, platform: 'Amiga' }],
  checkoutItems: [],
};

export const reducer = (
  state: CartState = initialState,
  action: TCartActions
): CartState => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      // destruture productId and platform from the payload
      const { productId, platform } = action.payload;

      // this was where the error was: it was looking for id but not the
      // platform type. This function searches the cart and grabs the item
      // which has the payload id and platform type
      const itemAlreadyInCart = findItemByIdandPlatformGen(
        state.cartItems,
        platform,
        productId
      );

      // console.log(`ITEMINCART => iteration: ${i}`, itemAlreadyInCart);

      // creates a new item and initializes quantity to 1 because we're adding and item
      // to the cart
      const newCartItem = { productId, platform, quantity: 1 };

      // if no platform is selected just return the state
      if (!platform) return { ...state };

      // if there is no item in the cart add the item
      if (!itemAlreadyInCart) {
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
        };
      }

      // if item is is already in the cart e.g: SAME ID, but the platform is different
      // add a new item to the cart!
      if (itemAlreadyInCart && itemAlreadyInCart.platform !== platform) {
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
        };
      }

      // if item is in the cart and the platform is the same as payload thad add
      // 1 to the quantity of that item in the cart
      if (itemAlreadyInCart && itemAlreadyInCart.platform === platform) {
        return {
          ...state,
          cartItems: addQuantityToItemGen(
            state.cartItems,
            productId,
            platform,
            1
          ),
        };
      }
    }

    case ActionType.REMOVE_FROM_CART: {
      const { productId, platform } = action.payload;
      const itemAlreadyInCart = findItemByIdandPlatformGen(
        state.cartItems,
        platform,
        productId
      );

      if (itemAlreadyInCart && itemAlreadyInCart.platform === platform) {
        return {
          ...state,
          cartItems: subtractQuantityFromItemGen(
            state.cartItems,
            productId,
            platform,
            1
          ),
        };
      }
      return {
        ...state,
        cartItems: removeItemByIdGen(state.cartItems, productId),
      };
    }

    case ActionType.ADD_QUANTITY_TO_CART: {
      const { productId, quantity, platform } = action.payload;
      const itemAlreadyInCart = findItemByIdandPlatformGen(
        state.cartItems,
        platform,
        productId
      );

      if (itemAlreadyInCart && itemAlreadyInCart.quantity) {
        return {
          ...state,
          cartItems: addQuantityToItemGen(
            state.cartItems,
            productId,
            platform,
            quantity
          ),
        };
      }
      return {
        ...state,
        cartItems: removeItemByIdGen(state.cartItems, productId),
      };
    }

    case ActionType.SUBTRACT_QUANTITY_FROM_CART: {
      const { productId, quantity, platform } = action.payload;
      const itemAlreadyInCart = findItemByIdGen(state.cartItems, productId);

      if (itemAlreadyInCart && itemAlreadyInCart.quantity) {
        return {
          ...state,
          cartItems: subtractQuantityFromItemGen(
            state.cartItems,
            productId,
            platform,
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
