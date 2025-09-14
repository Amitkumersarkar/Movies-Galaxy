import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user?.email) {
        return children;
    }

    return <Navigate to="/signIn" replace />;
};

export default PrivateRoutes;
