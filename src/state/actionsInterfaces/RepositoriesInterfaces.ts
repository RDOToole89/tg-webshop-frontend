export interface SearchRepositoriesAction {
  type: 'search_repositories';
}

export interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}

export interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
}

export type TSearchRepoAction =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
