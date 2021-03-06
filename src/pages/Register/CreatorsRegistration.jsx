import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import MyProgress from "../../components/MyProgress/MyProgress";
import Stepper from "../../components/StepperComponent/Stepper";
import CreatorsFinish from "./CreatorsFinish";
import Signup from "./Signup";
import Thankyou from "./Thankyou";

const CreatorsRegistration = ({ setSuccessMessage }) => {
  const steps = [
    " Creators Application Page",
    "What's the Role you are interested in?",
    "Thank You",
  ];
  const [activeStep, setActiveStep] = useState(1);
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1); //this is to increase index for the title of the pages
    }
  };

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = ({}) => {
    const initialValues = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const inputValues = [
      formValues.firstname,
      formValues.lastname,
      formValues.email,
      formValues.phone,
      formValues.password,
    ];
    const inputNames = ["firstname", "lastname", "email", "phone", "password"];

    return activeStep === 1 ? (
      <Signup
        next={nextStep}
        type="creators"
        user_type={"content_creator"}
        setFormValues={setFormValues}
        formValues={formValues}
        inputNames={inputNames}
        inputValues={inputValues}
        increaseIndex={increaseIndex}
      />
    ) : (
      <CreatorsFinish
        next={nextStep}
        back={backStep}
        increaseIndex={increaseIndex}
        index={index}
      />
    );
  };

  console.log("index " + index);
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : 
      ( */}
      <Helmet>
        <title>Conterize - Content Creators Registration</title>
      </Helmet>
      <Link to="/" className="navbar-logo">
        <img
          src="images/conterize.png"
          style={{
            margin: window.innerWidth > 960 ? "30px" : "10px",
            marginLeft: "0",
            marginTop: window.innerWidth < 960 ? "4rem" : "1.3rem",
            // padding: "-100px",
            height: 110,
            position: "absolute",
          }}
          alt=""
        />
      </Link>
      <div
        className="reg_section"
        // style={{ display: "block", justifyContent: "space-between" }}
      >
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
          className="reg-fsc-section"
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   width: "60%",
          //   // background:
          //   //   "linear-gradient(106.37deg,  rgba(203, 132, 203, 0.148) 29.63%, white 51.55%,rgba(142, 10, 237, 0.101) 90.85%)",
          //   // filter: "blur(1px)",
          //   // webkitFilter: "blur(8px)",
          // }}
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
          <Stepper
            hrColor={"hrColor"}
            activeStep={activeStep}
            isPayment={false}
          />
          <h1
            style={{
              color: "var(--mypurple)",
              fontSize: window.innerWidth < 960 && 23,
            }}
          >
            {steps[activeStep - 1]}
          </h1>

          {activeStep === 3 ? (
            <Thankyou
              message={"Thanks for the registering on conterize"}
              buttonLabel="Start Earning"
            />
          ) : (
            <Form />
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default CreatorsRegistration;
