import { LayoutPrivate } from '@/layouts'
import { useTitle } from '@/hooks';

export const Home = () => {
    useTitle('Inicio');
    return (
        <LayoutPrivate>
            <div className="h1 text-white text-center">Home</div>
        </LayoutPrivate>
    )
}
