import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationLastName = (state: StateSchema) => state?.registerUserSchema?.lastname
