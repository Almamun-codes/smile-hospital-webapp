import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  //get user from user from
  const { user, logOut } = useAuth();
  console.log(user.displayName);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <h3>Smile Hospital</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tests">
                  Tests
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctors">
                  Doctors
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {user.email ? (
              <div className="d-flex">
                <h5 className="mx-2 mt-2">{user.displayName}</h5>
                <span className="btn btn-danger mx-2" onClick={logOut}>
                  LogOut
                </span>
              </div>
            ) : (
              <div>
                <Link
                  className="btn btn btn-outline-primary mx-2"
                  to="/register"
                >
                  Register
                </Link>
                <Link className="btn btn btn-outline-primary -2" to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
