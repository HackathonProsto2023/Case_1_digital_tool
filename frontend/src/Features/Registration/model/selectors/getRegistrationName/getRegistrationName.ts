import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationName = (state: StateSchema) => state?.registerUserSchema?.name
