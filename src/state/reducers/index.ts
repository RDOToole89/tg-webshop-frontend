import { combineReducers } from 'redux';
import { reducer as repositoriesReducer } from './repositoriesReducer';
import { reducer as categoriesReducer } from './categoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
  categories: categoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
