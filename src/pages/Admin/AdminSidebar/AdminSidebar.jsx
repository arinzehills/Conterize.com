import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfilePicsComponent from "../../../components/ProfilePicsComponent/ProfilePicsComponent";
import "./AdminSidebar.css";
const AdminSidebar = ({ click, handleClick, setClick }) => {
  const [currentLink, setCurrentLink] = useState(1);
  const closeMobileMenu = () => setClick(!click);

  function handleAllClick(linkNumber) {
    setCurrentLink(linkNumber);
    closeMobileMenu();
  }
  return (
    <>
      <div
        className={click ? "left-section show" : "left-section"}
        style={{ background: "var(--dashboard-dark-blue)" }}
      >
        <div className="top">
          <div
            // className="brand"
            style={{
              background: "white",
              width: "19em",
              height: "70px",
              marginTop: "-1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
          <ProfilePicsComponent isCirclular={true} name="Admin " />
          <div className="links">
            <ul>
              <li
                onClick={() => handleAllClick(1)}
                className={
                  currentLink === 1 ? "active-nav" : "admin-nonactive-nav"
                }
              >
                <Link to="/admin">
                  <Icon icon="bxs:bar-chart-square" hFlip={true} />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(2)}
                className={
                  currentLink === 2 ? "active-nav" : "admin-nonactive-nav"
                }
              >
                <Link to="/admin">
                  <Icon icon="fa6-solid:people-carry-box" />
                  <span> Freelancers</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(3)}
                className={
                  currentLink === 3 ? "active-nav" : "admin-nonactive-nav"
                }
              >
                <Link to="/admin/customers">
                  <Icon icon="bi:people" />
                  <span> Customers</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(4)}
                className={
                  currentLink === 4 ? "active-nav" : "admin-nonactive-nav"
                }
              >
                <Link to="/admin/orders">
                  <Icon icon="bx:cart" />
                  <span> Orders</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(5)}
                className={
                  currentLink === 5 ? "active-nav" : "admin-nonactive-nav"
                }
              >
                <Link to="/admin/managerdiscount">
                  <Icon icon="fa:shopping-bag" />
                  <span> Manager Discount</span>
                </Link>
              </li>
              <li
                onClick={() => handleAllClick(6)}
                className={
                  currentLink === 6 ? "active-nav" : "admin-nonactive-nav"
                }
              >
                <Link to="/admin/settings">
                  <Icon icon="ci:settings-filled" />
                  <span> Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="down">
          <Link to="/dashboard/newrequest">
            <div
              //   className="new-request-btn-wrapper"
              onClick={{ closeMobileMenu }}
            >
              <div
                className="newrequest-container"
                style={{ flexDirection: "row", height: "30px" }}
              >
                <div
                  className="request-icon-container"
                  style={{ marginRight: "30px" }}
                >
                  <Icon icon="ic:twotone-logout" />
                </div>
                <h3>Log out</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
