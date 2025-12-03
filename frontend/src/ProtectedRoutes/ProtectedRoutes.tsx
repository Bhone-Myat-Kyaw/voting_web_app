// Components/ProtectedRoute.jsx
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const ProtectedRoute = ({ children, role } : { children: React.ReactNode, role: "admin" | "student" }) => {
  const { data: user, isLoading } = useUser();
  const navigate = useNavigate();

  console.log(user);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (user && user.role == "admin") return children;

  // Redirect to login if not authenticated or not admin
  if (!user || user.role !== role) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1>You can't get access to this.</h1>
        <button 
          className="px-8 py-2 rounded-lg bg-blue-400 border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm text-body" 
          onClick={() => navigate("/login")}
        >
          Click to return to the login page
        </button>
      </div>
    )
  }

  return children;
};

export default ProtectedRoute;