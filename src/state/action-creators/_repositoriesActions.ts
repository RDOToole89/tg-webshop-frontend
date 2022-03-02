import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { ActionType } from '../action-types';

// NOT BEING USED! file is for reference purposes
export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get('https://api.npms.io/v2/search', {
        params: {
          q: term,
        },
      });
      console.log('DATA', data);
      const names = data.results.map((result: any) => result.package.name);
      console.log('NAMES', names);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
