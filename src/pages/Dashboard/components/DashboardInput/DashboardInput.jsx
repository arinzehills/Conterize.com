import React from "react";
import "./DashboardInput.css";

const DashboardInput = ({
  name,
  type,
  label,
  style,
  placeholder,
  readOnly,
  value,
  onHandleChange,
  onClick,
  inputSize,
}) => {
  return (
    <>
      <input
        name={name}
        type={type ?? "text"}
        label={label}
        style={style}
        className={`dashboard-input ${inputSize}`}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        onChange={onHandleChange}
        onClick={onClick}
      />
    </>
  );
};

export default DashboardInput;
