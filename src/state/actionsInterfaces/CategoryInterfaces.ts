// Generic Action Inteface => not recommended
export interface GenericAction {
  type: string;
  payload?: any;
}

export interface LoadCategoryAction {
  type: 'load_categories';
}

export interface LoadCategorySuccessAction {
  type: 'load_categories_success';
  payload: string[];
}

export interface LoadCategoryErrorAction {
  type: 'load_categories_error';
  payload: string;
}

export type TLoadCategoryAction =
  | LoadCategoryAction
  | LoadCategorySuccessAction
  | LoadCategoryErrorAction;
