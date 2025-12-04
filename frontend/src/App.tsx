import {  Routes, Route } from "react-router-dom";
import MainPage from "./pages/UserPages/MainPage";
import Login from "./pages/UserPages/Login/Login";
import Vote from "./pages/UserPages/Vote/Vote";
import ProtectedRoute from "./helpers/ProtectedRoute";
import AdminLayout from "./pages/AdminPages/AdminLayout";
import VotesPage from "./pages/AdminPages/pages/VotePage";
import UserManagementPage from "./pages/AdminPages/pages/UserManagementPage";
import RedirectRoute from "./helpers/RedirectRoute";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={
        <RedirectRoute >
          <Login />
        </RedirectRoute>
      } />
      <Route path="/vote" element={
        <ProtectedRoute role="student">
          <Vote />
        </ProtectedRoute>
      } />

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
