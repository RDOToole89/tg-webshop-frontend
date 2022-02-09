import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// this line is necessary to make TypeScript work with useSelector
// https://react-redux.js.org/using-react-redux/usage-with-typescript

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
