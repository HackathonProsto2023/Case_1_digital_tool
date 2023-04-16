import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginByEmail } from '../services/AuthByEmail/AuthByEmail'
import { LoginSchema } from '../types/LoginSchema'

const initialState: LoginSchema = {
  password: '',
  email: '',
  isLoading: false,
  error: null
}

const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginByEmail.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(LoginByEmail.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(LoginByEmail.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: LoginActions } = loginSlice
export const { reducer: LoginReducer } = loginSlice
