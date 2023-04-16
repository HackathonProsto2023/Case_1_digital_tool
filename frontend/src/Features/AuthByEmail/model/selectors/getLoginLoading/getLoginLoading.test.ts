import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from "@reduxjs/toolkit"
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test', () => {
    test('should return error satte', () => {
        const state: DeepPartial<StateSchema> = {
            loginStateSchema: {
                isLoading: true
            }
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state = {}
        expect(getLoginLoading(state as StateSchema)).toEqual(false)
    })
})