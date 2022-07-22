import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../lib";

const ProtectedRoute = ({ children }) => {
  const { userToken } = useAuth();
  const location = useLocation();

  if (!userToken) {
    return <Navigate to={'/login'} state={{ from: location }} replace />
  }

  return children;
};

export default ProtectedRoute;
