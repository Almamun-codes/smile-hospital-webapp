import React from "react";

const About = () => {
  return (
    <div className="container  py-5">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <h3 className="mt-5">Smile Hopital Bangladesh</h3>
          <p>
            Smile Hospital Limited is a tertiary care hospital and the leading
            contributor of private healthcare services in Bangladesh. This has
            been achieved only through consistent commitment to improve the
            lives of people through utmost service excellence since its
            inception on 16th December, 2006. Smile Hospital is one of the
            ventures of Smile Group which is the top business group of the
            country.
          </p>
          <p>
            The reputation of Smile Hospital is the result of quality clinical
            outcome and comprehensive care, made achievable through world class
            integrated healthcare facilities by highly trained professionals.
            Thus, Smile Hospitals strives to meet patients’ standards through
            quality healthcare and making a difference in their lives.
          </p>
        </div>
        <div className="col-md-12 col-lg-6">
          <img
            className="w-100"
            src="https://cdn.britannica.com/w:400,h:300,c:crop/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg"
            alt="hospital"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
