import React from "react";

const NoDataFound = ({ message }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90vw",
          //   zIndex: 9999,
          position: "absolute",
          flexDirection: "column",
        }}
      >
        <img src="/images/dullbaby.png" alt="ds" height={150} />
        <h4>{message ?? "No Data Found!"}</h4>
      </div>
    </>
  );
};

export default NoDataFound;
