import React from "react";
import { IconWrapper } from "../Request/IconsWidget";

const DashbaordCardContainer = ({ user_type }) => {
  const DashboardCard = ({ title, value, color, type, width }) => {
    return (
      <div className="dashboard-card" style={{ width: width }}>
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
  return (
    <>
      {user_type === "business_user" ? (
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
          <DashboardCard type={"video"} title={"Video creation"} value={"23"} />
        </div>
      ) : (
        <div className="dash-card_wrapper">
          <DashboardCard
            type={"content"}
            title={"Total request"}
            value={"12"}
            width="110px"
          />
          <DashboardCard
            type={"graphics"}
            title={"Completed"}
            value={"13"}
            width="110px"
          />
          <DashboardCard
            type={"video"}
            title={"Ongoing"}
            value={"23"}
            width="110px"
          />
        </div>
      )}
    </>
  );
};

export default DashbaordCardContainer;
