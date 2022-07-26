import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Button } from "../../../components/Button/Button";
import "./NewRequest.css";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import NavComponent from "../NavComponent/NavComponent";
import Modal from "../../../components/Modal/Modal";
import DraftReqestModal from "../../../components/RequestHero/DraftReqestModal";
import useUser from "../../../useUser";

const NewRequest = ({ setHandleNotData }) => {
  const navigate = useNavigate();
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const { user, setUser } = useUser();

  const checkUserStatus = (pageType) => {
    user?.payment_status === "unpaid"
      ? setShowAssignModal(true)
      : navigate("/dashboard/" + pageType);
  };
  return (
    <>
      <NavComponent
        handleClick={handleClick}
        pageTitle={"New Request"}
        setHandleNotData={setHandleNotData}
      />
      {showAssignModal && (
        <DraftReqestModal
          message={
            "Sorry you can't place a request yet. You need to subscribe" +
            "to a plan before you can start placing content requests."
          }
          draftModalHeight={400}
          draftModalWidth={300}
          seconBtnLabel="Choose Plan"
          seconBtnSize="115px"
          setOpenModal={setShowAssignModal}
          onClick={() =>
            navigate("/pricing", {
              state: {
                isRegisteredUser: true,
              },
            })
          }
        />
      )}
      <div className="new-request-section">
        <div className="new-request-container">
          <h2>Select You Request type</h2>
          <div className="new-request-body">
            <img src="/images/dullbaby.png" alt="" />

            <div className="new-request-btn">
              <Button
                style={{
                  width: "295px",
                  color: "white",
                  background: "var(--dashboard-dark-blue)",
                }}
                onClick={() => checkUserStatus("contentrequest")}
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
              <Button
                style={{
                  width: "295px",
                  color: "white",
                  background: "#ff724a",
                }}
                onClick={() => checkUserStatus("graphicsrequest")}
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
                  onClick={() => checkUserStatus("videorequest")}
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
