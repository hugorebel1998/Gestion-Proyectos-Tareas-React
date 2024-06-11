import React from 'react'
import { LayoutPrivate } from '@/layouts'
import { useTitle } from '@/hooks/useTitle';

export const Tareas = () => {

  useTitle('Tareas');


  return (
    <LayoutPrivate>
      <div className='h1 text-center text-white'>Tareas</div>
    </LayoutPrivate>
  )
}
