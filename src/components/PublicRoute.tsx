import { Navigate, Outlet } from "react-router-dom";

/**
 * PublicRoute Component
 *
 * Redirects to profile page if user is authenticated.
 * Otherwise, renders the child components.
 */
const PublicRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/profile" replace /> : <Outlet />;
};

export default PublicRoute;
