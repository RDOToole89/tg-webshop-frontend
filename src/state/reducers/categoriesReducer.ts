import { TLoadCategoryAction } from '../actionsInterfaces/CategoryInterfaces';
import { ActionType } from '../action-types';

export interface CategoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const reducer = (
  state: CategoriesState = initialState,
  action: TLoadCategoryAction
): CategoriesState => {
  switch (action.type) {
    case ActionType.LOAD_CATEGORIES:
      return { loading: true, error: null, data: [] };

    case ActionType.LOAD_CATEGORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.LOAD_CATEGORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
