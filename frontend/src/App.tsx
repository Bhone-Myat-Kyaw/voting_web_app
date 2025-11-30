import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/UserPages/Login/Login";
import AdminLayout from "./pages/AdminPages/AdminLayout";
import VotesPage from "./pages/AdminPages/pages/VotesPage";
import UserManagementPage from "./pages/AdminPages/pages/UserManagementPage";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes";
import Vote from "./pages/UserPages/Vote/Vote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vote" element={<Vote />} />

      {/* Admin Protected Pages */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin"> {/* Wrap with protection */}
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<VotesPage />} />
        <Route path="userManagement" element={<UserManagementPage />} />
      </Route>
    </Routes>
  );
}

export default App;