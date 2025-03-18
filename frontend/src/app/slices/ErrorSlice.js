import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => action.payload,

    clearError: () => initialState,
  },
})

export const { setError, clearError } = errorSlice.actions

export const selectErrorMessagge = (state) => state.error

export default errorSlice.reducer
