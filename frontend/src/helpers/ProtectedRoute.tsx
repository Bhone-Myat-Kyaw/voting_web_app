// import type { JSX } from 'react'
// import { Navigate } from 'react-router-dom'
// import { getWithExpiry } from '../../helpers/storage'

// type Props = {
//     children: JSX.Element,
// }

// const ProtectedRoute = ({children}: Props) => {
//     const stored = getWithExpiry("voter");
//     if (!stored) {
//         return <Navigate to={'/login'} replace />
//     }
//     return children;
  
// }

// export default ProtectedRoute

// Components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Loading from "../Components/Utils/Loading";

const ProtectedRoute = ({ children, role } : { children: React.ReactNode, role: "admin" | "student" }) => {
  const { data: user, isLoading } = useUser();

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <Loading />
      // <div className="flex justify-center items-center min-h-screen">
        
      // </div>

    );
  }

  if (user && user.role == "admin") return children;
  if (user && user.role == "student") {
    return <Navigate to="/vote" replace />
  }

  // Redirect to login if not authenticated or not admin
  if (!user || user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;