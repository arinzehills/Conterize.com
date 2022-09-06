import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Formhero from "../../components/Formhero/Formhero";
import AddTeam from "../../pages/Dashboard/Team/AddTeam";
import useUser from "../../useUser";
import { Button } from "../Button/Button";
import ForgotPasswordHero from "../ForgotPasswordHero/ForgotPasswordHero";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

function ResetPassword() {
  const initialValues = { email: "", password: "", password_confirmation: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [responseError, setResponseError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  console.log(token);
  const inputValues = [
    formValues.email,
    formValues.password,
    formValues.password_confirmation,
  ];
  const inputNames = ["email", "password", "password_confirmation"];
  const inputErrors = [
    formErrors.email,
    formErrors.password,
    formErrors.password_confirmation,
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trimLeft().trimRight() });

    console.log(formValues);
    // console.log(e.target)
  };
  // console.log(inputValues)
  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
  };
  useEffect(() => {
    // setLoading(true)
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // setLoading(true)
      console.log(formValues);
      resetPassword();
    }
  }, [formErrors]);
  console.log(loading);
  const resetPassword = async () => {
    setLoading(true);
    const data = {
      email: formValues.email,
      password_confirmation: formValues.password_confirmation,
      password: formValues.password,
      token: token,
    };
    // const url="http://localhost/buyenergy_api/public/api/resetPassword";
    // const url="https://buyenergy.herokuapp.com/public/api/";
    const url = window.baseUrl + "resetPassword";

    fetch(url, {
      // credentials: 'include
      // Authorization:'http://localhost:8000/api/user',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': 'http://localhost:8000/api/user',
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data["token"]);

        if (data["status"] === "Your password has been reset!") {
          setShowModal(true);
          setLoading(false);
        } else {
          const error = data["email"] ?? data["token"] ?? "try again";
          console.log(error);
          setResponseError(error);
          setLoading(false);
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);
      });
  };
  // console.log(loading)
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.password_confirmation) {
      errors.password_confirmation = "This is required";
    } else if (values.password !== values.password_confirmation) {
      errors.password_confirmation = "Password confirmation did not match";
    }

    return errors;
  };
  const homeData = {
    headline: "Reset Password",
    buttonLabel: ["Change Password"],
    inputLabels: ["Your email", "Password..", "Confirm Password..."],
    inputValues: inputValues,
    inputNames: inputNames,
    imageRight: "svg/twocircle.svg",
    imageleft: "images/signin.svg",
    formType: "reset",
    alt1: "two circles",
    alt2: "baby",
    // onClick:click,
  };
  return (
    <>
      <div>
        {showModal && (
          <AddTeam
            isSuccess={true}
            heading="Reseting password was successful !"
            setOpenModal={setShowModal}
            openModal={showModal}
          >
            <div>
              <h3>Password reset email link was sent!</h3>
              <Button
                btnColor="gradient"
                btnSize="btn--large"
                onClick={() => {
                  history("/login");
                }}
              ></Button>
            </div>
          </AddTeam>
        )}
        {loading ? (
          <Loader />
        ) : (
          <ForgotPasswordHero
            handleChange={handleChange}
            onSubmit={onSubmit}
            formErrors={inputErrors}
            responseError={responseError}
            {...homeData}
          />
        )}
      </div>
    </>
  );
}

export default ResetPassword;
