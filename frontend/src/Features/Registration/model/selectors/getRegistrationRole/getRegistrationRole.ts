import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationRole = (state: StateSchema) => state?.registerUserSchema?.role
