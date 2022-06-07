import { Icon } from "@iconify/react";
import React from "react";
import ProfilePicsComponent from "../../../components/ProfilePicsComponent/ProfilePicsComponent";
import useUser from "../../../useUser";
import "./NavComponent.css";

function NavComponent({
  personsName,
  pageTitle,
  handleClick,
  showNotification,
}) {
  const { user, setUser } = useUser();
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
              src="/images/conterize.png"
              alt=""
            />
          </>
        )}
        <div className="nav-title-wrapper">
          {window.innerWidth > 960 && <h2>{pageTitle ?? "Dashboard"}</h2>}
        </div>
        {window.innerWidth > 960 && (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {showNotification && (
              <Icon
                icon="carbon:notification-new"
                color="gray"
                fontSize="22px"
              />
            )}
            <ProfilePicsComponent
              name={personsName ?? user?.["firstname"]}
              isCirclular={true}
              size="120px"
            />
          </div>
        )}
        {window.innerWidth < 960 && (
          <div className="nav-profile-wrapper">
            <img src="/svg/avatar.svg" style={{ height: 20 }} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default NavComponent;
