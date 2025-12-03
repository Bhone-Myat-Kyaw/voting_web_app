import {  Routes, Route } from "react-router-dom";
import MainPage from "./pages/UserPages/MainPage";
import Login from "./pages/UserPages/Login/Login";
import Vote from "./pages/UserPages/Vote/Vote";
import ProtectedRoute from "./helpers/ProtectedRoute";
import TestApp from "./pages/UserPages/Vote/TestApp";
import RedirectRoute from "./helpers/RedirectRoute";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={
        <RedirectRoute role="student" >
          <Login />
        </RedirectRoute>
      } />
      <Route path="/vote" element={
        <ProtectedRoute role="student">
          <Vote />
        </ProtectedRoute>
      } />
      {/* <Route path="/onBoarding" element={<OnboardingModal/>}/> */}
      {/* <Route path="/modal" element={<Modal hasVoted={true} />} /> */}
      <Route path="/carousel" element={<TestApp />} />
      <Route path="/temp" element={<Vote />}/>
    </Routes>
  );
}

export default App;
