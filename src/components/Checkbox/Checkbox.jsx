import React from "react";
import "./Checkbox.css";
const Checkbox = ({ label }) => {
  return (
    <div style={{ marginTop: "0.4rem" }}>
      <label>
        <input type="checkbox" />
        {label ?? "My Value"}
      </label>
    </div>
  );
};

export default Checkbox;
