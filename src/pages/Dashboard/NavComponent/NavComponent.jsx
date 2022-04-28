import { Icon } from "@iconify/react";
import React from "react";
import ProfilePicsComponent from "../../../components/ProfilePicsComponent/ProfilePicsComponent";
import "./NavComponent.css";

function NavComponent({ pageTitle, handleClick }) {
  return (
    <>
      <div className="nav-cmpt-section">
        {window.innerWidth < 960 && (
          <>
            <Icon
              icon="bxs:category"
              style={{ color: "grey", fontSize: "20px" }}
              onClick={handleClick}
            />
            <img
              className="sidebar-logo"
              style={{ height: 60 }}
              src="images/conterize.png"
              alt=""
            />
          </>
        )}
        <div className="nav-title-wrapper">
          {window.innerWidth > 960 && <h2>{pageTitle ?? "Dashboard"}</h2>}
        </div>

        {window.innerWidth > 960 && (
          <ProfilePicsComponent name="Arinze" isCirclular={true} />
        )}
        {window.innerWidth < 960 && (
          <div className="nav-profile-wrapper">
            <img src="svg/avatar.svg" style={{ height: 20 }} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default NavComponent;
