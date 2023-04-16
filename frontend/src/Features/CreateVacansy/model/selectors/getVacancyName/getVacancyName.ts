import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getVacansyName = (state: StateSchema) => state?.createVacansySchema?.name
