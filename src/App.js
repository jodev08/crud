import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ConnectModal from "./components/ConnectModal";
import Accueil from "./pages/Accueil";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [user, setUser] = useState(null);

  /*controler si l utlisateur est connecté */
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <Routes>
      <Route
        path="/connectmodal"
        element={user ? <CreatePost></CreatePost> : <ConnectModal />}
      ></Route>

      <Route path="/" element={<Accueil />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
    </Routes>
  );
};

export default App;
