import { useState } from "react";
import { useForm } from "react-hook-form"
import { ClipLoader } from "react-spinners";


export const Form = ({ initialValues, onSave }) => {


    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        defaultValues: initialValues

    });

    const onSubmit = (data) => {
        onSave(data)
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-3 mt-2">
                            <div className="col-md-4">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                    {...register("nombre", { required: 'El campo nombre es requerido.' })}
                                />
                                {errors.nombre && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre.message}</span>}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Apellido paterno</label>
                                <input
                                    type="text"
                                    name="paterno"
                                    className={`form-control ${errors.paterno ? 'is-invalid' : ''}`}
                                    {...register("paterno", { required: 'El campo apellido paterno es requerido.' })}
                                />
                                {errors.paterno && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.paterno.message}</span>}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Apellido materno</label>
                                <input
                                    type="text"
                                    name="materno"
                                    className={`form-control ${errors.materno ? 'is-invalid' : ''}`}
                                    {...register("materno", { required: 'El campo apellido materno es requerido.' })}
                                />
                                {errors.materno && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.materno.message}</span>}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Nombre de usuario</label>
                                <input
                                    type="text"
                                    name="username"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    {...register("username", { required: 'El campo nombre usuario es requerido.' })}
                                />
                                {errors.username && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.username.message}</span>}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    {...register("email", { required: 'El campo correo electrónico es requerido.' })}
                                />
                                {errors.email && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.email.message}</span>}
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
