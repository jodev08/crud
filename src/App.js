import React from "react";
import { Routes, Route } from "react-router-dom";
import ConnectModal from "./components/ConnectModal";
import Accueil from "./pages/Accueil";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />}></Route>
      <Route path="/connectmodal" element={<ConnectModal />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
    </Routes>
  );
};

export default App;
