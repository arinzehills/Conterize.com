import React from "react";
import SaveButton from "../../pages/Dashboard/components/SaveButton/SaveButton";
import Loader from "../Loader/Loader";
import Modal2 from "../Modal/Modal2";

const DraftReqestModal = ({ onClick, onClick2, top, message }) => {
  let boolx = true;
  return (
    <div className="modalBackground">
      <div
        style={{
          top: top ?? "35%",
          right: "50%",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999999,
          position: "absolute",
          flexDirection: "column",
          background: "white",
          backdropFilter: blur("33px"),
          transition: "all 0.3s ease-out",

          height: 300,
          width: 250,
          boxShadow: "var(--box-shadow)",
        }}
      >
        <img src="/images/dullbaby.png" alt="ds" height={150} />
        <h4>{message ?? "Save as Draft?"}</h4>

        {!boolx ? (
          <div style={{ height: "40%", marginTop: "4rem" }}>
            <Loader position={"relative"} />
          </div>
        ) : (
          <SaveButton
            title="Personadsdsal Info"
            labels={["No", "Yes"]}
            onClick2={onClick2}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};

export default DraftReqestModal;
