import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginByEmail } from '../services/AuthByEmail/AuthByEmail'
import { CreateResumeSchema } from '../types/CreateResumeSchema'

const initialState: CreateResumeSchema = {
  email: '',
  name: '',
  lastname: '',
  busyness: [],
  skills: [],
  description: '',
  salary: null,
  isLoading: false,
  error: null
}

const createResumeSlice = createSlice({
  name: 'createResumeSlice',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload
    },
    setSkills: (state, action: PayloadAction<number>) => {
      state.skills.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginByEmail.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(LoginByEmail.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(LoginByEmail.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: CreateResumeActions } = createResumeSlice
export const { reducer: CreateResumeReducer } = createResumeSlice
