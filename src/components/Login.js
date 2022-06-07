import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../utils/firebase.config";

const Login = () => {
  const loginEmail = useRef();
  const loginPassword = useRef();

  return (
    <div>
      <h3>se connecter</h3>

      <form>
        <input type="email" placeholder="Email" required ref={loginEmail} />
        <input
          type="password"
          placeholder="Mot de passe"
          required
          ref={loginPassword}
        />
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
