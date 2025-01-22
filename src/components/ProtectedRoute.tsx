import { Navigate, Outlet } from "react-router-dom";
/**
 * ProtectedRoute Component
 *
 * Wraps protected routes and redirects to login if user is not authenticated.
 * Uses localStorage token to determine authentication status.
 */
const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
