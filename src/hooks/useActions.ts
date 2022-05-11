import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  cartActionCreators,
  categoryActionCreators,
  productsActionCreators,
  repositoryActionCreators,
  userActionCreators,
} from '../state';

const actionCreators: any = {
  ...productsActionCreators,
  ...cartActionCreators,
  ...repositoryActionCreators,
  ...categoryActionCreators,
  ...userActionCreators,
};

// custom hook to neaten up the look of dispatching an action with Redux
// binds the dispatch function to the action creator

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
