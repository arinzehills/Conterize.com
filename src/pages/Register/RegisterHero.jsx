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
import Thankyou from "./Thankyou";

const RegisterHero = ({ setSuccessMessage }) => {
  const steps = ["Sign up", "Payment Details", "Thank You"];
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const Form = () =>
    activeStep === 1 ? (
      <Signup next={nextStep} />
    ) : (
      <Payment next={nextStep} back={backStep} activeStep={activeStep} />
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
            margin: window.innerWidth > 960 ? "30px" : "10px",
            marginLeft: "0",
            marginTop: window.innerWidth < 960 ? "4rem" : "1.3rem",
            height: 110,
            position: "absolute",
          }}
          alt=""
        />
      </Link>
      <div className="reg_section">
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
          className="reg-fsc-section "
          style={
            {
              // filter: "blur(1px)",
              // webkitFilter: "blur(8px)",
            }
          }
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
          className="reg-sec-section"
          style={{
            // background: "var(--grey)",
            textAlign: "left",
            padding: "1.5rem",
            height: "95vh",
          }}
        >
          <Stepper hrColor={"hrColor"} activeStep={activeStep} />
          <h1 style={{ color: "var(--mypurple)" }}>{steps[activeStep - 1]}</h1>

          {activeStep === 3 ? (
            <Thankyou message={"Thanks for the purchase"} />
          ) : (
            <Form />
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default RegisterHero;
