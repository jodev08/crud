import React, { useState } from "react";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import CreatePost from "./components/CreatePost";
import "./styles/index.scss";

const App = () => {
  const [user, setUser] = useState(null);

  /*controler si l utlisateur est connecté */
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //fonction deconnexion

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        {user && (
          <div className="message">
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button onClick={() => handleLogout()}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        )}
        {user ? <CreatePost /> : <ConnectModal />}
      </div>
    </div>
  );
};

export default App;
