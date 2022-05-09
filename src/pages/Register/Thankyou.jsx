import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

const Thankyou = ({ message, buttonLabel }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {message}
      <img src="/svg/thankyou.svg" style={{ maxHeight: "350px" }} alt="" />
      <Link to="/dashboard">
        <Button
          buttonColor="gradient"
          buttonSize="btn--large"
          style={{ width: "100%" }}
          // onClick={next}
        >
          {buttonLabel ?? "Go to Dashboard "}
        </Button>
      </Link>
    </div>
  );
};

export default Thankyou;
