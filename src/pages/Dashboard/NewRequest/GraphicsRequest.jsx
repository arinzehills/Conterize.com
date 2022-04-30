import React from "react";
import { Button } from "../../../components/Button/Button";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import SaveButton from "../components/SaveButton/SaveButton";

const GraphicsRequest = () => {
  return (
    <>
      <div className="request-header">Graphic Request</div>
      <div className="request-section">
        <div className="request-first-container">
          <h3>pick your name for your graphics Design </h3>
          <DashboardInput style={{ width: "100%" }} placeholder="Select Type" />
          <h3>Design Type </h3>
          <DashboardInput style={{ width: "100%" }} placeholder="Select Type" />
          <h3>Quantity </h3>
          <DashboardInput
            style={{ width: "100%" }}
            placeholder="Type here or select"
          />
          <h3>Dimension </h3>
          <DashboardInput
            style={{ width: "100%" }}
            placeholder="Type here or select"
          />
          <h3>Examples or Refrence Links </h3>
          <DashboardInput
            style={{ width: "100%" }}
            placeholder="Type here or select"
          />
          <h3>Descriptions </h3>
          <DashboardInput
            style={{ width: "100%", height: "70px" }}
            placeholder="Type here..."
          />
          <h3>Text </h3>
          <DashboardInput
            style={{ width: "100%" }}
            placeholder="type here..."
          />
        </div>
        <div
          className="div"
          style={{ width: window.innerWidth < 960 && "100%" }}
        >
          <div className="request-scn-container">
            <h3>supporting info</h3>
            <DashboardInput
              style={{ width: "100%", height: "70px" }}
              placeholder="type here..."
            />
            <h3>Supporting materials </h3>
            <DashboardInput style={{ width: "100%" }} />
          </div>
          <div
            className="div"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              style={{
                width: "96px",
                height: "43px",
                color: "grey",
                border: "1px solid #ececec",
                background: "#fff",
              }}
            >
              {"Back"}
            </Button>
            <SaveButton
              labels={["Draft", "Request Now"]}
              secondBtnSize="auto"
              firstBtnColor="#35438C"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicsRequest;
