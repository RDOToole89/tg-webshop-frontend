import { combineReducers } from 'redux';
import { reducer as cartReducer } from './cartReducer';
import { reducer as categoriesReducer } from './categoriesReducer';
import { reducer as productsReducer } from './productsReducer';
import { reducer as userReducer } from './userReducer';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
