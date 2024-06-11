
import { LayoutPrivate } from '@/layouts'
import { useTitle } from '@/hooks/useTitle';

export const Proyectos = () => {
  useTitle('Proyectos');

  return (
    <LayoutPrivate>
      <div className="h1 text-center text-white">Proyectos</div>
    </LayoutPrivate>
  )
}
