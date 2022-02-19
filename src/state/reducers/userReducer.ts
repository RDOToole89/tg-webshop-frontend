import { TLoginUserAction } from './../actionsInterfaces/userInterfaces';
import { ActionType } from '../action-types';

export type User = {
  userName: string;
  firstName: string;
  lastName: string;
  remainLoggedIn: boolean;
};

export interface UserState {
  loading: boolean;
  error: string | null;
  user: User | null;
  isLoggedIn: boolean;
  message: string | null;
}

const initialState = {
  loading: false,
  error: null,
  user: {
    userName: 'RDOToole89',
    firstName: 'Roibin',
    lastName: 'OToole',
    remainLoggedIn: true,
  },
  isLoggedIn: true,
  message: 'Welcome',
};

export const reducer = (
  state: UserState = initialState,
  action: TLoginUserAction
): UserState => {
  switch (action.type) {
    case ActionType.FETCH_USER:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
        message: 'Logging in user',
      };

    case ActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        message: `${state?.user?.userName} logged in sucessfully!`,
      };

    case ActionType.LOGIN_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
