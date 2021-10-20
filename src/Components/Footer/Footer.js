import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-success text-white">
      <hr />
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-lg-4">
            <h1>Smile Hospital BD.</h1>
            <p>hospital@smile.com</p>
            <p>987-3453-3245-355</p>
          </div>
          <div className="col-md-12 col-lg-4">
            <h2>Address</h2>
            <p>Kazi Nazrul Islam Rd.</p>
            <p>1600 Dhaka.</p>
            <p>Bangladesh.</p>
          </div>
          <div className="col-md-12 col-lg-4">
            <h2>Services</h2>
            <p>
              <Link className="text-white text-decoration-none" to="/doctors">
                Visit a Doctor
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/tests">
                Do a Test
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/doctors">
                Get a surgery Done
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
