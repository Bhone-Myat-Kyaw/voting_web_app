// Components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../pages/AdminPages/Context/AuthContext";

const ProtectedRoute = ({ children } : { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Redirect to login if not authenticated or not admin
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;