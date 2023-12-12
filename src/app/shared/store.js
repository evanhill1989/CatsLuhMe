import { configureStore } from '@reduxjs/toolkit';

import { selectCat } from '../../features/cats/catsSlice';
// import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    cats: selectCat,
    // user: userReducer,
  },
});
