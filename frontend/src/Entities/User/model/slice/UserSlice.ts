import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RecurterEnumType } from 'Features/Registration/model/types/RegisterUserSchema'
import { UserAccessTokenKey, UserDataKey } from 'Shared/consts/AppConsts'
import { UserLoginStateSchema } from 'Shared/types/RegistrationAutorizationTypes'

const initialState: UserLoginStateSchema = {
  token: null,
  role: null
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, actions: PayloadAction<UserLoginStateSchema>) => {
      state.token = actions.payload.token
      state.role = actions.payload.role
    },
    initUserAuth: (state) => {
      const accessToken = localStorage.getItem(UserAccessTokenKey)
      const role = localStorage.getItem(UserDataKey) as RecurterEnumType

      if (role) {
        state.token = accessToken
        state.role = role
      }
    },
    logoutUser: (state) => {
      state.token = null
      state.role = null

      localStorage.removeItem(UserAccessTokenKey)
      localStorage.removeItem(UserDataKey)
    }
  }
})

export const { reducer: UserReducer } = UserSlice
export const { actions: UserActions } = UserSlice
