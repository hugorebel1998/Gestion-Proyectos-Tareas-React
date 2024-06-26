import { useEffect } from "react";
import { useForm } from "react-hook-form"

export const Form = ({ initialValues = '', onSave, closedModal }) => {

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        mode: 'all',
    });


    useEffect(() => {
        if (initialValues) {
            Object.keys(initialValues).forEach((key) => {
                setValue(key, initialValues[key])
            })
        } else {
            reset();
        }

    }, [initialValues])

    const onSubmit = (data) => {
        onSave(data)
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-1">
                            <div className="col-md-12">
                                <label className="text-label">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className={`form-control form-control-sm ${errors.nombre ? 'is-invalid' : ''}`}
                                    {...register("nombre", { required: 'El campo nombre es requerido.' })}
                                />
                                {errors.nombre && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre.message}</span>}
                            </div>

                            <div className="col-md-4">
                                <label className="text-label">Estatus</label>
                                <select
                                    name="estatus"
                                    className={`form-select form-select-sm ${errors.estatus ? 'is-invalid' : ''}`}
                                    {...register("estatus", { required: 'El campo estatus es requerido.' })}
                                    defaultValue=''
                                >
                                    <option value=''>--Selecciona una opcion--</option>
                                    <option value='inicio'>Inicio</option>
                                    <option value='en_curso'>En curoso</option>
                                    <option value='pausa'>En pausa</option>
                                    <option value='completada'>Completada</option>
                                    <option value='cancelada'>Cancelado</option>

                                </select>
                                {errors.estatus && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.estatus.message}</span>}
                            </div>

                            <div className="col-md-4">
                                <label className="text-label">Fecha inicio</label>
                                <input
                                    type='date'
                                    name="fecha_inicio"
                                    className={`form-control form-control-sm ${errors.fecha_inicio ? 'is-invalid' : ''}`}
                                    {...register("fecha_inicio", { required: 'El campo fecha de inicio es requerido.' })}
                                />
                                {errors.fecha_inicio && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.fecha_inicio.message}</span>}
                            </div>

                            <div className="col-md-4">
                                <label className="text-label">Fecha termino</label>
                                <input
                                    type='date'
                                    name="fecha_termino"
                                    className={`form-control form-control-sm ${errors.fecha_inicio ? 'is-invalid' : ''}`}
                                    {...register("fecha_termino", { required: 'El campo fecha de termino es requerido.' })}
                                />
                                {errors.fecha_termino && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.fecha_termino.message}</span>}
                            </div>

                            <div className="col-md-12">
                                <label className="text-label">Descripción</label>
                                <textarea
                                    rows={2}
                                    name="descripcion"
                                    className={`form-control form-control-sm ${errors.descripcion ? 'is-invalid' : ''}`}
                                    {...register("descripcion", { required: 'El campo descripcion es requerido.' })}
                                />
                                {errors.descripcion && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.descripcion.message}</span>}
                            </div>
                        </div>
                        <div className='text-end mt-4'>
                            <button onClick={closedModal} type='button' className='btn btn-sm btn-danger m-1'>
                                Cancelar
                                <i className="fas fa-window-close m-1" />
                            </button>

                            <button type='submit' className='btn btn-sm btn-blue-dark m-1'>
                                Actualizar
                                <i className="fas fa-edit m-1" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
