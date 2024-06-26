import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { LayoutPublic } from '@/layouts/LayoutPublic'
import logo from '@/assets/react.svg';
import { useTitle } from '@/hooks';

export const Registro = () => {

    useTitle('Registro');

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordTwo, setShowPasswordTwo] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'all'
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleShowPasswordTwo = () => {
        setShowPasswordTwo(!showPasswordTwo);
    }

    const onSubmit = (data) => {
        console.log({ data })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row gy-2">
                <div className="col-md-12">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                        {...register("nombre", { required: 'El campo nombre es requerido.' })}
                    />
                    {errors.nombre && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre.message}</span>}

                </div>

                <div className="col-md-12">
                    <label className="form-label">Apellido paterno</label>
                    <input
                        type="text"
                        name="paterno"
                        className={`form-control ${errors.paterno ? 'is-invalid' : ''}`}
                        {...register("paterno", { required: 'El campo apellido paterno es requerido.' })}
                    />
                    {errors.paterno && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.paterno.message}</span>}
                </div>

                <div className="col-md-12">
                    <label className="form-label">Apellido materno</label>
                    <input
                        type="text"
                        name="materno"
                        className={`form-control ${errors.materno ? 'is-invalid' : ''}`}
                        {...register("materno", { required: 'El campo apellido materno es requerido.' })}
                    />
                    {errors.materno && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.materno.message}</span>}

                </div>

                <div className="col-md-12">
                    <label className="form-label">Nombre usuario</label>
                    <input
                        type="text"
                        name="username"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        {...register("username", { required: 'El campo nombre usuario es requerido.' })}
                    />
                    {errors.username && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.username.message}</span>}
                </div>

                <div className="col-md-12">
                    <label className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        name='email'
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        {...register("email", { required: 'El campo correo es requerido.' })}
                    />
                    {errors.email && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.email.message}</span>}
                </div>


                <div className="col-md-12">
                    <label className="form-label">Contraseña</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            {...register("password", { required: 'El campo comtraseña es requerido.' })} />
                        <button type="button" onClick={handleShowPassword} className="input-group-text">
                            {showPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                        </button>
                    </div>
                    {errors.password && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.password.message}</span>}
                </div>
            </div>
            <div className="text-center mt-3">
                <button type="submit" className='btn btn-purple'>
                    Crear cuenta
                    <i className="fa fa-sign-in-alt mx-1"></i>
                </button>
            </div>
        </form>
    )
}
