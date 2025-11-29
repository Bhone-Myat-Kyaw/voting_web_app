import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/UserPages/Login/Login";
import AdminLayout from "./pages/AdminPages/AdminLayout";
import VotesPage from "./pages/AdminPages/VotesPage";
import UserManagementPage from "./pages/AdminPages/UserManagementPage";
import { AuthProvider } from "./pages/AdminPages/Context/AuthContext";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Protected Pages */}
      <Route
        path="/admin"
        element={
          <AuthProvider>
            <ProtectedRoute> {/* Wrap with protection */}
              <AdminLayout />
            </ProtectedRoute>
          </AuthProvider>
        }
      >
        <Route index element={<VotesPage />} />
        <Route path="userManagement" element={<UserManagementPage />} />
      </Route>
    </Routes>
  );
}

export default App;