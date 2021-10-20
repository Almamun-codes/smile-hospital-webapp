import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  //import necessary data from useAuth
  const {
    email,
    setUser,
    handleEmailChange,
    handlePasswordChange,
    signInWithGoogle,
    signInWithPassWord,
    setError,
    error,
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
      });
  };

  const passwordSignIn = () => {
    signInWithPassWord()
      .then((result) => {
        // Signed in
        const loggedInUser = result.user;
        setUser(loggedInUser);
        history.push(redirect_url);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="bg-white py-5">
      <div className="container w-50 rounded shadow bg-color">
        <div className="py-5">
          <h2>Please login</h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                onBlur={handleEmailChange}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                onBlur={handlePasswordChange}
                required
                id="exampleInputPassword1"
              />
            </div>
            <p>
              <Link className="text-black" to="/register">
                New User?
              </Link>
            </p>

            <p className="text-danger">{error}</p>

            <button
              type="submit"
              class="btn btn-outline-success"
              onClick={passwordSignIn}
            >
              LogIn
            </button>

            <button
              type="submit"
              class="btn btn-outline-success mx-3"
              onClick={googleSignIn}
            >
              LogIn With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
