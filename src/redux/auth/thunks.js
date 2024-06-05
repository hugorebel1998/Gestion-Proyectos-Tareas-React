import { isLoginAuth, isLogoutAuth, isStatusAuth } from "."
import { singLogin } from "./actions";

export const startLogin = (payload) => {

    return async (dispatch) => {

        dispatch(isStatusAuth());

        const response = await singLogin(payload);

        if (!response.ok)
            return dispatch(isLogoutAuth());

        dispatch(isLoginAuth(response))
    }
}

export const startLogout = () => {
    return async (dispatch) => {

        const userStore = localStorage.getItem('user');

        if (userStore) {
            localStorage.removeItem('user');
            dispatch(isLogoutAuth());
        }
    }
}