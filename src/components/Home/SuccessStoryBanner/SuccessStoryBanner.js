import React from "react";
import "./SuccessStoryBanner.css";
import img2 from "../../../resources/Image Placeholder (2).png";
import img3 from "../../../resources/Image Placeholder (3).png";
import img4 from "../../../resources/Image Placeholder (4).png";
import img5 from "../../../resources/Image Placeholder (5).png";
import img6 from "../../../resources/Image Placeholder (6).png";
import img7 from "../../../resources/Image Placeholder (7).png";
import img8 from "../../../resources/Image Placeholder (8).png";

const SuccessStoryBanner = () => {
  return (
    <div
      className="row story-banner"
      style={{
        position: "relative",
        zIndex: 100,
        // marginTop: -320,
        width: "100%",
        height: 827,
        backgroundImage: "linear-gradient(to right, #ff8a00 0%, #ffc000 100%)",
      }}
    >
      <div className="container">
        <div className="row">
          <div style={{ paddingTop: 150 }} className="col-md-4">
            <h1
              style={{ fontSize: 39, lineHeight: 1.4 }}
              className="font-weight-bold text-white"
            >
              Success Stories <br /> From Our Students <br /> WorldWide!
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                paddingTop: 15,
                paddingBottom: 25,
              }}
              className="text-justify text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
            <button className="btn contrast-btn">
              {" "}
              <span className="font-weight-bold" style={{ color: "#FF8A00" }}>
                Discover
              </span>{" "}
            </button>
          </div>
          <div className="col-md-8">
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4">
                <img src={img2} class="img-fluid mb-4" alt="" />

                <img
                  src={img3}
                  class="img-fluid mb-4"
                  alt=""
                  data-wow-delay="0.3s"
                />
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <img
                  src={img4}
                  class="img-fluid mb-4"
                  alt=""
                  data-wow-delay="0.1s"
                />

                <img
                  src={img5}
                  class="img-fluid mb-4"
                  alt=""
                  data-wow-delay="0.4s"
                />
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <img
                  src={img6}
                  class="img-fluid mb-4"
                  alt=""
                  data-wow-delay="0.2s"
                />

                <img
                  src={img7}
                  class="img-fluid mb-4"
                  alt=""
                  data-wow-delay="0.5s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryBanner;
