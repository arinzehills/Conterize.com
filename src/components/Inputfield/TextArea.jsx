import React from "react";

function TextArea() {
  return (
    <>
      <textarea
        className="purple-input ipn--medium"
        name="Text1"
        cols="40"
        rows="5"
        style={{ borderRadius: "10px", padding: "10px 0px 0px 10px" }}
        placeholder="Message..."
      ></textarea>
    </>
  );
}

export default TextArea;
