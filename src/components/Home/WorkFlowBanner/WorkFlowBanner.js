import React from "react";
import img from "../../../resources/Image Placeholder.png";
import "./WorkFlowBanner.css";

const WorkFlowBanner = () => {
  return (
    <div className="row work-area">
      <div className="col-md-7">
        <img src={img} alt="working-girl" className="img-fluid" />
      </div>
      <div className="col-md-5 work-text-area">
        <h1
          style={{ fontSize: 40, lineHeight: 1.4 }}
          className="font-weight-bold"
        >
          Now everyting is <br />
          figureoutable
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            paddingTop: 15,
            paddingBottom: 25,
          }}
          className="text-justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
        <button
          style={{ fontSize: 16, margintTop: 30 }}
          className="work-btn text-white font-weight-bold"
        >
          Learn Step by Step
        </button>
      </div>
    </div>
  );
};

export default WorkFlowBanner;
