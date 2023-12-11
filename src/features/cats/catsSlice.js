import { createSlice } from '@reduxjs/toolkit';
import { CATS } from '../../app/shared/CATS';

const initialState = {
    catsArray: CATS
};

const catsSlice = createSlice({
    name: 'cats',
    initialState
});

export const catsReducer = catsSlice.reducer;

export const selectAllCats = (state) => {
    return state.cats.catsArray;
};

export const selectCatById = (id) => (state) => {
    return state.cat.catsArray.find(
        (cat) => cat.id === parseInt(id)
    );
};

export const selectFeaturedCat = (state) => {
    return state.cats.catsArray.find((cat) => cat.featured);
};