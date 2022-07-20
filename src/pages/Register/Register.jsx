import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import MyProgress from "../../components/MyProgress/MyProgress";
import Payment from "../../components/Payment/Payment";
import Stepper from "../../components/StepperComponent/Stepper";
import Signup from "./Signup";
import Thankyou from "./Thankyou";
import StripeContainer from "../../components/Payment/StripeContainer";
import { Helmet } from "react-helmet";
function Register() {
  const location = useLocation();
  console.log(location.state.isRegisteredUser);
  const initialValues = {
    firstname: "",
    secondname: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [responseError, setResponseError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useNavigate();
  const errors = {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trimLeft().trimRight() });

    console.log(formValues);
    // console.log(e.target)
  };
  const steps = [
    "Sign up",
    `Payment Details(${location.state.item.price})`,
    "Thank You",
  ];
  const [activeStep, setActiveStep] = useState(
    location.state.isRegisteredUser ? 2 : 1
  );

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const Form = () => {
    const initialValues = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const inputValues = [
      formValues.firstname,
      formValues.lastname,
      formValues.email,
      formValues.password,
    ];
    const inputNames = ["firstname", "lastname", "email", "password"];

    return activeStep === 1 ? (
      <Signup
        next={nextStep}
        setFormValues={setFormValues}
        formValues={formValues}
        inputNames={inputNames}
        inputValues={inputValues}
        handleChange={handleChange}
        user_type="business_user"
      />
    ) : (
      <StripeContainer
        next={nextStep}
        back={backStep}
        activeStep={activeStep}
        planData={location.state.item}
      />
      // <Payment next={nextStep} back={backStep} activeStep={activeStep} />
    );
  };

  return (
    <>
      <Helmet>
        <title>Conterize - Registration</title>
        <meta name="description" content="Conterize Registration Page" />
      </Helmet>
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
            <Thankyou message={"You have successfully subscribe! thank you!"} />
          ) : (
            <Form />
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default Register;
