import { Action, Dispatch } from 'redux';
import { axios } from '../../constants/axios';
import { ActionType } from '../action-types';

export const fetchUser = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_USER,
    });

    try {
      const response = await axios.get(`/users/${id}`);
      const user = response.data;

      dispatch({
        type: ActionType.LOGIN_USER_SUCCESS,
        payload: user,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: error.message,
      });
    }
  };
};
