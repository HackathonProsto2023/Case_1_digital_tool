
import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from "@reduxjs/toolkit"
import { getRegistrationPassword } from './getRegistrationPassword';

describe('getRegistrationPassword.test', () => {
    test('should return email', () => {
        const state: DeepPartial<StateSchema> = {
            registerUserSchema: {
                password: '123'
            }
        }
        expect(getRegistrationPassword(state as StateSchema)).toEqual('123')
    })
    test('should work with empty state', () => {
        const state = {}
        expect(getRegistrationPassword(state as StateSchema)).toEqual('')
    })
})