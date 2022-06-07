import { Icon } from "@iconify/react";
import React from "react";
import DashboardInput from "../../pages/Dashboard/components/DashboardInput/DashboardInput";

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
          style={{ width: "100%", height: 50 }}
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
          <Icon
            icon={iconName ?? "fa-solid:file-upload"}
            onClick={onClickIcon}
          />
        </div>
      </div>
    </>
  );
};

export default InputWithIcon;
