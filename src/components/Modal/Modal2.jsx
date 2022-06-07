import React from "react";
import "./Modal.css";
import "./Modal2.css";

const Modal2 = ({
  setOpenModal,
  message,
  backgroundColor,
  zIndex,
  position,
}) => {
  return (
    <div
      // className="modalBackground"
      className="modal2Background"
      style={{ zIndex: zIndex, position: position }}
      onClick={() => {
        //close the modal if the user
        //presses around the body of the page
        //   setOpenModal(false);
      }}
    >
      <div
        className="modal2_container gradient"
        style={{ background: backgroundColor }}
      >
        {message ?? "Processing..."}
      </div>
    </div>
  );
};

export default Modal2;
