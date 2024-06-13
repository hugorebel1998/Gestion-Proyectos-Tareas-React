import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = ({ redirectTo = '/autenticacion' }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const storeUser = localStorage.getItem('user');

        if (storeUser)
            setUser(JSON.parse(storeUser));

        setLoading(false);

    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user)
        return <Navigate to={redirectTo} />

    return <Outlet />
}
