import React from "react";
import useServices from "../../useServices";
import ShowServices from "../ShowServices/ShowServices";

const Tests = () => {
  const services = useServices();
  // take only 6 from the courses

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
