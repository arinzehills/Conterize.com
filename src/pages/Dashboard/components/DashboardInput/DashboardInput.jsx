import React from "react";
import "./DashboardInput.css";

const DashboardInput = ({
  name,
  type,
  label,
  style,
  readOnly,
  value,
  onHandleChange,
  onClick,
  inputSize,
  ref,
}) => {
  return (
    <>
      <input
        name={name}
        type={type ?? "text"}
        style={style}
        className={`dashboard-input ${inputSize}`}
        placeholder={label}
        readOnly={readOnly}
        value={value}
        onChange={onHandleChange}
        onClick={onClick}
        ref={ref}
      />
    </>
  );
};

export default DashboardInput;
