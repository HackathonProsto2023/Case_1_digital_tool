export interface CreateVacansySchema {
  email: string
  name: string
  text: string
  salary: number | null
  company_name: string
  busyness: number[]
  skills: number[]
  isLoading: boolean
  error: null | string
}
