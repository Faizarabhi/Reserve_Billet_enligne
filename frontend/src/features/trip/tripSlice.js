

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tripService from './tripService'
const initialState = {
    trip: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
  // create new Trip
  export const createTrip = createAsyncThunk('trips/create', async (tripData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
      return await tripService.createTrip(tripData, token)
    }
    catch(error){
        const message = (error.response && error.response.data && error.response.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
  })

  // Get user Trip
export const getGoals = createAsyncThunk(
    'goals/getAll',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await tripService.getTtips(token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
export const tripSlice = createSlice({
    name : 'trip',
    initialState,
    reducers :{
        reset : (state) =>initialState
    }, extraReducers: (builder) => {
        builder
          .addCase(createTrip.pending, (state) => {
            state.isLoading = true
          })
          .addCase(createTrip.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.trips.push(action.payload)
          })
          .addCase(createTrip.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          }).addCase(getGoals.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getGoals.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals = action.payload
          })
          .addCase(getGoals.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
       
    }

})


export const { reset } = tripSlice.actions
export default tripSlice.reducer



