import React from "react";
import ShowServices from "../ShowServices/ShowServices";
import useServices from "./../../useServices";

const Tests = () => {
  const services = useServices();
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Test your body State</h1>
        <div className="row padding">
          {services.map((element) => (
            <ShowServices key={element.id} service={element}></ShowServices>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;
