import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getResumeLastName = (state: StateSchema) => state?.createResumeSchema?.lastname
