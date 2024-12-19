import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./auth/AuthProvider";

export default function ProtectedRoute() {
    const auth = useAuth();

    if (auth.isAuthenticated && window.location.pathname !== '/dashboard') {
        return <Navigate to="/dashboard" />;
    }
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}