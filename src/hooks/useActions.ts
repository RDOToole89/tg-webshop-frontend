import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProductsActionCreators, searchRepoActionCreators } from '../state';

const actionCreators: any = {
  loadProductsActionCreators,
  searchRepoActionCreators,
};

// custom hook to neaten up the look of dispatching an action
// with Redux

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);

  // { searchRepositories: dispatch(searchrepositories)}
};
