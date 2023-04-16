import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationEmail = (state: StateSchema) => state.registerUserSchema?.email || ''
