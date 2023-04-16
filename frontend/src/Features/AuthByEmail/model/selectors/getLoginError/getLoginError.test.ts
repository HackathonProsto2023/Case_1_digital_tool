import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from "@reduxjs/toolkit"
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error satte', () => {
        const state: DeepPartial<StateSchema> = {
            loginStateSchema: {
                error: 'something went wrong'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('something went wrong')
    })
    test('should work with empty state', () => {
        const state = {}
        expect(getLoginError(state as StateSchema)).toEqual(null)
    })
})