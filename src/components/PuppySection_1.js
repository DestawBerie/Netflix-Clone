
import React from "react";

 import logo_2 from "../images/puppy-1.jpg";
import puppy_2 from "../images/puppy-2.jpg" ;
import banner from "../images/banner-puppies.jpg"

function PuppySection_1() {
  return (
    <div>
     
    <section className="banner-puppy mb-5">
      <img src={banner} alt="banner-puppies" />
    </section>
   
    <section className="container">
      <div className="row">
        <div className="mb-5 col-md-4 mb-md-0">
          <img src={logo_2} alt="" />
        </div>
        <div className="missing-part d-none d-md-block col-md-4 pt-5">
          <p className="text-center font-weight-bold">Missing Puppy Here!!!</p>
        </div>
        <div className="col-md-4">
          <img src={puppy_2} alt="" />
        </div>
      </div>
    </section>
    </div>
  );
}

export default PuppySection_1;
