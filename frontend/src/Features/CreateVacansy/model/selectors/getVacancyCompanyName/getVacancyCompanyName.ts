import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getVacansyCompanyName = (state: StateSchema) => state?.createVacansySchema?.company_name
