import React, { useEffect, useState } from 'react'
import { LayoutPrivate } from '@/layouts'
import { capitalizeWord, capitalize } from '@/helpers/helpers';
import { toast, Flip } from 'react-toastify';


import usuarioAPI from '@/services/usuario.api';

import { Modal } from '@/components/Modal';
import { Form as Formulario } from './Form';
import { Spinner } from '@/components';
import { useTitle } from '@/hooks';


export const Perfil = () => {

    useTitle('Mi perfil');


    const [openModal, setOpenModal] = useState(false);
    const [usuario, setUsuario] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const userStore = localStorage.getItem('user');

    const { user } = JSON.parse(userStore)

    const handleUsuario = async () => {
        setIsLoading(true)
        try {
            const response = await usuarioAPI.mostrar(user.id);
            setUsuario(response);
        } finally {
            setTimeout(() => setIsLoading(false), 900);
        }

    }

    useEffect(() => {
        handleUsuario()
    }, [])



    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleClosedModal = () => {
        setOpenModal(false);
    }

    const handleSave = async (data) => {
        setIsLoading(true)
        try {
            const response = await usuarioAPI.actualizar(data.id, data);
            setUsuario(response)
            setOpenModal(false);
            toast.success('Datos actualizados', {
                theme: 'dark',
                transition: Flip,
            })
        } finally {
            setTimeout(() => setIsLoading(false), 900);

        }
    }

    if (!usuario)
        return <><Spinner loading={isLoading} title='Cargando ...' /></>

    return (
        <LayoutPrivate>
            {isLoading ? (<Spinner loading={isLoading} title='Actualizando información' />)
                : (
                    <>
                        <div className='h1 text-center text-white'>Mi perfil</div>
                        <div className='row justify-content-center'>
                            <div className='col-md-6'>
                                <div className='card card-transparent'>
                                    <div className='card-body'>
                                        <div className='row gy-2'>
                                            <div className='col-md-12'>
                                                <strong>Nombre completo:</strong>  {capitalizeWord(usuario.nombre_completo)}
                                            </div>

                                            <div className='col-md-12'>
                                                <strong>Nombre de usuario:</strong>  {usuario.username}
                                            </div>

                                            <div className='col-md-12'>
                                                <strong>Correo electrónico:</strong>  {usuario.email}
                                            </div>

                                            <div className='col-md-12'>
                                                Salir  <strong>Estatus:</strong>
                                                {usuario.estatus == 'activo'
                                                    ? <span className="badge text-bg-success">{capitalize(usuario.estatus)}</span>
                                                    : <span className="badge text-bg-warning">{capitalize(usuario.estatus)}</span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-end m-2'>
                                        <button onClick={handleOpenModal} className='btn btn-blue-dark'>
                                            <i className="fas fa-edit m-1"></i>
                                            Editar información
                                        </button>
                                    </div>
                                    <div className='mt-2'>
                                        <Modal
                                            openModal={openModal}
                                            children={<Formulario initialValues={usuario} onSave={handleSave} />}
                                            closedModal={handleClosedModal}
                                            title="Actualizar datos" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </LayoutPrivate>
    )
}
