import { useEffect } from "react";
import { useForm } from "react-hook-form"


export const Form = ({ initialValues = '', onSave }) => {

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
                        <div className="row gy-3 mt-2">
                            <div className="col-md-6">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                    {...register("nombre", { required: 'El campo nombre es requerido.' })}
                                />
                                {errors.nombre && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre.message}</span>}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Estatus</label>
                                <select
                                    name="estatus"
                                    className={`form-select ${errors.estatus ? 'is-invalid' : ''}`}
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
                                {errors.paterno && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.paterno.message}</span>}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Fecha inicio</label>
                                <input
                                    type='date'
                                    name="fecha_inicio"
                                    className={`form-control ${errors.fecha_inicio ? 'is-invalid' : ''}`}
                                    {...register("fecha_inicio", { required: 'El campo fecha de inicio es requerido.' })}
                                />
                                {errors.fecha_inicio && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.fecha_inicio.message}</span>}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Fecha termino</label>
                                <input
                                    type='date'
                                    name="fecha_termino"
                                    className={`form-control ${errors.fecha_inicio ? 'is-invalid' : ''}`}
                                    {...register("fecha_termino", { required: 'El campo fecha de termino es requerido.' })}
                                />
                                {errors.fecha_termino && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.fecha_termino.message}</span>}
                            </div>

                            <div className="col-md-12">
                                <label className="form-label">Descripción</label>
                                <textarea
                                    rows={3}
                                    name="descripcion"
                                    className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
                                    {...register("descripcion", { required: 'El campo descripcion es requerido.' })}
                                />
                                {errors.descripcion && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.descripcion.message}</span>}
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <button type='submit' className='btn btn-blue-dark'>
                                Actualizar
                                <i className="fas fa-edit m-1"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
