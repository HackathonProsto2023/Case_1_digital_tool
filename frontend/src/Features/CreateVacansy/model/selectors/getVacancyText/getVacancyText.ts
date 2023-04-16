import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getVacansyText = (state: StateSchema) => state?.createVacansySchema?.text
