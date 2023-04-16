import { RecurterEnumType } from './../../Features/Registration/model/types/RegisterUserSchema'

export interface IUser {
  id?: number
  email?: string
  password?: string
  role?: RecurterEnumType
  name: string
  lastname: string
  login: string
}

export interface UserLoginStateSchema {
  token: string | null
  role: RecurterEnumType
}
