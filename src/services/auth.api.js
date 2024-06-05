import { http } from "./http"

export default {
    login(payload) {
        return http.post('auth/login', payload)
    },
}