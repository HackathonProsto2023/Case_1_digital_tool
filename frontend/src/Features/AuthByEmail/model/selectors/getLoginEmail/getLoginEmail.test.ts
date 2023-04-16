import { getLoginEmail } from './getLoginEmail';
import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from "@reduxjs/toolkit"

describe('getLoginEmail.test', () => {
    test('should return email', () => {
        const state: DeepPartial<StateSchema> = {
            loginStateSchema: {
                email: 'testing@mail.ru'
            }
        }
        expect(getLoginEmail(state as StateSchema)).toEqual('testing@mail.ru')
    })
    test('should work with empty state', () => {
        const state = {}
        expect(getLoginEmail(state as StateSchema)).toEqual('')
    })
})