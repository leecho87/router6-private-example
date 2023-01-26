import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./Auth";


const Guard = () => {
    const { auth } = useContext(AuthContext);

    console.log('[Guard]', auth);

    return auth ? <Outlet /> : <Navigate to="/login" replace />
}

export default Guard;