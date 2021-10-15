import initializeFirebase from "../components/Login/Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

initializeFirebase();
const useFirebase = () => {

  const [user, setUser] = useState({})
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
   return  signInWithPopup(auth, googleProvider)
  };

  const registerNewUser = (email, password, name) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setSuccess("Your Registration Successful")
        setError("");
        updateUser(name)
      })
      .catch(err => {
        setError(err.message);
        setSuccess("");
      });
  }

  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => { }).catch(err => setError(err.message));
  }

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser({});
      }
    })
    return () => subscribe;
  },[])

  const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setSuccess("your Are Successfully login")
        setError("");
      }).catch(err => {
        if (err.message.includes("user-not-found")) {
          setError("invalid email and Password");
          setSuccess("")
        }
    })
  }

  const logOut = () => {
  signOut(auth).then(()=> setUser({})).catch(err => setError(err.message))
}

  return {
    googleSignIn,
    setError,
    setUser,
    setSuccess,
    registerNewUser,
    updateUser,
    logInUser,
    logOut,
    success,
    user,
    error, 
  }
}

export default useFirebase;