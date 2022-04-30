import React from "react";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import SaveButton from "../components/SaveButton/SaveButton";
import NavComponent from "../NavComponent/NavComponent";

const Settings = () => {
  return (
    <>
      <div>
        <NavComponent pageTitle="Settings" />
        <div className="company-section">
          <div
            className="company-container"
            style={{ width: window.innerWidth > 960 && "110%" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                {"Personal Info"}
              </h3>
              {window.innerWidth > 763 && (
                <SaveButton title="Personal Info" labels={["Cancel", "Save"]} />
              )}
            </div>
            <div className="company-row">
              <div className="company-col">
                {/* goes bottom-to-top */}
                <h3>Person info</h3>
                <DashboardInput />
              </div>
              <div className="company-col">
                <h3>Email</h3>

                <DashboardInput />
              </div>
              <div className="company-col">
                <h3>Time Zone</h3>

                <DashboardInput />
              </div>
            </div>
            {window.innerWidth < 763 && (
              <SaveButton title="Personal Info" labels={["Cancel", "Save"]} />
            )}
          </div>

          <div
            className="company-container"
            style={{ width: window.innerWidth > 960 && "110%" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                {"Change password"}
              </h3>
              {window.innerWidth > 763 && (
                <SaveButton labels={["Cancel", "Save"]} />
              )}
            </div>

            <div className="company-row">
              <div className="company-col">
                {/* goes bottom-to-top */}
                <h3>Old Password</h3>
                <DashboardInput />
              </div>
              <div className="company-col">
                <h3>New Password</h3>

                <DashboardInput />
              </div>
              <div className="company-col">
                <h3>Retype Password</h3>

                <DashboardInput />
              </div>
            </div>
            {window.innerWidth < 763 && (
              <SaveButton title="Personal Info" labels={["Cancel", "Save"]} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
