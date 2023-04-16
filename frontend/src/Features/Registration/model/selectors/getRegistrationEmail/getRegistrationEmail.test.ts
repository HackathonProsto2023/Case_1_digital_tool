import { getRegistrationEmail } from './getRegistrationEmail';
import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from "@reduxjs/toolkit"

describe('getRegistrationEmail.test', () => {
    test('should return email', () => {
        const state: DeepPartial<StateSchema> = {
            registerUserSchema: {
                email: 'testing@mail.ru'
            }
        }
        expect(getRegistrationEmail(state as StateSchema)).toEqual('testing@mail.ru')
    })
    test('should work with empty state', () => {
        const state = {}
        expect(getRegistrationEmail(state as StateSchema)).toEqual('')
    })
})