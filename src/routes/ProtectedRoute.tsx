import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../provider/authProvider";

const ProtectedRoute = ({ role }: { role?: string }) => {
    const user = getCurrentUser();
    
    if (!user) return <Navigate to="/login" replace />;
    if (role && user.role !== role) return <Navigate to="/unauthorized" replace />;

    return <Outlet />;
};

export default ProtectedRoute;
