import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CreateVacansySchema } from '../types/CreateVacansySchema'

const initialState: CreateVacansySchema = {
  email: '',
  name: '',
  text: '',
  salary: null,
  company_name: '',
  busyness: [],
  skills: [],
  isLoading: false,
  error: null
}

const createVacansySlice = createSlice({
  name: 'createVacansySlice',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
    setSalary: (state, action: PayloadAction<number>) => {
      state.salary = action.payload
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.company_name = action.payload
    },
    setSkills: (state, action: PayloadAction<number>) => {
      state.skills = [action.payload]
    },
    setBusyness: (state, action: PayloadAction<any>) => {
      state.busyness = action.payload
    }
  }
})

export const { actions: CreateVacansyActions } = createVacansySlice
export const { reducer: CreateVacansyReducer } = createVacansySlice
