import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getVacansyBusyness = (state: StateSchema) => state?.createVacansySchema?.busyness
