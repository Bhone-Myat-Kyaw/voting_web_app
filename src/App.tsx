import AdminLayout from "./components/AdminLayout";
import UserManagementPage from "./pages/Admin/UserManagementPage";
import VotesPage from "./pages/Admin/VotesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminLayout />
        }
      >
        <Route index element={<VotesPage />} />
        <Route path="/userManagement" element={<UserManagementPage />} />
      </Route>
    </Routes>
  )
}

export default App;
