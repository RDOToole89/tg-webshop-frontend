import { UserCredential } from '@firebase/auth';
import { Action, Dispatch } from 'redux';
import { axios } from '../../constants/axios';
import { ActionType } from '../action-types';
import { User } from '../reducers/userReducer';

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

export const loginUser = (
  userTestObject?: User,
  email?: string,
  password?: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.LOGIN_USER_SUCCESS,
        payload: userTestObject,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fireBaseSignUp = (user: UserCredential) => {
  console.log('USER CREDENTIAL', user);

  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.SIGNUP_USER_SUCCESS,
        payload: user,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SIGNUP_USER_ERROR,
        payload: error.message,
      });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT_USER,
    });
  };
};
