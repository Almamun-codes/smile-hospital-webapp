import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Doctor = () => {
  const { doctorId } = useParams();
  const doctorid = parseInt(doctorId);

  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    fetch("/doctors.JSON")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    const getDoctor = doctors.find((element) => element.id === doctorid);

    setDoctor(getDoctor);
  }, [doctors]);

  return (
    <div className="container text-white">
      <div className="container py-5">
        <div className="col-12 bg-success d-flex rounded shadow">
          <div>
            <img
              src={doctor?.img}
              alt={doctor?.name}
              className="img-fluid single-doctor rounded"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">{doctor?.name}</h4>
            <p>{doctor?.speciality} specialist</p>
            <p>Fee: {doctor?.fee}</p>
            <Link to="/home" className="btn btn-light">
              Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
