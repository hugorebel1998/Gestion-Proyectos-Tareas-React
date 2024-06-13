import { useEffect, useState } from 'react';
import { useTitle } from '@/hooks/useTitle';

import usuarioAPI from '@/services/usuario.api'
import proyectosAPI from '@/services/proyectos.api';

import { Spinner } from '@/components';
import { Modal } from '@/components';

import { LayoutPrivate } from '@/layouts'
import { Listar } from '@/pages/proyectos/Listar';
import { Form as Formulario } from '@/pages/proyectos/Form';

import { toast, Flip } from 'react-toastify';
import Swal from "sweetalert2";


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
      setTimeout(() => setIsLoading(false), 400);
    }
  }


  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleClosedModal = () => {
    setOpenModal(false);
  }

  const handleNuevoProyecto = () => {
    handleOpenModal();
    setProyecto(null)
  };

  const handleEditProyecto = (proyecto = null) => {
    setProyecto(proyecto)
    handleOpenModal();
  }

  const handleSave = async (proyecto) => {
    setIsLoading(true);
    try {
      if (proyecto.id) {
        await proyectosAPI.actualizar(proyecto.id, proyecto)
        toast.info('Proyecto actualizado con éxito', {
          theme: 'dark',
          transition: Flip,
        })
      }
      else {
        await proyectosAPI.crear(proyecto)
        toast.success('Nuevo proyecto creado', {
          theme: 'dark',
          transition: Flip,
        })
      }
      setOpenModal(false);
      handleProyectos();
    } finally {

      setIsLoading(false);
    }
  }

  const handleDeleteProyecto = async (proyecto) => {
    setIsLoading(true);
    try {
      Swal.fire({
        title: 'Estas seguro',
        text: `Estas apunto de eliminar el proyecto ${proyecto.nombre}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#012f75',
        cancelButtonColor: '#A50A00',
        confirmButtonText: 'Si continuar',
        cancelButtonText: 'Cancelar',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await proyectosAPI.eliminar(proyecto.id);
          handleProyectos();
          toast.success('Proyecto eliminado con éxito', {
            theme: 'dark',
            transition: Flip,
          })
        }
      });
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <LayoutPrivate>
      {isLoading ? (<Spinner loading={isLoading} title='Cargando proyectos' />)
        : (
          <>
            <div className="h1 text-center mt-5">Proyectos</div>
            <div className='row justify-content-center'>
              <div className='col-md-10'>
                <div className='text-start'>
                  <button onClick={handleProyectos} className='btn btn-pink m-2'>
                    <i className="fas fa-edit" />
                    Actualizar
                  </button>
                  <button onClick={handleNuevoProyecto} className='btn btn-blue-light m-2' >
                    <i className="fas fa-plus" />
                    Nuevo
                  </button>

                </div>
                <Listar data={proyectos} handleEditProyecto={handleEditProyecto} handleDeleteProyecto={handleDeleteProyecto} />
              </div>
            </div>
          </>
        )
      }

      <Modal
        openModal={openModal}
        closedModal={handleClosedModal}
        title="Actualizar datos proyecto"
        children={<Formulario initialValues={proyecto || {}} onSave={handleSave}  closedModal={handleClosedModal} />}
      />
    </LayoutPrivate>
  )
}
