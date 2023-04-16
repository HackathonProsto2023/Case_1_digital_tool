import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationPassword = (state: StateSchema) => state?.registerUserSchema?.password || ''
