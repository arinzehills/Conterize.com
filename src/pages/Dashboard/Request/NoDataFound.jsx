import React from "react";

const NoDataFound = ({ message, showpositionClass }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70vw",
          zIndex: 0,
          // showposition position: "relative",
          flexDirection: "column",
        }}
        // className={showpositionClass === false ? "" : "positionClass"}
      >
        <img src="/images/dullbaby.png" alt="ds" height={150} />
        <h4>{message ?? "No Data Found!"}</h4>
      </div>
    </>
  );
};

export default NoDataFound;
