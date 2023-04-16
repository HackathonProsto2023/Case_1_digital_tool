import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getResumeEmail = (state: StateSchema) => state?.createResumeSchema?.email || ''
