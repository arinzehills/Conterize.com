import React from "react";
import "./Stepper.css";
import { IoCheckmarkOutline } from "react-icons/io5";
import { VscPass } from "react-icons/vsc";
import { TiTick } from "react-icons/ti";
import { MdCheck } from "react-icons/md";

function Stepper({ activeStep, hrColor }) {
  console.log(activeStep);
  return (
    <div className="stepper-section">
      <div className="stepper-wrapper">
        <div
          className={
            activeStep === 1 ? "stepper-container checked" : "stepper-container"
          }
        >
          {activeStep === 1 ? "" : <MdCheck fontSize={"29px"} />}
        </div>
        <hr className={hrColor}></hr>
        <div
          className={
            activeStep === 2 ? "stepper-container checked" : "stepper-container"
          }
        >
          {activeStep < 2 ? (
            "" //if active step is less 1 i.e less than two show the number 2
          ) : activeStep === 2 ? (
            ""
          ) : (
            <MdCheck fontSize={"29px"} />
          )}
          {/* if active step is  2 two show the number 2 else show checked btn*/}
        </div>
        <hr className={hrColor}></hr>
        <div
          className={
            activeStep === 3 ? "stepper-container checked" : "stepper-container"
          }
        >
          {activeStep === 3 ? <MdCheck fontSize={"29px"} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Stepper;