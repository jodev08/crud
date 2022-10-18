import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

import "./connectModal.css";

const ConnectModal = () => {
  const [signup, setSignUp] = useState(false);

  return (
    <div>
      <div className="modalGlobal">
        <button
          style={{ background: signup ? "rgb(0,191,255)" : "rgb(255,255,255)" }}
          onClick={() => setSignUp(true)}
        >
          s'inscrire
        </button>
        <button
          style={{
            background: signup ? "rgb(255,255,255)" : "rgb(0,191,255)",
          }}
          onClick={() => setSignUp(false)}
        >
          se connecter
        </button>
      </div>
      {signup ? <SignUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;
