import React from 'react'
import { formtDate, getStatus } from '@/helpers/helpers'

export const Listar = ({ data, handleEditTarea, handleDeleteTarea }) => {
    return (
        <table className="table table-sm table-striped table-hover">
            <thead>
                <tr className='bg-blue-dark'>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estatus</th>
                    <th scope="col">Fecha inicio</th>
                    <th scope="col">Fecha termino</th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody >
                {
                    data.map((tarea, key) =>
                        <tr key={tarea.id}>
                            <td>{key + 1}</td>
                            <td>{tarea.nombre}</td>
                            <td>{tarea.descripcion}</td>
                            <td>{getStatus(tarea.estatus)}</td>
                            <td>{formtDate(tarea.fecha_inicio)}</td>
                            <td>{formtDate(tarea.fecha_termino)}</td>
                            <td>
                                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-sm btn-blue-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-cogs m-1" />
                                            Acciones
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button onClick={() => handleEditTarea(tarea)} className="dropdown-item">
                                                    <i className="fa fa-edit m-1" />
                                                    Editar tarea
                                                </button>
                                            </li>

                                            {/* <li>
                                                <Link to={`/proyecto-tareas/${proyecto.id}`} style={{ textDecoration: 'none' }}>
                                                    <button className="dropdown-item">
                                                        <i className="fas fa-tags m-1" />
                                                        Gestión comentarios
                                                    </button>
                                                </Link>
                                            </li> */}
                                            <li>
                                                <button onClick={() => handleDeleteTarea(tarea)} className="dropdown-item">
                                                    <i className="fas fa-trash-alt m-1" />
                                                    Eliminar tarea
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
