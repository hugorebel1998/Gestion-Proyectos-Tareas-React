import { formtDate } from '@/helpers/helpers'
import { Link } from 'react-router-dom'

export const Listar = ({ data, handleEditProyecto, handleDeleteProyecto }) => {

    return (
        <>
            <table className="table  table-striped table-hover">
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
                        data.map((proyecto, key) =>
                            <tr key={proyecto.id}>
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
                                                        <i className="fa fa-edit m-1" />
                                                        Editar proyecto
                                                    </button>
                                                </li>

                                                <li>
                                                    <Link to={`/proyecto-tareas/${proyecto.id}`} style={{ textDecoration: 'none'}}>
                                                        <button className="dropdown-item">
                                                            <i className="fas fa-tags m-1" />
                                                            Gestión tareas
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleDeleteProyecto(proyecto)} className="dropdown-item">
                                                        <i className="fas fa-trash-alt m-1" />
                                                        Eliminar proyecto
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
        </>
    )
}
