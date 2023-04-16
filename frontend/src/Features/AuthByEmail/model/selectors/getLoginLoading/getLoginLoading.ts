import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getLoginLoading = (state: StateSchema) => state?.loginStateSchema?.isLoading || false
