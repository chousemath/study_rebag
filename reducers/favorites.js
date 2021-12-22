import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: { value: {} },
    reducers: {
        addFavorite: (state, action) => {
            state.value[action.payload.id] = action.payload;
        },
        removeFavorite: (state, action) => {
            state.value[action.payload.id] = null;
        },
    }
});

export const {
    addFavorite,
    removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;