import React from "react";
import { Button } from "../../../../components/Button/Button";

function SaveButton({
  title,
  labels,
  onClick,
  onClick2,
  firstBtnColor,
  secondBtnSize,
  secondBtnColor,
  flexWrap,
}) {
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
          onClick={onClick2}
        >
          {labels[0]}
        </Button>
        <Button
          onClick={onClick}
          style={{
            width: secondBtnSize ?? "79px",
            height: "43px",
            color: "white",
            // background: "#35438C",
            background: secondBtnColor ?? "var(--light-purple)",
          }}
        >
          {labels[1]}
        </Button>
      </div>
    </>
  );
}

export default SaveButton;
