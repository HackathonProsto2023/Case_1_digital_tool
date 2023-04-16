import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationLoginName = (state: StateSchema) => state?.registerUserSchema?.login
