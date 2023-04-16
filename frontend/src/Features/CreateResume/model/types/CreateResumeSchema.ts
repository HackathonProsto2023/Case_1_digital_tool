export interface CreateResumeSchema {
  email: string
  name: string
  lastname: string
  busyness: number[]
  skills: number[]
  salary: number | null
  description: string
  isLoading: boolean
  error: null | string
}
