import { UserCredential } from '@firebase/auth';
import { User } from '@firebase/auth';

export interface fetchUserAction {
  type: 'fetch_user';
}

export interface SignupUserSucessAction {
  type: 'signup_user_success';
  payload: User;
}

export interface SignupUserErrorAction {
  type: 'signup_user_error';
  payload: string;
}

export interface SignoutUserSucessAction {
  type: 'signout_user_success';
  payload: User;
}

export interface SignoutUserErrorAction {
  type: 'signout_user_error';
  payload: User;
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
  | SignupUserSucessAction
  | SignupUserErrorAction
  | SignoutUserSucessAction
  | SignoutUserErrorAction
  | LoginUserSucessAction
  | LoginUserErrorAction
  | LogoutUserAction;
