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
    },

    tareasListar(proyecto_id) {
        return http.get(`proyectos/${proyecto_id}/tareas`);
    },

    tareasCrear(proyecto_id, payload) {
        return http.post(`proyectos/${proyecto_id}/tareas`, payload);
    },

    tareasActualizar(proyecto_id, tarea_id, payload) {
        return http.put(`proyectos/${proyecto_id}/tareas/${tarea_id}`, payload);
    },

    tareasEliminar(proyecto_id, tarea_id) {
        return http.delete(`proyectos/${proyecto_id}/tareas/${tarea_id}`);
    }
}
