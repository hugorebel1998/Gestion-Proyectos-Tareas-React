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