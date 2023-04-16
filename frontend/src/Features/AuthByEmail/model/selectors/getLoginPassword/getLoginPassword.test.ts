
import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from "@reduxjs/toolkit"
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return email', () => {
        const state: DeepPartial<StateSchema> = {
            loginStateSchema: {
                password: '123'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })
    test('should work with empty state', () => {
        const state = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})