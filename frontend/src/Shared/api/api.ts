import axios from 'axios'
import { UserAccessTokenKey } from 'Shared/consts/AppConsts'

export const API = axios.create({
  baseURL: 'http://localhost:5432',
  headers: {
    Authorization: localStorage.getItem(UserAccessTokenKey)
  }
})
