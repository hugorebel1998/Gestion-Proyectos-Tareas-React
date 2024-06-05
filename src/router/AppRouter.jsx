import { Route, Routes } from "react-router-dom"
import { Login, Registro } from "@/pages/auth"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<PublicRouter />}>
                <Route path="login" element={<Login />} />
                <Route path="registro" element={<Registro />} />
            </Route>
        </Routes>
    )
}
