import React from "react";
import "./Ready.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function ReadyComponent({ getStartedLink }) {
  return (
    <>
      <div className="ready__section">
        <div className="ready_container">
          <h3>Ready to take your startup content game to the next level?</h3>
          <div className="ready_icons">
            {/* <img src="images/group.png" alt="ready_icons group" />
            <img src="images/group37.png" alt="ds" />
            <img src="images/group38.png" alt="ds" /> */}
          </div>
          <a href={getStartedLink ?? "#pricing"}>
            <Button buttonColor="blue">Get started</Button>
          </a>
          {/* <Link to={ getStartedLink}> */}
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default ReadyComponent;
