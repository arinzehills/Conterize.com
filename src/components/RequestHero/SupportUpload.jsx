import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "../Button/Button";

const SupportUpload = ({ onClickBtn }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          // height: 70,
          display: "flex",
          alignItems: "center",
          border: "2px dashed #ececec",
          lineHeight: 1.1,
          color: "grey",
          padding: "0.3rem 0 1rem 0.5rem",
        }}
      >
        <Button
          buttonStyle={"btn--outline"}
          style={{ display: "flex", alignItems: "center" }}
          onClick={onClickBtn}
        >
          <Icon icon="akar-icons:circle-plus-fill" fontSize={23} />
          Upload File
        </Button>
        <p>click to upload a file that your creator will use</p>
      </div>
    </>
  );
};

export default SupportUpload;
