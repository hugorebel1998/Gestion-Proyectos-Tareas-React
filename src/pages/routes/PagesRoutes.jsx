import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Perfil } from '@/pages/perfil/Perfil'
import { Home } from '@/pages/Home'
import { Proyectos } from '@/pages/proyectos/Proyectos'
import { Tareas } from '@/pages/tareas/Tareas'
import { Calendario } from '@/pages/calendario/Calendario'

export const PagesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyecto-tareas/:proyectoId" element={<Tareas />} />
            {/* <Route path="/calendario" element={<Calendario />} /> */}

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
