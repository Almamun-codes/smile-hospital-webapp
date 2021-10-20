import React from "react";
import { Link } from "react-router-dom";

const ShowServices = (props) => {
  const { id, name, img, fee, description } = props.service;
  return (
    <div className="col-sm-1 col-lg-4 my-2">
      <div className="card rounded h-100 shadow">
        <div className="card-img">
          <img src={img} alt="test" className="img-fluid service-img rounded" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p>{description}</p>
          <p>cost: {fee}</p>
          <Link to={`service/${id}`} className="btn btn-outline-success">
            Take test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowServices;
