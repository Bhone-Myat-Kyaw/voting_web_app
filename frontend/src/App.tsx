// import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./pages/Hero/Hero";
// import History from "./pages/History/History";
// import Major from "./pages/Major/Major";
// import Memory from "./pages/Memory/Memory";
// import UserManual from "./pages/UserManual/UserManual";
// import Container from "./Shared/Container";
import {  Routes, Route } from "react-router-dom";
import MainPage from "./pages/UserPages/MainPage";
import Login from "./pages/UserPages/Login/Login";
// import Login from "./pages/UserPages/Login/Login3";
import Vote from "./pages/UserPages/Vote/Vote";
// import Modal from "./Components/Utils/Modal";
import ProtectedRoute from "./Components/Utils/ProtectedRoute";
import ConfirmationModal from "./Components/Utils/Modal/ConfirmationModal";
import Modal from "./Components/Utils/Modal/Modal";
import TestApp from "./pages/UserPages/Vote/TestApp";
// import { SelectedPage } from "./Components/Texts/pages";
// import { useState } from "react";
// import OnboardingModal from "./Components/Utils/onBoardingModal";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vote" element={
        <ProtectedRoute>
          <Vote />
        </ProtectedRoute>
      } />
      {/* <Route path="/onBoarding" element={<OnboardingModal/>}/> */}
      {/* <Route path="/modal" element={<Modal hasVoted={true} />} /> */}
      <Route path="/carousel" element={<TestApp />} />
    </Routes>
  );
}

export default App;
