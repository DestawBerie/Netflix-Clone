import React from "react";

import puppy_3 from "../images/puppy-3.jpg";
import puppy_4 from "../images/puppy-4.jpg";

function PuppySection_2() {
  return (
    <div>
      <section class="text-center my-5">
        <h2 class="font-weight-bold">More Puppies</h2>
      </section>

      <section class="container">
        <div class="row">
          <div class="mb-5 col-md-6 mb-md-0">
            <img src={puppy_3} alt="" />
          </div>
          <div class="col-md-6">
            <img src={puppy_4} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PuppySection_2;
