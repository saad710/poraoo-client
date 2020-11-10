import React from "react";
import img1 from "../../../resources/Group 210.png";
import img2 from "../../../resources/Group 209.png";
import img3 from "../../../resources/Group 207.png";
import img4 from "../../../resources/Group 208.png";

const InfoBanner = () => {
  return (
    <div
      style={{
        padding: 60,
        widht: "100%",
        // height: 298,
        backgroundImage: "linear-gradient(to right, #ff8a00 0%, #ffc000 100%)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-white">
            <center>
              <img
                style={{ width: 103, height: 90, paddingBottom: 10 }}
                src={img1}
                alt=""
              />
              <h4>10,697</h4>
              <p>Registered Students</p>
            </center>
          </div>
          <div className="col-md-3 text-white">
            <center>
              <img
                style={{ width: 103, height: 90, paddingBottom: 10 }}
                src={img2}
                alt=""
              />
              <h4>10,697</h4>
              <p>Registered Students</p>
            </center>
          </div>

          <div className="col-md-3 text-white">
            <center>
              <img
                style={{ width: 103, height: 90, paddingBottom: 10 }}
                src={img3}
                alt=""
              />
              <h4>10,697</h4>
              <p>Registered Students</p>
            </center>
          </div>
          <div className="col-md-3 text-white">
            <center>
              <img
                style={{ width: 103, height: 90, paddingBottom: 10 }}
                src={img4}
                alt=""
              />
              <h4>10,697</h4>
              <p>Registered Students</p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
