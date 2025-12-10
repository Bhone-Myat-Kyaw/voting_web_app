import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Loading from "../Components/Utils/Loading";
import type { JSX } from "react";

type Props = {
    children: JSX.Element;
    // role: "student" | "admin";
}

const RedirectRoute = ({ children } : Props) => {
  const { data: user, isLoading } = useUser();

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <Loading />
      // <div className="flex justify-center items-center min-h-screen">
        
      // </div>

    );
  }

  if (user && user.role == "admin") return <Navigate to="/admin" replace />;
  if (user && user.role == "student") {
    return <Navigate to="/vote" replace />
  }

  // Redirect to login if not authenticated or not admin
  // if (!user || user.role !== role) {
  //   return childern
  // }

  return children;
};

export default RedirectRoute;