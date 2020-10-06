import { combineReducers } from 'redux';
import { studentsSlice } from './redux';
import { RootState } from './root';
import { Store, createStore } from 'redux';

export const rootReducer = combineReducers<RootState>({
  students: studentsSlice.reducer,
})

export function configureStore(initialState?: RootState): Store<RootState> {
  const store = createStore(
    rootReducer as any,
    initialState as any,
  ) as Store<RootState>;

  return store;
}