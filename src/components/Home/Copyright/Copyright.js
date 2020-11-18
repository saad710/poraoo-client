import React from "react";
import { Link } from "react-router-dom";
import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="container copyright-area pt-1">
      <div className="row">
        <div>
          <p>
            <small>All Right Reserved | Poraoo.com 2020</small>
          </p>
        </div>
        <div className="ml-auto">
          <p>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <Link
                  className="text-white brand-link"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  <small>Privacy Policy </small>
                </Link>{" "}
              </li>
              <li className="list-inline-item">
                <small></small>{" "}
              </li>

              <li className="list-inline-item">
                <Link
                  className="text-white brand-link"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  <small>Site Map </small>
                </Link>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
