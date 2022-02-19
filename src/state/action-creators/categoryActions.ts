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

      dispatch({
        type: ActionType.LOAD_CATEGORIES_SUCCESS,
        payload: response.data.categories,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.LOAD_CATEGORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
