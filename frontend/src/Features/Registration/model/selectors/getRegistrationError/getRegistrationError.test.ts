import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from "@reduxjs/toolkit"
import { getRegistrationError } from './getRegistrationError';

describe('getRegistrationError.test', () => {
    test('should return error satte', () => {
        const state: DeepPartial<StateSchema> = {
            registerUserSchema: {
                error: 'something went wrong'
            }
        }
        expect(getRegistrationError(state as StateSchema)).toEqual('something went wrong')
    })
    test('should work with empty state', () => {
        const state = {}
        expect(getRegistrationError(state as StateSchema)).toEqual(null)
    })
})