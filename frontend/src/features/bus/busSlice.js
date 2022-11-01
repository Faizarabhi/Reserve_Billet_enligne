import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import grandbuService from './busService'

const initialState = {
  grandbus: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new grandbus
export const createGrandbus = createAsyncThunk(
  'grandbus/create',
  async (grandbusData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await grandbuService.createGrandbus(grandbusData, token)
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

// Get user grandbus
export const getGrandbus = createAsyncThunk(
  'grandbus/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await grandbuService.getgrandbus(token)
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

// Delete user grandbus
export const deleteGrandbus = createAsyncThunk(
  'goals/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await grandbuService.deleteGrandbusGrandbus(id, token)
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

export const grandbuSlice = createSlice({
  name: 'grandbus',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGrandbus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGrandbus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.grandbus.push(action.payload)
      })
      .addCase(createGrandbus.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getGrandbus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGrandbus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.grandbus = action.payload
      })
      .addCase(getGrandbus.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteGrandbus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGrandbus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.grandbus = state.grandbus.filter(
          (grandbus) => grandbus._id !== action.payload.id
        )
      })
      .addCase(deleteGrandbus.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = grandbuSlice.actions
export default grandbuSlice.reducer