import React from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import { LayoutPrivate } from '@/layouts/LayoutPrivate';
import { useTitle } from '@/hooks/useTitle';
import { localizer, getMessagesCalendar } from '@/helpers';
import { addHours } from 'date-fns';


const events = [
    {
        title: 'Mi cumpleaños',
        notes: 'Simple descripcion',
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '1234',
            name: 'Hugo Guillermo'
        }
    }
]


export const Calendario = () => {

    useTitle('Calendario');


    const eventStyleGetter = ({ event, start, end, isSelected }) => {
        // console.log({ event, start, end, isSelected })

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