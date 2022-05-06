import React from "react";
import { Button } from "../Button/Button";

const Payment = ({ next }) => {
  return (
    <>
      <div>
        Payment
        <Button
          buttonColor="gradient"
          buttonSize="btn--large"
          style={{ width: "100%" }}
          onClick={next}
        >
          Complete{" "}
        </Button>
      </div>
    </>
  );
};

export default Payment;
