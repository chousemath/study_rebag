import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favorites';
import { productsApi } from '../apis/productsApi'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    productsApi.middleware,
  )
});
