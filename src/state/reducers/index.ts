import { combineReducers } from 'redux';
import { reducer as repositoriesReducer } from './repositoriesReducer';
import { reducer as categoriesReducer } from './categoriesReducer';
import { reducer as productsReducer } from './productsReducer';
import { reducer as cartReducer } from './cartReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
