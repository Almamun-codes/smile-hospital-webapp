import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import ShowDoctors from "../ShowDoctors/ShowDoctors";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./doctors.JSON")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="container-fluid bg-success">
      <div className="container">
        <div className="row">
          {doctors.map((doctor) => (
            <ShowDoctors key={doctor.id} doctor={doctor}></ShowDoctors>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
