import React from "react";
import HighValueAssignment from "../HighValueAssignment/HighValueAssignment";
import InfoBanner from "../InfoBanner/InfoBanner";
import LongTimeAssignment from "../LongTimeAssignment/LongTimeAssignment";
import LowValueAssignment from "../LowValueAssignment/LowValueAssignment";
import ShortTimeAssignment from "../ShortTimeAssignment/ShortTimeAssignment";

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
    </>
  );
};

export default Home;
