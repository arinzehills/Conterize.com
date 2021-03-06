import { Icon } from "@iconify/react";
import React from "react";
import DashboardInput from "../../pages/Dashboard/components/DashboardInput/DashboardInput";
import { Button } from "../Button/Button";

const InputWithIcon = ({
  inputData,
  name,
  onHandleChange,
  iconName,
  onClickIcon,
  inputkey,
  inputType,
  ref,
  value,
  inputHeight,
  showbtn,
}) => {
  return (
    <>
      <div
        key={inputkey}
        style={{
          display: "flex",
          width:
            window.innerWidth < 660
              ? "109%"
              : window.innerWidth < 960
              ? "105%"
              : "107%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DashboardInput
          type={inputType}
          {...inputData}
          name={name}
          style={{ width: "100%", height: inputHeight ?? 50 }}
          onHandleChange={onHandleChange}
          ref={ref}
          value={value}
        ></DashboardInput>

        <div
          style={{
            position: "relative",
            right: window.innerWidth < 680 ? 40 : 30,
            color: "#93939B",
            fontSize: 24,

            // zIndex: -0,
            // display: "none",
          }}
        >
          {showbtn ? (
            <Button>Upload File</Button>
          ) : (
            <Icon
              icon={iconName ?? "fa-solid:file-upload"}
              onClick={onClickIcon}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default InputWithIcon;
