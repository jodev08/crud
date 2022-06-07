import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const SignUp = () => {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName,
          });

          console.log(userAuth);
          window.location.reload();
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  /*-------------------------------*/
  return (
    <div className="signup-container">
      <div className="signup">
        <h3>s'inscrire</h3>

        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="text"
            placeholder="pseudo"
            required
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
          ></input>
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={registerPassword}
          ></input>
          <input type="submit" value="Valdider l'inscription"></input>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
