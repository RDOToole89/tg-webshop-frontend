import {
  createUserWithEmailAndPassword,
  UserCredential,
  User,
  signOut,
} from '@firebase/auth';
import { Action, Dispatch } from 'redux';
import { axios } from '../../constants/axios';
import { auth } from '../../firebase/firebase';
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

type SignUpWithEmail = {
  email: string;
  password: string;
};

export const signUpWithFirebaseEmail =
  ({ email, password }: SignUpWithEmail) =>
  async (dispatch: Dispatch<Action>) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch({
          type: ActionType.SIGNUP_USER_SUCCESS,
          payload: user,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({
          type: ActionType.SIGNUP_USER_ERROR,
          payload: error.message,
        });
      });
  };

export const signUpWithFirebaseGoogle =
  (user: User) => async (dispatch: Dispatch<Action>) => {
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

export const signOutWithFirebase = (user: UserCredential) => {
  console.log('USER CREDENTIAL INSIDE FIREBASESIGNOUT', user);

  return async (dispatch: Dispatch<Action>) => {
    signOut(auth)
      .then(() => {
        console.log('SIGNED OUT SUCCESFULLY');

        // Sign-out successful.
        dispatch({
          type: ActionType.SIGNOUT_USER_SUCCESS,
          payload: user,
        });
      })
      .catch((error) => {
        // An error happened.
        console.log('ERROR SIGNING USER OUT', error);
        dispatch({
          type: ActionType.SIGNOUT_USER_ERROR,
          payload: user,
        });
      });
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT_USER,
    });
  };
};
