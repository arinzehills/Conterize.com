import { Icon } from "@iconify/react";
import React from "react";
import ProfilePicsComponent from "../../../components/ProfilePicsComponent/ProfilePicsComponent";
import "./RequestTable.css";
const RequestTable = ({ isAdmin, title, data }) => {
  const CaretIcon = () => {
    return (
      <>
        <Icon
          color="grey"
          icon="bxs:up-arrow"
          rotate={2}
          style={{ borderRadius: "10px" }}
        />
      </>
    );
  };
  const IconWrapper = ({ type }) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              type === "content"
                ? "#F25B32"
                : type === "graphics"
                ? "#00C32B"
                : type === "video"
                ? "#00C4F0"
                : "white",
            color: type === "calendar" ? "grey" : "white",
            borderRadius: "50%",
            padding: "5px",
            fontSize: "12px",
          }}
        >
          {type === "calendar" && (
            <Icon
              icon="healthicons:i-schedule-school-date-time"
              fontSize={"20px"}
              color="gray"
            />
          )}
          {type === "content" && (
            <Icon icon="bxs:bar-chart-square" rotate={1} />
          )}
          {type === "graphics" && <Icon icon="fa6-solid:radio" />}
          {type === "video" && <Icon icon="eva:video-fill" />}
        </div>
      </>
    );
  };

  const IconAndName = ({ type, title }) => {
    return (
      <div className="dashboard-card-row">
        <IconWrapper type={type} />
        <p style={{ color: type === "calendar" && "grey" }}>
          {title ?? "title"}
        </p>
      </div>
    );
  };
  const StatusWidget = ({ title, status }) => {
    return (
      <div
        style={{
          display: "flex",
          borderRadius: "20px",
          height: "16px",
          padding: "5px 0",
          textTransform: "uppercase",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "10px",
          fontWeight: "500",
          background:
            status === "active"
              ? "#00c32a59"
              : status === "under review"
              ? "#f25c323e"
              : "var(--grey)",
          color:
            status === "active"
              ? "green"
              : status === "under review"
              ? "#FF724A"
              : "grey",
        }}
      >
        <p>{title ?? "title"}</p>
      </div>
    );
  };
  const requests = [
    {
      requestName: "Content Marketing",
      category: "content",
      assignTo: "Arinze",
      submmitedOn: "20/04/2022",
      status: "active",
    },
    {
      requestName: "Content For Youtube",
      category: "graphics design",
      assignTo: "Arinze",
      submmitedOn: "20/04/2022",
      status: "under review",
    },
    {
      requestName: "Content Ads",
      category: "video",
      assignTo: "Arinze",
      submmitedOn: "20/04/2022",
      status: "archived",
    },
    {
      requestName: "Content For Youtube",
      category: "graphics design",
      assignTo: "Arinze",
      submmitedOn: "20/04/2022",
      status: "under review",
    },
    {
      requestName: "Content Ads",
      category: "video",
      assignTo: "Arinze",
      submmitedOn: "20/04/2022",
      status: "archived",
    },
  ];
  return (
    <>
      <div className="request-tabel-section">
        <h3>{title ?? ""}</h3>

        <table className="request-tabel-container">
          <thead>
            {isAdmin ? (
              <tr>
                {data.th.map((item) => (
                  <th>{item}</th>
                ))}
              </tr>
            ) : (
              <tr>
                <th>#</th>
                <th>
                  Request Name <CaretIcon />
                </th>
                {window.innerWidth > 740 && (
                  <th>
                    Category <CaretIcon />{" "}
                  </th>
                )}
                {window.innerWidth > 740 && (
                  <th>
                    Assign To <CaretIcon />
                  </th>
                )}
                {window.innerWidth > 740 && (
                  <th>
                    Submitted <CaretIcon />
                  </th>
                )}
                <th>
                  Status <CaretIcon />
                </th>
              </tr>
            )}
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={request}>
                {isAdmin ? (
                  <td>
                    <Icon icon="bx:checkbox" color="gray" fontSize={25} />
                  </td>
                ) : (
                  <td>{index + 1}</td>
                )}
                <td>
                  <IconAndName
                    title={"Content Marketing"}
                    type={request.category.split(" ")[0]}
                  />
                </td>
                {window.innerWidth > 740 && <td>{request.category}</td>}
                {window.innerWidth > 740 && (
                  <td>
                    <ProfilePicsComponent name={"Hills"} isCirclular={true} />
                  </td>
                )}
                {window.innerWidth > 740 && (
                  <td>
                    <IconAndName title={"20/04/2022"} type="calendar" />
                  </td>
                )}
                <td>
                  <StatusWidget
                    title={request.status}
                    status={request.status}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequestTable;
