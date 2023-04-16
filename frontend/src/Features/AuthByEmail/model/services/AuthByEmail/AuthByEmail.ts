import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserActions } from 'Entities/User'
import { UserAccessTokenKey, UserDataKey } from 'Shared/consts/AppConsts'
import { UserLoginStateSchema } from 'Shared/types/RegistrationAutorizationTypes'
import i18n from 'Shared/config/i18next/i18next'
import { ThunkApiType } from 'App/providers/StoreProvider/config/StateSchema'
import axios from 'axios'

interface ILoginByEmailProps {
  username?: string
  password?: string
}

export const LoginByEmail = createAsyncThunk<UserLoginStateSchema, ILoginByEmailProps, ThunkApiType<string>>(
  'login/authByEmail',
  async (authData, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi

    try {
      const response = await axios.post<UserLoginStateSchema>('http://127.0.0.1:8000/api/auth/token/login/', authData)
      const { token, role } = response.data

      if (!response.data) {
        throw new Error(i18n.t('feature_auth_by_email_error_fetch'))
      }

      localStorage.setItem(UserAccessTokenKey, token)
      localStorage.setItem(UserDataKey, role)
      dispatch(UserActions.setUserAuth(response.data))

      return response.data
    } catch (e) {
      return rejectWithValue(i18n.t('feature_auth_by_email_incorrect_auth'))
    }
  }
)
