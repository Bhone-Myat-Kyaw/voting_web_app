import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./pages/Hero/Hero";
// import History from "./pages/History/History";
// import Major from "./pages/Major/Major";
// import Memory from "./pages/Memory/Memory";
// import UserManual from "./pages/UserManual/UserManual";
// import Container from "./Shared/Container";
import {  Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login/Login";
import Vote from "./pages/Vote/Vote";
import Modal from "./Components/Utils/Modal";
import { SelectedPage } from "./Components/Texts/pages";
import { useState } from "react";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vote" element={<Vote  />} />
      {/* <Route path="/modal" element={<Modal />} /> */}
    </Routes>
  );
}

export default App;
