import { Route, Routes } from "react-router-dom"
import { Login, Registro } from "@/pages/auth"
import { PublicRouter } from "./PublicRouter"
import { PrivateRouter } from "./PrivateRouter"
import { Home } from "@/pages/Home"
import { Proyectos } from "../pages/proycetos/Proyectos"
import { Tareas } from "../pages/tareas/Tareas"
import { Perfil } from "../pages/perfil/Perfil"

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<PublicRouter />}>
                <Route path="login" element={<Login />} />
                <Route path="registro" element={<Registro />} />
            </Route>

            <Route element={<PrivateRouter />}>
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/tareas" element={<Tareas />} />
                <Route path="/calendario" element=<>Calendario</> />
            </Route>
        </Routes>
    )
}
