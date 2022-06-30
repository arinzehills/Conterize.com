import { Icon } from "@iconify/react";
import "./RequestTable.css";

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
            style={{ marginRight: "-5px" }}
          />
        )}
        {type === "content" && <Icon icon="bxs:bar-chart-square" rotate={1} />}
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
      <p style={{ color: type === "calendar" && "grey", marginLeft: "-10px" }}>
        {title}
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
        height: "auto",
        maxHeight: "26px",
        padding: "5px 5px",
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

export default IconAndName;
export { IconWrapper, StatusWidget };
