import { Icon } from "@iconify/react";
import React from "react";
import "./ProfilePicsComponent.css";
const ProfilePicsComponent = ({ name, isCirclular, userType }) => {
  return (
    <>
      <div
        className={isCirclular ? "prf-container iscircular " : "prf-container "}
      >
        <div
          className={isCirclular ? "pic-wrapper iscircular" : "pic-wrapper "}
        >
          <img src="/svg/avatar.svg" alt="" />
        </div>

        <div
          className="pic-text"
          style={{
            justifyContent: isCirclular && "center",
          }}
        >
          <p
            style={{
              fontWeight: isCirclular ? "normal" : "bold",
              textAlign: "left",
            }}
          >
            {name}
          </p>
          {isCirclular !== true && <span>{userType ?? "User"}</span>}
        </div>
        {isCirclular && ( //if this is a circlular profile pics component show this icon
          <div className="prf-pic-icon">
            <Icon icon="ant-design:caret-up-filled" color="gray" vFlip={true} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePicsComponent;
