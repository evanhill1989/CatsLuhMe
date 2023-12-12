import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        cats: [],
        relationshipStatus: 'neutral',
    },
    reducers: {
        addCat: (state, action) => {
            state.cats.push(action.payload);
        },
        removeCat: (state, action) => {
            state.cats = state.cats.filter(cat => cat.id !== action.payload);
        },
        updateRelationshipStatus: (state, action) => {
            state.relationshipStatus = action.payload;
        },
    },
});

export const { addCat, removeCat, updateRelationshipStatus } = userSlice.actions;

export default userSlice.reducer;
