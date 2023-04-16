import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getResumeName = (state: StateSchema) => state?.createResumeSchema?.name
