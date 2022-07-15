import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "../Button/Button";

const NotPermittedComponent = () => {
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
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
            Sorry u have not completed your subscription
            <Icon icon="bx:error-alt" />
            <Icon icon="carbon:incomplete-error" />
          </div>
          <div>
            <Button buttonColor={"blue"} buttonSize="btn--small">
              Complete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotPermittedComponent;
