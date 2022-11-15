import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import tripReducer from '../features/trip/tripSlice';
import granbusReducer from '../features/bus/busSlice';


export const store = configureStore({
  reducer: {
  auth: authReducer,
    trips : tripReducer,
    grandbus : granbusReducer
  },
});
