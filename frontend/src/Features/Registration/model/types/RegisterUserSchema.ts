export interface RegisterUserSchema {
  password: string
  email: string
  login: string
  name: string
  lastname: string
  role: RecurterEnumType
  isLoading: boolean
  error: string | null
}

export type RecurterEnumType = 'recruiter' | 'applicant'
