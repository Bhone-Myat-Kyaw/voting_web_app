import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./pages/Hero/Hero";
// import History from "./pages/History/History";
// import Major from "./pages/Major/Major";
// import Memory from "./pages/Memory/Memory";
// import UserManual from "./pages/UserManual/UserManual";
// import Container from "./Shared/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
