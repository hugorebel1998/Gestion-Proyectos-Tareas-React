import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '@/assets/react.svg';
import { useDispatch } from 'react-redux';
import { startLogout } from '@/redux/auth';

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(startLogout());

        navigate('/autenticacion')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-navbar-transparent">
            <div className="container">
                <Link to='/'>
                    <img src={logo} alt="Logo" width={50} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" style={({ isActive }) => ({ color: isActive ? "#b3018c" : "#512da8", })}>
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/perfil' className="nav-link" style={({ isActive }) => ({ color: isActive ? "#b3018c" : "#512da8", })}>
                                Perfil
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/proyectos' className="nav-link" style={({ isActive }) => ({ color: isActive ? "#b3018c" : "#512da8", })}>
                                Proyectos
                            </NavLink>
                        </li>

                        {/* <li className="nav-item">
                            <NavLink to='/tareas' className="nav-link" style={({ isActive }) => ({ color: isActive ? "#b3018c" : "#512da8", })}>
                                Tareas
                            </NavLink>
                        </li>*/}

                        <li className="nav-item">
                            <NavLink to='/calendario' className="nav-link" style={({ isActive }) => ({ color: isActive ? "#b3018c" : "#512da8", })}>
                                Calendario
                            </NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text text-white">
                        <button className='btn btn-pink' onClick={handleLogout}>
                            Cerrar sesión
                        </button>
                    </span>
                </div>
            </div>
        </nav>
    )
}
