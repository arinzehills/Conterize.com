import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ProfilePicsComponent from "../../../components/ProfilePicsComponent/ProfilePicsComponent";
import NavComponent from "../NavComponent/NavComponent";
import RequestTable from "../Request/RequestTable";
import "./Home.css";
import { useOutletContext } from "react-router-dom";
import { Calendar } from "react-calendar";

const IconWrapper = ({ type, IconPadding, iconFontSize }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            type === "content"
              ? "#f25c3240"
              : type === "graphics"
              ? "#00c32a3e"
              : type === "video"
              ? "#00c4f03d"
              : "#35448c36",
          // color: type === "request" ? "grey" : "white",
          color:
            type === "content"
              ? "#F25B32"
              : type === "graphics"
              ? "#00C32B"
              : type === "video"
              ? "#00C4F0"
              : "var(--dashboard-dark-blue)",
          borderRadius: "50%",
          padding: IconPadding ?? "5px",
          fontSize: iconFontSize ?? "12px",
        }}
      >
        {type === "request" && (
          <Icon borderRadius="1em" icon="bxs:bar-chart-square" />
        )}
        {type === "content" && <Icon icon="bxs:bar-chart-square" rotate={1} />}
        {type === "graphics" && <Icon icon="fa6-solid:radio" />}
        {type === "video" && <Icon icon="eva:video-fill" />}
      </div>
    </>
  );
};

const DashboardCard = ({ title, value, color, type }) => {
  return (
    <div className="dashboard-card">
      <div
        className="dashboard-card-row"
        style={{
          color:
            type === "content"
              ? "#F25B32"
              : type === "graphics"
              ? "#00C32B"
              : type === "video"
              ? "#00C4F0"
              : "var(--dashboard-dark-blue)",
          fontWeight: "500",
        }}
      >
        <IconWrapper type={type ?? "content"} />
        <p style={{ fontSize: "24px" }}>{value ?? "value"}</p>
      </div>
      <h3
        style={{
          color: "grey",
          fontWeight: "500",
          fontSize: window.innerWidth < 960 ? "10px" : "16px",
          textTransform: "capitalize",
        }}
      >
        {title ?? "title"}
      </h3>
    </div>
  );
};
const IconAndName = ({ type, title, quantity }) => {
  return (
    <div
      className="dashboard-card-row"
      style={{
        gap: "0",
        marginTop: "1rem",
        textAlign: "left",
        textOverflow: "clip",
      }}
    >
      <IconWrapper type={type} iconFontSize="20px" IconPadding="15px" />
      <div
        className="pic-text" //this comes from profilepicscomponent
        style={{
          textOverflow: "clip",
          display: "flex",
          justifyContent: "left",
          alignItems: "flex-start",
        }}
      >
        <p
          style={{
            fontWeight: "500",
            color: "black",
            textOverflow: "clip",
          }}
        >
          {title ?? "title"}
        </p>
        {<span>{quantity ?? 23}</span>}
      </div>
    </div>
  );
};
const RequestProgressCard = ({ title, value }) => {
  return (
    <div
      //  style={{ width: "auto" }}
      className="request-progress-container"
    >
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
      <IconAndName type={"content"} title="Write articles..." />
      <IconAndName type={"graphics"} title="Design social ..." />
      <IconAndName type={"video"} title="Create explainer..." />
    </div>
  );
};

const Home = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  // console.log(name);
  return (
    <>
      <NavComponent handleClick={handleClick} />
      <div className="home">
        <div className="dashboard-wrapper">
          <div className="dash-fst-container">
            {/* the first row for dashboard */}
            <div className="greetings-and-card-wrapper">
              <div className="greetings-wrapper">
                <div className="greetings-text">
                  <h2 color="var(--dark-blue)">Good Evening, Hills</h2>
                  <p>
                    you have 4 draft to complete. Do you need help in requesting
                    content? Invite team members or contact your content
                    director to assist you.
                  </p>
                </div>
                <div className="greetings-img">
                  <img src="/svg/womandashboard.svg" alt="" />
                </div>
              </div>
              <div className="dash-card_wrapper">
                <DashboardCard
                  type={"request"}
                  title={"Total request"}
                  value={"123"}
                />
                <DashboardCard
                  type={"content"}
                  title={"Content Writing"}
                  value={"12"}
                />
                <DashboardCard
                  type={"graphics"}
                  title={"Graphics Design"}
                  value={"13"}
                />
                <DashboardCard
                  type={"video"}
                  title={"Video creation"}
                  value={"23"}
                />
              </div>
            </div>
            <RequestProgressCard />
          </div>
          <div className="dash-sec-container">
            {/* second row for dashboard */}
            <RequestTable title={"Draft Request"} />
            {/* <Calendar
              onChange={onChange}
              value={date}
              style={{ width: "20px" }}
            /> */}
          </div>
          {/* <Calendar
            onChange={onChange}
            value={date}
            style={{ width: "20px" }}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
