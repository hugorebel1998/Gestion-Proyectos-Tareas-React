import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { LayoutPrivate } from '@/layouts/LayoutPrivate';
import { localizer, getMessagesCalendar } from '@/helpers';


export const Calendario = () => {

    useTitle('Calendario');
    const { state } = useLocation();


    const { tareas } = state
    const events = tareas.map(tarea => ({
        title: tarea.nombre,
        start: new Date(tarea.fecha_inicio),
        end: new Date(tarea.fecha_termino),
        allDay: false
    }));


    const eventStyleGetter = () => {

        const style = {
            backgroundColor: '#17A589',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
        };

        return {
            style
        }
    }

    return (
        <LayoutPrivate>
            <div className='row justify-content-center'>
                <div className='col-md-12 mt-5'>
                    <Calendar
                        culture='es'
                        localizer={localizer}
                        startAccessor='start'
                        events={events}
                        endAccessor='end'
                        style={{ height: 'calc( 100vh - 130px) ' }}
                        messages={getMessagesCalendar()}
                        eventPropGetter={eventStyleGetter}
                    />
                </div>
            </div>
        </LayoutPrivate>
    );
};