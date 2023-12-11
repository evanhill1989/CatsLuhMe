import { configureStore } from '@reduxjs/toolkit';

import { catsReducer } from '../features/cats/catsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    cats: catsReducer,
    user: userReducer,
  },
});
