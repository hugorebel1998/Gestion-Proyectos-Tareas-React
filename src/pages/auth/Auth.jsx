import { useState } from 'react';
import { LayoutPublic } from '@/layouts/LayoutPublic'
import { Login } from './Login'
import { Registro } from './Registro';


export const Auth = () => {

    const [isActive, setIsActive] = useState(false)

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <LayoutPublic>
            <div className='row justify-content-center'>
                <div className='col-md-9'>
                    <div className={`card-autentication ${isActive ? 'active' : ''}`}>
                        <div className="form-container sign-up">
                            <Login />
                        </div>
                        <div className="form-container sign-in">
                            <Registro />
                        </div>

                        <div className="toggle-container">
                            <div className="toggle">
                                <div className="toggle-panel toggle-left">
                                    <h1>Bienvenido de vuelta!</h1>
                                    <p>Ingrese sus datos personales para utilizar todas las funciones del sitio.</p>
                                    <button type='button' className="text-white btn btn-purple-transparent" onClick={handleLoginClick}>Registrar</button>
                                </div>
                                <div className="toggle-panel toggle-right">
                                    <h1>Hola, Amigo</h1>
                                    <p>Regístrese con sus datos personales para utilizar todas las funciones del sitio.</p>
                                    <button type='button' className="text-white btn btn-purple-transparent" onClick={handleRegisterClick} >Iniciar sesión</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </LayoutPublic>
    )
}
