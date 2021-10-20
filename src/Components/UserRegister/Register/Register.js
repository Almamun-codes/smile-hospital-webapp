import { updateProfile } from "@firebase/auth";
import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  // get event handler from useAuth
  const {
    signInWithGoogle,
    user,
    email,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    signUpWithPassword,
    error,
    name,
    setUser,
    setError,
    auth,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const googleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  const passwordSignIn = () => {
    if (name.length > 4 && email.length > 7) {
      signUpWithPassword()
        .then((result) => {
          setUser(result.user);
          history.push(redirect_url);
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then((result) => {
              setUser(result.user);
              // Profile updated!
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        })
        .finally(setIsLoading(false));
    } else {
      return;
    }
  };
  return (
    <div className="bg-white py-5">
      <div className="container bg-color w-50 border rounded shadow">
        <div className="py-3">
          <h2>Please Register</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                onBlur={handleNameChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                onBlur={handleEmailChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="InputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onBlur={handlePasswordChange}
                required
                id="InputPassword1"
              />
            </div>

            <p>
              <Link className="text-black" to="/login">
                Already Registered?
              </Link>
            </p>
            <p className="text-danger">{error}</p>

            <div
              onClick={passwordSignIn}
              className="btn btn-outline-success me-3"
            >
              Register
            </div>

            <div onClick={googleSignIn} className="btn btn-outline-success">
              Register with Google
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
