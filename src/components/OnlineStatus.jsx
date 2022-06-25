import { Icon } from "@iconify/react";
import React from "react";
import "./OnlineStatus.css";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { HiOutlineStatusOffline } from "react-icons/hi";
const OnlineStatus = ({ value }) => {
  return (
    <>
      <div className="online_status_wrapper">
        {value === "Offline" ? (
          <div className={"online_status offline"}>
            <HiOutlineStatusOffline icon="carbon:user-online" fontSize={"18"} />

            {value}
          </div>
        ) : (
          <div className={"online_status online"}>
            <MdOutlineOnlinePrediction
              icon="carbon:user-online"
              fontSize={"18px"}
            />
            {value}
          </div>
        )}
      </div>
    </>
  );
};

export default OnlineStatus;
