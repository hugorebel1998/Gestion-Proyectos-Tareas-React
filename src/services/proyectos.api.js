import { http } from "./http"

export default {
    crear(payload) {
        return http.post('proyectos', payload);
    },

    actualizar(proyecto_id, payload) {
        return http.put(`proyectos/${proyecto_id}`, payload);
    },

    eliminar(proyecto_id) {
        return http.delete(`proyectos/${proyecto_id}`);
    }
}