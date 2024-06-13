import { Route, Routes } from "react-router-dom"
import { Login, Registro } from "@/pages/auth"
import { PublicRouter } from "./PublicRouter"
import { PrivateRouter } from "./PrivateRouter"
import { PagesRoutes } from "../pages/routes"
import { Auth } from "../pages/auth/Auth"

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<PublicRouter />}>
                <Route path='autenticacion' element={<Auth />} />
                {/* <Route path="login" element={<Login />} />
                <Route path="registro" element={<Registro />} /> */}
            </Route>

            <Route element={<PrivateRouter />}>
                <Route path="/*" element={<PagesRoutes />} />
            </Route>
        </Routes>
    )
}
