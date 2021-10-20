import React from "react";
import { Link } from "react-router-dom";

const ShowDoctors = (props) => {
  const { img, name, speciality, id, fee } = props.doctor;
  return (
    <div className="col-sm-1 col-lg-3 my-2">
      <div className="card rounded h-100 shadow">
        <div className="card-img">
          <img src={img} alt="test" className="img-fluid doctor-img rounded" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p>{speciality}</p>
          <p>Fee: {fee} BDT</p>
          <Link to={`doctor/${id}`} className="btn btn-outline-success">
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDoctors;
