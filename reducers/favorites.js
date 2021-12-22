import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        ids: {},
        products: [],
    },
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.value.ids[action.payload.id] = true;
            state.value.products.push(action.payload);
        },
        removeFavorite: (state, action) => {
            const id = action.payload.id;
            state.value.ids[id] = false;
            state.value.products = state.value.products.filter(p => p.id !== id);
        },
    }
});

export const {
    addFavorite,
    removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;