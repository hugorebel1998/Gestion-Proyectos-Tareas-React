import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker, { registerLocale } from "react-datepicker";


import { es } from 'date-fns/locale/es';
registerLocale('es', es)


export const Form = ({ initialValues = '', onSave }) => {

    const { control, watch, register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        mode: 'all',
    });

    const [fechaInicio, setFechaInicio] = useState(null);

    const convertToDate = (value) => {
        return typeof value == 'string' ? new Date(value) : value;
    };


    useEffect(() => {
        if (initialValues) {
            Object.keys(initialValues).forEach((key) => {
                if (key.includes('fecha')) {
                    setValue(key, convertToDate(initialValues[key]));
                } else {
                    setValue(key, initialValues[key]);
                }
            });
        } else {
            reset();
        }
    }, [initialValues, setValue])


    const onSubmit = (data) => {
        onSave(data);
    }

    const handleOnChange = (field, date) => {
        field.onChange(date)
    }

    const fechaInicioWatch = watch('fecha_inicio', fechaInicio);


    return (
        <div className="row justify-content-center">
            <div className="col-md-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row gy-1">
                        <div className="col-md-6">
                            <label className="text-label">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                className={`form-control form-control-sm ${errors.nombre ? 'is-invalid' : ''}`}
                                {...register("nombre", { required: 'El campo nombre es requerido.' })}
                            />
                            {errors.nombre && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre.message}</span>}
                        </div>

                        <div className="col-md-6">
                            <label className="text-label">Prioridad</label>
                            <select
                                name="prioridad"
                                className={`form-select form-select-sm ${errors.prioridad ? 'is-invalid' : ''}`}
                                {...register("prioridad", { required: 'El campo prioridad es requerido.' })}
                                defaultValue={initialValues.prioridad || ''}
                            >
                                <option value=''>--Selecciona una opcion--</option>
                                <option value='baja'>Baja</option>
                                <option value='media'>Medio</option>
                                <option value='alta'>Alta</option>
                            </select>
                            {errors.prioridad && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.prioridad.message}</span>}
                        </div>

                        <div className="col-md-4">
                            <label className="text-label">Estatus</label>
                            <select
                                name="estatus"
                                className={`form-select form-select-sm ${errors.estatus ? 'is-invalid' : ''}`}
                                {...register("estatus", { required: 'El campo estatus es requerido.' })}
                                defaultValue={initialValues.estatus || ''}
                            >
                                <option value=''>--Selecciona una opcion--</option>
                                <option value='inicio'>Inicio</option>
                                <option value='en_curso'>En curoso</option>
                                <option value='pausa'>En pausa</option>
                                <option value='completada'>Completada</option>
                                <option value='cancelada'>Cancelado</option>

                            </select>
                            {errors.estatus && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.estatus.message}</span>}
                        </div>

                        <div className="col-md-4">
                            <label className="text-label">Fecha inicio</label>
                            <Controller
                                control={control}
                                name="fecha_inicio"
                                rules={{ required: 'El campo fecha de inicio es requerido.' }}
                                render={({ field }) => (
                                    <DatePicker
                                        locale='es'
                                        showIcon
                                        icon="fas fa-calendar-week"
                                        className={`form-control form-control-sm ${errors.fecha_inicio ? 'is-invalid' : ''}`}
                                        selected={field.value}
                                        onChange={(date) => handleOnChange(field, date)}
                                        dateFormat='Pp'
                                        showTimeSelect
                                        timeCaption='Hora'

                                    />
                                )}
                            />
                            {errors.fecha_inicio && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.fecha_inicio.message}</span>}
                        </div>

                        <div className="col-md-4">
                            <label className="text-label">Fecha termino</label>
                            <Controller
                                control={control}
                                name="fecha_termino"
                                rules={{ required: 'El campo fecha de termino es requerido.' }}
                                render={({ field }) => (
                                    <DatePicker
                                        locale='es'
                                        showIcon
                                        icon="fas fa-calendar-week"
                                        className={`form-control form-control-sm ${errors.fecha_termino ? 'is-invalid' : ''}`}
                                        minDate={fechaInicioWatch}
                                        selected={field.value}
                                        onChange={(date) => { field.onChange(date) }}
                                        dateFormat='Pp'
                                        showTimeSelect
                                        timeCaption='Hora'
                                    />
                                )}
                            />
                            {errors.fecha_termino && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.fecha_termino.message}</span>}
                        </div>

                        <div className="col-md-12">
                            <label className="text-label">Descripción</label>
                            <textarea
                                rows={2}
                                name="descripcion"
                                className={`form-control form-control-sm ${errors.descripcion ? 'is-invalid' : ''}`}
                                {...register("descripcion", { required: 'El campo descripcion es requerido.' })}
                            />
                            {errors.descripcion && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.descripcion.message}</span>}
                        </div>
                    </div>
                    <div className='text-end mt-4'>

                        <button type='submit' className='btn btn-sm btn-blue-dark m-1'>
                            {initialValues.id ? 'Actualizar tarea' : 'Crear tarea'}
                            <i className="fas fa-plus m-1" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
