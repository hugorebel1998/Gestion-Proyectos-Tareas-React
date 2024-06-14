import { dateFnsLocalizer } from 'react-big-calendar';

import { format, parse, startOfWeek, getDay } from 'date-fns';

import esES from 'date-fns/locale/es'

const locales = {
    'es': esES,
}

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})


export const getMessagesCalendar = () => {

    return {
        allDay: 'Todo el día',
        previous: 'Anterior',
        next: 'Siguiente',
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        agenda: 'Agenda',
        date: 'Fecha',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'No hay eventos en este rango.',
        showMore: total => `+ Ver más (${total})`
    };
}

