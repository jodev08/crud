import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

import "./login.css";

const Login = () => {
  const loginEmail = useRef();
  const loginPassword = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      <h3>Se connecter</h3>

      <form onSubmit={(e) => handleLogin(e)}>
        <input type="email" placeholder="Email" required ref={loginEmail} />
        <input
          type="password"
          placeholder="Mot de passe"
          required
          ref={loginPassword}
        />
        <input type="submit" className="btn2" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
