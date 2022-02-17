import { Action, Dispatch } from 'redux';
import { axios } from '../../constants/axios';
import { ActionType } from '../action-types';

export const loadCategories = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_CATEGORIES,
    });

    try {
      const response = await axios.get('/categories');
      const categories = response.data.categories;

      dispatch({
        type: ActionType.LOAD_CATEGORIES_SUCCESS,
        payload: categories,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.LOAD_CATEGORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
