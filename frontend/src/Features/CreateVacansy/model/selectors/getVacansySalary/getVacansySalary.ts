import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getVacansySalary = (state: StateSchema) => state?.createVacansySchema?.salary
