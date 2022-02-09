import { Product } from '../../types/types';
import { ActionType } from '../action-types';
import { TCartActions } from '../actionsInterfaces/cartInterfaces';

interface CartState {
  loading: boolean;
  error: string | null;
  cartItems: Product[];
  checkoutItems: Product[];
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
  // Switch statements search as typeguards
  switch (action.type) {
    case ActionType.ADD_TO_CART:

    case ActionType.REMOVE_FROM_CART:

    case ActionType.ADD_QUANTITY_TO_CART:

    case ActionType.SUBTRACT_QUANTITY_FROM_CART:

    case ActionType.PUSH_ITEMS_TO_CHECKOUT: {
    }

    case ActionType.EMPTY_CART:

    default:
      return state;
  }
};
