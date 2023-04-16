import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getUserAccessToken = (state: StateSchema) => state?.userStateSchema?.token
