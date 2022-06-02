import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-crud-e32ee.firebaseapp.com",
  projectId: "react-crud-e32ee",
  storageBucket: "react-crud-e32ee.appspot.com",
  messagingSenderId: "324941271247",
  appId: "1:324941271247:web:15d5d97036e7c724fce7ba",
});
export const auth = app.auth();
export default app;
