import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Service = () => {
  const { serviceId } = useParams();
  const serviceid = parseInt(serviceId);

  const [services, setServices] = useState([]);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch("/services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    const getService = services.find((element) => element.id === serviceid);
    setService(getService);
  }, [services]);

  return (
    <div className="container text-white">
      <div className="container py-5">
        <div className="col-12 bg-success d-flex rounded shadow">
          <div>
            <img
              src={service?.img}
              alt="test"
              className="img-fluid single-doctor h-100 rounded"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">{service?.name}</h4>
            <p>{service?.description}</p>
            <p>cost: {service?.fee}</p>
            <Link to="/home" className="btn btn-light">
              Take test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
