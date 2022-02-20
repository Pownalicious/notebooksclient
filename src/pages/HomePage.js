import React from "react";
import testImage from "../static/images/test.jpeg";
import testImageTwo from "../static/images/test-2.jpeg";

export default function HomePage() {
  return (
    <div className="container">
      <div>
        <div class="row">
          <div class="col-9">
            <h1>Notes</h1>
          </div>

          <div
            class="col-4"
            style={{
              backgroundImage: `url(${testImageTwo})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "275px",
            }}
          ></div>
          <div
            class="col-6"
            style={{
              backgroundImage: `url(${testImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "275px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
