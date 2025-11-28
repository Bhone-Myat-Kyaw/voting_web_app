import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/UserPages/Login/Login";
import AdminLayout from "./Components/AdminComponents/AdminLayout";
import VotesPage from "./pages/AdminPages/VotesPage";
import UserManagementPage from "./pages/AdminPages/UserManagementPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<VotesPage />} />
        <Route path="userManagement" element={<UserManagementPage />} />
      </Route>
    </Routes>
  );
}

export default App;
