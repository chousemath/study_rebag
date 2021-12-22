import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favorites';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
