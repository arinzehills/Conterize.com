import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

const NotPermittedComponent = ({ type, setShowPermissionModal, message }) => {
  const history = useNavigate();
  const isRegisteredUser = "chds";
  return (
    <>
      <div style={{ paddingBottom: "2rem" }}>
        <div
          style={{
            background: "var(--danger)",
            color: "white",
            width: "100%",
            padding: "0.3rem",
            position: "fixed",
            //   marginBottom: "1em",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              {message ??
                "Sorry u have not completed your subscription,Complete to start placing request"}
              {type === "payment" ? (
                <Icon icon="carbon:incomplete-error" fontSize={"25px"} />
              ) : (
                <Icon icon="bx:error-alt" fontSize={"25px"} />
              )}
            </div>
            <div>
              {type === "payment" ? (
                <Button
                  buttonColor={"blue"}
                  buttonSize="btn--small"
                  onClick={() =>
                    history("/pricing", {
                      state: {
                        isRegisteredUser: true,
                      },
                    })
                  }
                >
                  Complete
                </Button>
              ) : (
                <Button
                  buttonColor={"blue"}
                  buttonSize="btn--small"
                  style={{ width: "auto" }}
                >
                  Contact Admin
                </Button>
              )}
            </div>
          </div>
          <div onClick={() => setShowPermissionModal(false)}>
            <Icon icon="akar-icons:circle-x-fill" fontSize={"20px"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotPermittedComponent;
