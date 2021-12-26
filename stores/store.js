import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favorites';
import { api } from '../apis/apis'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});
