import React from "react";
import "./Checkbox.css";
const Checkbox = ({ name, label, handleChange, value }) => {
  // console.log(value);
  return (
    <div style={{ marginTop: "0.4rem" }}>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={handleChange}
        />
        {label ?? "My Value"}
      </label>
    </div>
  );
};

export default Checkbox;
