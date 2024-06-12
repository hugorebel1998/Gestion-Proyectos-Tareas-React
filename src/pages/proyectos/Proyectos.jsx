import { useEffect, useState } from 'react';
import { useTitle } from '@/hooks/useTitle';

import usuarioAPI from '@/services/usuario.api'
import proyectosAPI from '@/services/proyectos.api';

import { LayoutPrivate } from '@/layouts'
import { Listar } from './Listar';
import { Form as Formulario } from './Form';

import { Spinner } from '@/components';
import { Modal } from '@/components';

import { toast, Flip } from 'react-toastify';




export const Proyectos = () => {

  useTitle('Proyectos');

  const [proyectos, setProyectos] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const [openModal, setOpenModal] = useState(false);
  const [proyecto, setProyecto] = useState(null);

  const userStore = localStorage.getItem('user');

  const { user } = JSON.parse(userStore)


  useEffect(() => {
    handleProyectos();
  }, [])


  const handleProyectos = async () => {
    setIsLoading(true);
    try {
      const response = await usuarioAPI.proyectos(user.id);
      setProyectos(response)
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  }


  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleClosedModal = () => {
    setOpenModal(false);
  }


  const handleEditProyecto = (proyecto) => {
    setProyecto(proyecto)
    handleOpenModal();
  }

  const handleSave = async (proyecto) => {
    setIsLoading(true);
    try {
      await proyectosAPI.actualizar(proyecto.id, proyecto)
      handleProyectos();
      setOpenModal(false);
      toast.info('Datos actualizados', {
        theme: 'dark',
        transition: Flip,
      })

    } finally {
      setIsLoading(false);
    }

  }


  return (
    <LayoutPrivate>
      {isLoading ? (<Spinner loading={isLoading} title='Cargando proyectos' />)
        : (
          <>
            <div className="h1 text-center text-white">Proyectos</div>
            <div className='row justify-content-center'>
              <div className='col-md-10'>
                <Listar data={proyectos} handleEditProyecto={handleEditProyecto} />

              </div>

            </div>
          </>
        )
      }

      <Modal
        openModal={openModal}
        closedModal={handleClosedModal}
        title="Actualizar datos proyecto"
        children={<Formulario initialValues={proyecto} onSave={handleSave} />}
      />
    </LayoutPrivate>
  )
}
