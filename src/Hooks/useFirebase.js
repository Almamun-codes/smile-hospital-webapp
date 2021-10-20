import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //implement email password autentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //email change handler
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //password change handler
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //password change handler
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //sign up handler with email
  const signUpWithPassword = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else {
      return createUserWithEmailAndPassword(auth, email, password);
      // .then((result) => {
      //   setUser(result.user);
      //   return updateProfile(auth.currentUser, {
      //     displayName: name,
      //   })
      //     .then((result) => {
      //       setUser(result.user);
      //       // Profile updated!
      //     })
      //     .catch((error) => {
      //       setError(error.message);
      //     });
      // })
      // .catch((error) => {
      //   setError(error.message);
      // });
    }
  };

  //sign in with password
  const signInWithPassWord = () => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        // Sign-out successful.
      })
      .finally(setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  return {
    user,
    name,
    email,
    error,
    signInWithGoogle,
    signInWithPassWord,
    logOut,
    handleEmailChange,
    handlePasswordChange,
    signUpWithPassword,
    handleNameChange,
    name,
    auth,
    setUser,
    setError,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
