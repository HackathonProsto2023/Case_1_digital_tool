import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from "@reduxjs/toolkit"
import { getRegistrationLoading } from './getRegistrationLoading';

describe('getRegistrationLoading.test', () => {
    test('should return error satte', () => {
        const state: DeepPartial<StateSchema> = {
            registerUserSchema: {
                isLoading: true
            }
        }
        expect(getRegistrationLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state = {}
        expect(getRegistrationLoading(state as StateSchema)).toEqual(false)
    })
})