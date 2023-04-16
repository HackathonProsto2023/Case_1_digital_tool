import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationError = (state: StateSchema) => state?.registerUserSchema?.error || null
