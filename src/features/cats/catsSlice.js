import { createSlice } from '@reduxjs/toolkit';
import { CATS } from '../../app/shared/CATS';



const catsSlice = createSlice({
    name: 'cats',
    initialState: {
      selectedCat: null,
      catsArray: CATS, // Your array of cats
    },
    reducers: {
      selectCat(state, action) {
        console.log('Is the reducer even running');
        state.selectedCat = state.catsArray.find(cat => cat.name === action.payload); // Set the selected cat
      },
    },
  });




export const { selectCat } = catsSlice.actions;
export default catsSlice.reducer;