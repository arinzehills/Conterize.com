import { Icon } from "@iconify/react";
import React from "react";
import ProfilePicsComponent from "../../../components/ProfilePicsComponent/ProfilePicsComponent";
import NavComponent from "../NavComponent/NavComponent";
import "./Home.css";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-row">
        <Icon icon="bxs:bar-chart-square" hFlip={true} />
        <p>{value ?? "value"}</p>
      </div>
      <h3 style={{ color: "grey", fontWeight: "normal" }}>
        {title ?? "title"}
      </h3>
    </div>
  );
};
const RequestProgressCard = ({ title, value }) => {
  return (
    <div style={{}} className="request-progress-container">
      <div className="rqs-header-wrapper">
        <h4>Profile</h4>
        <div
          //this is div for icon
          className="alarm-icon"
          style={{
            background: "var(--blue-grey)",
            borderRadius: "50%",
            padding: "0.3rem",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            color: "grey",
            fontSize: "13px",
          }}
        >
          <Icon icon="clarity:notification-outline-badged" />
        </div>
      </div>
      <ProfilePicsComponent name="cjrsds" />
      <h4>Request in progress</h4>
      <ProfilePicsComponent name="cjrsds" />
      <ProfilePicsComponent name="cjrsds" />
      <ProfilePicsComponent name="cjrsds" />
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="dashboard-wrapper">
          <div className="dash-fst-container">
            {/* the first column for dashboard */}
            <div className="greetings-wrapper">
              <div className="greetings-text">
                <h2 color="var(--dark-blue)">Good Evening, Hills</h2>
                <p>
                  you have 4 draft to complete. Do you need help in requesting
                  content? Invite team members or contact your content director
                  to assist you.
                </p>
              </div>
              <div className="greetings-img">
                <img src="svg/womandashboard.svg" alt="" />
              </div>
            </div>
            <div className="dash-card_wrapper">
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
            </div>
          </div>
          <div className="dash-sec-container">
            <RequestProgressCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
