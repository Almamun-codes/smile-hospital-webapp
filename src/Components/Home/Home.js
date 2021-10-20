import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShowDoctors from "../ShowDoctors/ShowDoctors";
import ShowServices from "../ShowServices/ShowServices";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // take only 6 from the courses
  const showServices = services.slice(0, 6);

  //load doctors information
  const [doctor, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./doctors.JSON")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const doctors = doctor.slice(0, 8);
  return (
    <div className="container-fluid">
      <div className="container d-flex py-5">
        <div className="w-50 mt-3">
          <h1 className="fs-1">Welcome to Smile Hospital</h1>
          <p>we care about you and your body.</p>
          <p>get the best health care from us</p>
          <p>
            <Link to="/about" className="text-black text-decoration-none">
              Know More!
            </Link>
          </p>
          <h5>Please Call in emergency: 943828</h5>
          <Link className="btn btn-success mt-4" to="/doctors">
            Visit a doctor
          </Link>
        </div>
        <div className="w-50">
          <div className="justify-content-center">
            <img
              src="https://partnersforhomecare.ca/wp-content/uploads/2017/07/Hire-Home-Health-Nursing-For-Seniors-For-Your-Family-Member.png"
              alt="doctor and patient"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <hr />
      {/* add service section */}
      <div className="container-fluid bg-light py-4">
        <div className="container">
          <h1 className="text-center">Test your body State</h1>
          <div className="row px-0">
            {showServices.map((service) => (
              <ShowServices key={service.id} service={service}></ShowServices>
            ))}
          </div>
        </div>
      </div>

      <hr />
      {/* add doctors section */}
      <div className="container py-5">
        <h1 className="text-center">Visit Our Specialist Doctors</h1>
        <div className="row padding">
          {doctors.map((doctor) => (
            <ShowDoctors key={doctor.id} doctor={doctor}></ShowDoctors>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
