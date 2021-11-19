import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

  initializeAuthentication();

  const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  
    const loginWithGoogle = () => {
      setIsLoading(true);
    return  signInWithPopup(auth, provider)
    
    };
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          console.log(user);
        } else {
          setError("");
          setUser({});
        }
        setIsLoading(false);
      });
    }, []);
  
    const handleLogout = (e) => {
      setIsLoading(true);
      signOut(auth)
        .then(() => {
          setUser({});
          setIsLoading(false);  //for reloading after user log out from the page
        })
        .catch((error) => {
          setError("");
        });
    };
  
    return { loginWithGoogle, user, error, handleLogout,isLoading };
  };
  export default useFirebase;