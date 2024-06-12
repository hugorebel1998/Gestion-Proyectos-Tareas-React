import React, { useState } from 'react'
import { formtDate } from '@/helpers/helpers'

export const Listar = ({ data, handleEditProyecto }) => {

    return (
        <>
            <table className="table">
                <thead>
                    <tr className="text-white">
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
                        data.map((proyecto, key) =>
                            <tr className='text-white' key={proyecto.id}>
                                <td>{key + 1}</td>
                                <td>{proyecto.nombre}</td>
                                <td>{proyecto.descripcion}</td>
                                <td>{proyecto.estatus}</td>
                                <td>{formtDate(proyecto.fecha_inicio)}</td>
                                <td>{formtDate(proyecto.fecha_termino)}</td>
                                <td>
                                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                        <div className="btn-group" role="group">
                                            <button type="button" className="btn btn-sm btn-blue-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fas fa-cogs m-1" />
                                                Acciones
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <button onClick={() => handleEditProyecto(proyecto)} className="dropdown-item">
                                                        <i className="fa fa-edit" />
                                                        Editar proyecto
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

            {/* <Modal
                openModal={openModal}
                closedModal={handleClosedModal}
                title="Actualizar datos"
                children={<Formulario initialValues='' />}
            /> */}
        </>
    )
}
