import React from "react";
import { Button } from "../../components/Button/Button";
import InputField from "../../components/Inputfield/InputField";
import Stepper from "../../components/StepperComponent/Stepper";

const Signup = ({ type, next, increaseIndex }) => {
  const nextStep = () => {
    next();
    increaseIndex();
  };
  return (
    <>
      {/* <img src="/images/conterize.png" height={"120px"} alt="" />
       */}
      <div
        className="name-container"
        style={{
          display: "flex",
          lineHeight: 0,
          transition: "all 1.2s ease-in-out",
        }}
      >
        <div>
          <h3>First Name</h3>
          <InputField
            inputStyle="input--outline"
            style={{ width: "230px" }}
            label="Enter first name"
          />
        </div>
        <div>
          <h3>Last Name</h3>
          <InputField
            inputStyle="input--outline"
            style={{
              width: "230px",

              marginLeft: "15px",
            }}
            label="Enter last name"
          />
        </div>
      </div>
      <h3>Email Address</h3>
      <InputField
        inputStyle="input--outline"
        label="Enter email address"
        // style={{ width: "93.5%" }}
      />
      {type === "creators" && <h3>Phone Number</h3>}
      {type === "creators" && (
        <InputField
          label="Enter phone number"
          inputStyle="input--outline"
          // style={{ width: "93.5%" }}
        />
      )}
      <h3>Password</h3>
      <InputField
        label="Enter password"
        inputStyle="input--outline"
        // style={{ width: "93.5%" }}
      />
      <Button
        buttonColor="gradient"
        buttonSize="btn--large"
        style={{ width: "100%" }}
        onClick={nextStep}
      >
        NEXT{" "}
      </Button>
      {/* <Formhero
            {...homeData}
            handleChange={handleChange}
            onSubmit={onSubmit}
            formErrors={inputErrors}
            responseError={responseError}
          /> */}
    </>
  );
};

export default Signup;
