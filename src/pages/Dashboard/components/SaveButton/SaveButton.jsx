import React from "react";
import { Button } from "../../../../components/Button/Button";

function SaveButton({ title, labels, firstBtnColor, secondBtnSize, flexWrap }) {
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: window.innerWidth < 763 && "space-between",
          alignItems: "center",
          alignContent: "center",
          flexWrap: flexWrap,
        }}
      >
        <Button
          style={{
            width: "96px",
            height: "43px",
            color: firstBtnColor ?? "grey",
            border: "1px solid #ececec",
            background: "#fff",
          }}
        >
          {labels[0]}
        </Button>
        <Button
          style={{
            width: secondBtnSize ?? "79px",
            height: "43px",
            color: "white",
            // background: "#35438C",
            background: "var(--light-purple)",
          }}
        >
          {labels[1]}
        </Button>
      </div>
    </>
  );
}

export default SaveButton;
