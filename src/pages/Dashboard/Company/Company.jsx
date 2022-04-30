import React from "react";
import "./Company.css";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import NavComponent from "../NavComponent/NavComponent";
import SaveButton from "../components/SaveButton/SaveButton";
import { useOutletContext } from "react-router-dom";

const Company = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  return (
    <>
      <div>
        <NavComponent pageTitle="Company" handleClick={handleClick} />
        {/* <DashboardInput inputSize="width-495" /> */}
        <div className="company-section">
          <div className="company-container">
            <div className="company-row">
              {/* goes left-to-right */}
              <div className="company-col">
                {/* goes bottom-to-top */}
                <h3>Company Name</h3>
                <DashboardInput inputSize="width-353  " />
              </div>
              <div className="company-col">
                <h3>Industry</h3>

                <DashboardInput inputSize="width-353  " />
              </div>
              <div className="company-col">
                <h3>Website URL</h3>

                <DashboardInput inputSize="width-353  " />
              </div>
            </div>
            <div className="company-row">
              {/* goes left-to-right */}
              <div className="company-col">
                {/* goes bottom-to-top */}
                <h3>Facebook</h3>
                <DashboardInput inputSize="width-353  " />
              </div>
              <div className="company-col">
                <h3>Twitter</h3>

                <DashboardInput inputSize="width-353  " />
              </div>
              <div className="company-col">
                <h3>Instagram</h3>

                <DashboardInput inputSize="width-353  " />
              </div>
            </div>
            <div className="company-row" style={{ boxSizing: "content-box" }}>
              {/* goes left-to-right */}
              <div className="company-col" style={{ boxSizing: "content-box" }}>
                {/* goes bottom-to-top */}
                <h3>Short Description About Your Business</h3>
                <DashboardInput inputSize="width-353  " />
              </div>
              <div className="company-col" style={{ boxSizing: "content-box" }}>
                <h3>What are your target audience</h3>

                <DashboardInput inputSize="width-353  " />
              </div>
              <div className="company-col" style={{ boxSizing: "content-box" }}>
                <h3>Additional Info for Content Creators</h3>

                <DashboardInput inputSize="width-353  " />
              </div>
            </div>
            <SaveButton labels={["Back", "Save"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
