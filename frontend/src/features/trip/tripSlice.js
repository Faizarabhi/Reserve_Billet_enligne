import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tripService from './tripService'

const initialState = {
  trips: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new trip

export const createTrip = createAsyncThunk(
  'trips/create',
  async (tripData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tripService.createTrip(tripData, token)
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

// Get Trips by condition
export const searchTrip = createAsyncThunk(
  'trips/search',
  async(_,thunkAPI)=>{
    try{
      // erquest
      const token = thunkAPI.getState().auth.user.token
      return await tripService.getTrips(token)
    }catch(error){
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
// Get user trips
export const getTrips = createAsyncThunk(
  'trips/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tripService.getTrips(token)
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
// Update Trip
export const updateTrip = createAsyncThunk(
  'trips/update',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tripService.updateTrip(id, token)
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
// Delete user trip
export const deleteTrip = createAsyncThunk(
  'trips/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tripService.deleteTrip(id, token)
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
  name: 'trip',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
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
      })
      .addCase(getTrips.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTrips.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trips = action.payload
      })
      .addCase(getTrips.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateTrip.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateTrip.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trips = state.trips.filter(
          (trip) => trip._id !== action.payload.id
        )
      })
      .addCase(updateTrip.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTrip.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTrip.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trips = state.trips.filter(
          (trip) => trip._id !== action.payload.id
        )
      })
      .addCase(deleteTrip.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = tripSlice.actions
export default tripSlice.reducer