import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = ({ click, handleClick, setClick }) => {
  const [currentLink, setCurrentLink] = useState(1);
  const closeMobileMenu = () => setClick(!click);

  function handleAllClick(linkNumber) {
    setCurrentLink(linkNumber);
    closeMobileMenu();
  }
  return (
    <>
      <div className={click ? "left-section show" : "left-section"}>
        <div className="top">
          <div className="brand">
            {window.innerWidth < 960 && (
              <Icon
                icon="bxs:category"
                style={{ color: "#FF724A", fontSize: "25px" }}
                onClick={handleClick}
              />
            )}
            <Link onClick={handleClick} to="">
              <img
                className="sidebar-logo"
                src="/images/conterize.png"
                alt=""
              />
            </Link>
          </div>
          <div className="links">
            <ul>
              <li
                onClick={() => handleAllClick(1)}
                className={currentLink === 1 ? "active-nav" : "nonactive-nav"}
              >
                <Link to="/dashboard">
                  <Icon icon="bxs:bar-chart-square" hFlip={true} />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(2)}
                className={currentLink === 2 ? "active-nav" : "nonactive-nav"}
              >
                <Link to="/dashboard/request">
                  <Icon icon="eva:edit-2-fill" />
                  <span> Request</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(3)}
                className={currentLink === 3 ? "active-nav" : "nonactive-nav"}
              >
                <Link to="/dashboard/company">
                  <Icon icon="fa6-solid:bag-shopping" />
                  <span> Company</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(4)}
                className={currentLink === 4 ? "active-nav" : "nonactive-nav"}
              >
                <Link to="/dashboard/team">
                  <Icon icon="gridicons:multiple-users" />
                  <span> Team</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(5)}
                className={currentLink === 5 ? "active-nav" : "nonactive-nav"}
              >
                <Link to="/dashboard/settings">
                  <Icon icon="ci:settings-filled" />
                  <span> Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="down">
          <Link to="/dashboard/newrequest">
            <div className="new-request-btn-wrapper">
              <div className="newrequest-container">
                <div className="request-icon-container">
                  <Icon icon="eva:edit-2-fill" />
                </div>
                <h3>New Request</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
