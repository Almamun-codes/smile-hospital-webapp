import React from "react";
import { useState, useEffect } from "react";

import ShowDoctors from "../ShowDoctors/ShowDoctors";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./doctors.json")
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
