import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "../../../components/Button/Button";
import "./NewRequest.css";
import { Link, useNavigate } from "react-router-dom";

const NewRequest = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="new-request-section">
        <div className="new-request-container">
          <h2>Select You Request type</h2>
          <div className="new-request-body">
            <img src="/images/dullbaby.png" alt="" />

            <div className="new-request-btn">
              <Link to="/dashboard/contentrequest">
                <Button
                  style={{
                    width: "295px",
                    color: "white",
                    background: "var(--dashboard-dark-blue)",
                  }}
                  // onClick={() => navigate("/dashboard/contentrequest")}
                >
                  <div
                    className="request-inner-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "11px",
                      justifyContent: "center",
                    }}
                  >
                    Content Creation{" "}
                    <Icon
                      icon="bi:arrow-down-circle-fill"
                      color="white"
                      rotate={3}
                    />
                  </div>
                </Button>
              </Link>
              <Button
                style={{
                  width: "295px",
                  color: "white",
                  background: "#ff724a",
                }}
                onClick={() => navigate("/dashboard/graphicsrequest")}
              >
                <div
                  className="request-inner-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "11px",
                    justifyContent: "center",
                  }}
                >
                  Graphics Design{" "}
                  <Icon
                    icon="bi:arrow-down-circle-fill"
                    color="white"
                    rotate={3}
                  />
                </div>
              </Button>
              <Button style={{ width: "295px" }} buttonColor="gradient">
                <div
                  className="request-inner-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "11px",
                    justifyContent: "center",
                  }}
                  onClick={() => navigate("/dashboard/videorequest")}
                >
                  Video Creation{" "}
                  <Icon
                    icon="bi:arrow-down-circle-fill"
                    color="white"
                    rotate={3}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRequest;
