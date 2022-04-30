import React from "react";
import { Button } from "../Button/Button";
import "./Modal.css";
import { Link, useNavigate } from "react-router-dom";

function Modal({ setOpenModal, heading, isSuccess, onClick }) {
  return (
    <>
      <div
        className="modalBackground"
        onClick={() => {
          //close the modal if the user
          //presses around the body of the page
          setOpenModal(false);
        }}
      >
        <div
          className={isSuccess ? "modalContainer is-success" : "modalContainer"}
        >
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>{heading ?? "Coming Soon!"}</h1>
          </div>
          <div className="body">
            <img
              src="/images/dullbabymobil.png"
              alt="dullbaby"
              className="modal-img"
            />
          </div>
          <div className="footer">
            {!isSuccess && (
              <Button
                onClick={() => {
                  setOpenModal(false);
                }}
                buttonColor="orange"
              >
                Ok
              </Button>
            )}
            {isSuccess && (
              <Button
                onClick={onClick} //this is when the modal is to show success message
                buttonColor="orange"
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
