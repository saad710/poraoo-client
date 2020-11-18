import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { fakeData } from "../../../fakeData/fakeData";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./HighValueAssignment.css";
import { UserContext } from "../../../App";

const HighValueAssignment = () => {
  const [assignments, setAssignments] = useState(fakeData);
  console.log(fakeData);
  return (
    <div style={{ paddingTop: 30, paddingBottom: 30 }} className="container">
      <div className="row sectionHeader">
        <div>
          <h3>High Value Assignment</h3>
        </div>
        <div className="ml-auto brand-text">
          <Link className="brand-link brand-text" to="/">
            See More <FontAwesomeIcon icon={faAngleRight} />
          </Link>{" "}
        </div>
      </div>
      <div className="row">
        {assignments.map((asgnmnt) => (
          <AssignmentCard
            key={asgnmnt.id}
            assignment={asgnmnt}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default HighValueAssignment;
