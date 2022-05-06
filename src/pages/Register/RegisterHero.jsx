import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Formhero from "../../components/FormHero/FormHero";
import InputField from "../../components/Inputfield/InputField";
import MyProgress from "../../components/MyProgress/MyProgress";
import Payment from "../../components/Payment/Payment";
import Stepper from "../../components/StepperComponent/Stepper";
import Signup from "./Signup";

const RegisterHero = ({ setSuccessMessage }) => {
  const steps = ["Sign up", "Payment Details", "Thank You"];
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const Form = () =>
    activeStep === 1 ? <Signup next={nextStep} /> : <Payment next={nextStep} />;
  const Confirm = () => (
    <div style={{ textAlign: "center" }}>
      Thanks for the purchase
      <img src="/svg/thankyou.svg" style={{ maxHeight: "350px" }} alt="" />
      <Link to="/dashboard">
        <Button
          buttonColor="gradient"
          buttonSize="btn--large"
          style={{ width: "100%" }}
          // onClick={next}
        >
          Go to Dashboard{" "}
        </Button>
      </Link>
    </div>
  );
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : 
      ( */}
      <Link to="/" className="navbar-logo">
        <img
          src="images/conterize.png"
          style={{
            margin: "30px",
            marginLeft: "0",
            padding: "-100px",
            height: 110,
            position: "absolute",
          }}
          alt=""
        />
      </Link>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* {showModal && (
            <Modal
              isSuccess={true}
              heading="User has been register successfully"
              setOpenModal={setShowModal}
              onClick={() => {
                history("/login");
              }}
            />
          )} */}

        <div
          className="register-fsc-section "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            background:
              "linear-gradient(106.37deg,  rgba(203, 132, 203, 0.148) 29.63%, white 51.55%,rgba(142, 10, 237, 0.101) 90.85%)",
            // filter: "blur(1px)",
            // webkitFilter: "blur(8px)",
          }}
        >
          <MyProgress
            progress={activeStep === 1 ? 33 : activeStep === 2 ? 66 : 100}
            progressClass={
              activeStep === 1
                ? "anim33"
                : activeStep === 2
                ? "anim66"
                : "anim100"
            }
          />
        </div>
        <div
          style={{
            // background: "var(--grey)",
            textAlign: "left",
            padding: "1.5rem",
            height: "95vh",
            width: "40%",
          }}
        >
          <Stepper hrColor={"hrColor"} activeStep={activeStep} />
          <h1 style={{ color: "var(--mypurple)" }}>{steps[activeStep - 1]}</h1>

          {activeStep === 3 ? <Confirm /> : <Form />}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default RegisterHero;