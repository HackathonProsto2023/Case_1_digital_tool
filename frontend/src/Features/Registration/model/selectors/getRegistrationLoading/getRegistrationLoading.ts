import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationLoading = (state: StateSchema) => state?.registerUserSchema?.isLoading || false
