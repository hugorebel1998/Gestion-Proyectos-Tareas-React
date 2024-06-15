import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle';

import proyectosApi from '@/services/proyectos.api';

import { Modal } from '@/components/Modal';
import { Spinner } from '@/components';

import { LayoutPrivate } from '@/layouts'
import { Listar } from '@/pages/tareas/Listar';
import { Form as Formulario } from '@/pages/tareas/Form';

import { toast, Flip } from 'react-toastify';
import Swal from "sweetalert2";


export const Tareas = () => {

  useTitle('Tareas');

  const { proyectoId } = useParams();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tareas, seTtareas] = useState([]);
  const [tarea, seTtarea] = useState(null);


  useEffect(() => {
    handleTareas();
  }, [])


  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleClosedModal = () => {
    setOpenModal(false);
  }

  const handleTareas = async () => {
    setIsLoading(true)
    try {
      const response = await proyectosApi.tareasListar(proyectoId);
      seTtareas(response);
    } finally {
      setTimeout(() => setIsLoading(false), 350);
    }
  }

  const handleCalendario = () => {
    navigate('/calendario', { state: { tareas } });
  }

  const handleNuevaTarea = () => {
    seTtarea(null)
    handleOpenModal();
  }

  const handleEditTarea = (tarea = null) => {
    seTtarea(tarea)
    handleOpenModal();
  }

  const handleSave = async (tarea) => {
    setIsLoading(true);
    try {

      if (tarea.id) {
        await proyectosApi.tareasActualizar(proyectoId, tarea.id, tarea)
        toast.info('Tarea actualizada con éxito', {
          theme: 'dark',
          transition: Flip,
        })

      } else {
        await proyectosApi.tareasCrear(proyectoId, tarea)
        toast.success('Nueva tarea creada', {
          theme: 'dark',
          transition: Flip,
        })
      }
      handleClosedModal();
      handleTareas();
    } finally {
      setIsLoading(false);
    }
  }


  const handleDeleteTarea = (tarea) => {
    setIsLoading(true);
    try {
      Swal.fire({
        title: 'Estas seguro',
        html: `Estas apunto de eliminar la tarea <b>${tarea.nombre}</b>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#012f75',
        cancelButtonColor: '#A50A00',
        confirmButtonText: 'Si continuar',
        cancelButtonText: 'Cancelar',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await proyectosApi.tareasEliminar(proyectoId, tarea.id);
          handleTareas();
          toast.success('Tarea eliminada con éxito', {
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

      {
        isLoading ? (<Spinner loading={isLoading} title='Cargando tareas' />) :
          (
            <>
              <div className='h1 text-center m-4'>Tareas</div>
              <div className='row justify-content-center'>
                <div className='col-md-11'>
                  <div className='text-start'>
                    <button onClick={handleTareas} className='btn btn-pink m-2'>
                      <i className="fas fa-edit" />
                      Actualizar
                    </button>
                    <button onClick={handleNuevaTarea} className='btn btn-blue-light m-2' >
                      <i className="fas fa-plus" />
                      Nuevo
                    </button>

                    <button onClick={() => { handleCalendario() }} className='btn btn-blue-light m-2' >
                      Calendario
                    </button>
                  </div>
                  <Listar data={tareas} handleEditTarea={handleEditTarea} handleDeleteTarea={handleDeleteTarea} />
                </div>

              </div>
            </>
          )
      }
      <Modal
        openModal={openModal}
        closedModal={handleClosedModal}
        title={tarea ? 'Actualización de información' : 'Nueva tarea'}
        children={<Formulario initialValues={tarea || {}} onSave={handleSave} />}
      />

    </LayoutPrivate>
  )
}
