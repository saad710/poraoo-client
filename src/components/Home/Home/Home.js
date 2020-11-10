import React from "react";
import HighValueAssignment from "../HighValueAssignment/HighValueAssignment";
import InfoBanner from "../InfoBanner/InfoBanner";
import LongTimeAssignment from "../LongTimeAssignment/LongTimeAssignment";
import LowValueAssignment from "../LowValueAssignment/LowValueAssignment";
import ShortTimeAssignment from "../ShortTimeAssignment/ShortTimeAssignment";
import SuccessStoryBanner from "../SuccessStoryBanner/SuccessStoryBanner";
import WorkFlowBanner from "../WorkFlowBanner/WorkFlowBanner";

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <LongTimeAssignment></LongTimeAssignment>
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <ShortTimeAssignment></ShortTimeAssignment>
      </div>
      <InfoBanner></InfoBanner>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <HighValueAssignment></HighValueAssignment>
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <LowValueAssignment></LowValueAssignment>
      </div>
      <WorkFlowBanner></WorkFlowBanner>
      <div
        style={{
          zIndex: 100,
          // marginTop: -320,
          width: "100%",
          height: 827,
          backgroundImage:
            "linear-gradient(to right, #ff8a00 0%, #ffc000 100%)",
        }}
      >
        <SuccessStoryBanner></SuccessStoryBanner>
      </div>
    </>
  );
};

export default Home;
