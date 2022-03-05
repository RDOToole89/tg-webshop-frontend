import { TLoginUserAction } from './../actionsInterfaces/userInterfaces';
import { ActionType } from '../action-types';

export interface UserState {
  loading: boolean;
  error: string | null;
  user: any;
  isLoggedIn: boolean;
  message: string | null;
}

const initialState = {
  loading: false,
  error: null,
  user: null,
  isLoggedIn: false,
  message: 'Welcome',
};

export const reducer = (
  state: UserState = initialState,
  action: TLoginUserAction
): UserState => {
  //  console.log('LOG ACTIONTYPE =>', action.type);

  switch (action.type) {
    case ActionType.FETCH_USER:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
        message: 'Logging in user',
      };

    case ActionType.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
        message: `${action.payload.displayName} logged in sucessfully!`,
      };

    case ActionType.SIGNUP_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ActionType.SIGNOUT_USER_SUCCESS:
      // console.log('INSIDE SIGNOUT SUCCESS');
      return {
        ...state,
        message: `${action.payload.displayName} logged out sucessfully!`,
        loading: false,
        user: null,
        isLoggedIn: false,
      };

    case ActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
        message: `${action.payload.displayName} logged in sucessfully!`,
      };

    case ActionType.LOGIN_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ActionType.LOGOUT_USER: {
      return {
        ...state,
        loading: false,
        user: null,
        isLoggedIn: false,
        error: '',
      };
    }

    default:
      return state;
  }
};
