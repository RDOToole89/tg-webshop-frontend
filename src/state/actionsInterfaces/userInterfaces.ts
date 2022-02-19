import { User } from '../reducers/userReducer';

export interface fetchUserAction {
  type: 'fetch_user';
}

export interface LoginUserSucessAction {
  type: 'login_user_success';
  payload: User;
}

export interface LoginUserErrorAction {
  type: 'login_user_error';
  payload: string;
}

export interface LogoutUserAction {
  type: 'logout_user';
}

export type TLoginUserAction =
  | fetchUserAction
  | LoginUserSucessAction
  | LoginUserErrorAction
  | LogoutUserAction;
