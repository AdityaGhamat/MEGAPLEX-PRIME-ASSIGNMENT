import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("isAdmin") === "true";

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
