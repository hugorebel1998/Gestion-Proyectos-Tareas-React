import { http } from "./http"

export default {
    mostrar(usuario_id) {
        return http.get(`usuarios/mostrar/${usuario_id}`);
    },

    actualizar(usuario_id, payload) {
        return http.put(`usuarios/${usuario_id}`, payload);
    }

}