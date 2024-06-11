import { useEffect } from "react";

export const useTitle = (title = 'Sin titulo') => {
    const titulo = import.meta.env.VITE_APP_TITLE;
    
    useEffect(() => {
        document.title = `${titulo} | ${title}`;

    }, [title])
}
