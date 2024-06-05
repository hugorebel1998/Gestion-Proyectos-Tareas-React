import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estatus: 'no-autenticado',
        access_token: null,
        user: null,
    },
    reducers: {
        isStatusAuth: (state) => {
            state.estatus = 'en-espera';
        },

        isLoginAuth: (state, { payload }) => {
            state.estatus = 'autenticado';
            state.access_token = payload.access_token;
            state.user = payload.user;
        },
        isLogoutAuth: (state) => {
            state.estatus = 'no-autenticado';
            state.access_token = null;
            state.user = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { isStatusAuth, isLoginAuth, isLogoutAuth } = authSlice.actions;