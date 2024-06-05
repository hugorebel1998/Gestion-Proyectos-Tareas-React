import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogin } from '@/redux/auth/thunks';


import { LayoutPublic } from '@/layouts'
import logo from '@/assets/react.svg';


export const Login = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all'
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit =  async(data) => {
        try {
            await dispatch(startLogin(data));
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <LayoutPublic>
            <div className='text-center py-4'>
                <img src={logo} alt="Logo" width="50" />
            </div>
            <div className="card card-transparent">
                <div className="card-body">
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
                            <button className='btn btn-blue-dark'> Iniciar sesión</button>
                        </div>
                        <div className='text-end mt-4'>
                            <Link to='/registro'>Crear una nueva cuenta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutPublic>
    )
}
