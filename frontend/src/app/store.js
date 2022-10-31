import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import tripReducer from '../features/trip/tripSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    trip : tripReducer
  },
});
