import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getLoginEmail = (state: StateSchema) => state.loginStateSchema?.email || ''
