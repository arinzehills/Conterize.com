import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import MyProgress from "../../components/MyProgress/MyProgress";
import Payment from "../../components/Payment/Payment";
import Stepper from "../../components/StepperComponent/Stepper";
import Signup from "./Signup";
import Thankyou from "./Thankyou";
import StripeContainer from "../../components/Payment/StripeContainer";
function Register() {
  const location = useLocation();
  console.log(location.state.item);
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

  const inputValues = [
    formValues.firstname,
    formValues.secondname,
    formValues.email,
    formValues.password,
  ];

  const inputNames = ["firstname", "secondname", "email", "password"];
  const inputErrors = [
    formErrors.firstname,
    formErrors.secondname,
    formErrors.email,
    formErrors.password,
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trimLeft().trimRight() });

    console.log(formValues);
    // console.log(e.target)
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value.trimLeft().trimRight() });

  //   console.log(formValues);
  //   // console.log(e.target);
  // };
  console.log(inputValues);
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  //   console.log(formValues);
  //   console.log(loading);
  // };
  // useEffect(() => {
  //   // setLoading(true)
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);

  //     register();
  //   }
  // }, [formErrors]);
  // const register = async () => {
  //   setLoading(true);
  //   // const errors={}
  //   const data = {
  //     name: formValues.name,
  //     email: formValues.email,
  //     password: formValues.password,
  //   };
  //   // const url="http://localhost/buyenergy_api/public/api/register";
  //   const url = window.baseUrl + "register";
  //   fetch(url, {
  //     // credentials: 'include
  //     // Authorization:'http://localhost:8000/api/user',
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       // 'Authorization': 'http://localhost:8000/api/user',
  //     },
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // console.log( data['token']);

  //       if (data["success"] === true) {
  //         const token = data["token"];
  //         console.log(token);
  //         // history('/login')
  //         // setToken(token)
  //         setShowModal(true);
  //         setLoading(false);
  //       } else {
  //         const error = data["email"][0];
  //         console.log(error);
  //         setResponseError(error);
  //         setLoading(false);
  //       }
  //       // console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.warn("Error:", error);

  //       setLoading(false);
  //     });
  // };
  // const validate = (values) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "Please enter a valid email address";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   }

  //   return errors;
  // };

  const steps = [
    "Sign up",
    `Payment Details(${location.state.item.price})`,
    "Thank You",
  ];
  const [activeStep, setActiveStep] = useState(1);

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
