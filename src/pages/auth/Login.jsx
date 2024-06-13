import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogin } from '@/redux/auth/thunks';
import ClipLoader from "react-spinners/ClipLoader";

import { LayoutPublic } from '@/layouts'
import logo from '@/assets/react.svg';
import { useTitle } from '@/hooks';


export const Login = () => {

    useTitle('Login');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all'
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await dispatch(startLogin(data));
            navigate('/');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* <div className='px-5'> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row gy-3 mt-2">
                        <div className="col-md-12">
                            <label className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
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
                    <div className='text-center mt-4'>
                        {loading ? <ClipLoader size={40} color={"#850068"} loading={loading} /> : <button className='btn btn-purple'> Iniciar sesión</button>}
                    </div>
                   
                </form>
            {/* </div> */}

        </>
    )
}
