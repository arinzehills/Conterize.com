import React, { useState, useEffect } from "react";
import Formhero from "../../components/FormHero/FormHero";

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [responseError, setResponseError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const history = useNavigate();

  const inputValues = [formValues.email, formValues.password];
  const inputLabels = ["Enter email", "Password..."];
  const inputNames = ["email", "password"];
  const inputErrors = [formErrors.email, formErrors.password];
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
      login();
    }
  }, [formErrors]);
  console.log(loading);
  const login = async () => {
    setLoading(true);
    const data = {
      email: formValues.email,
      password: formValues.password,
    };
    // const url="http://localhost/buyenergy_api/public/api/login";
    // const url=window.baseUrl + "login";
    // const url="https://buyenergy.herokuapp.com/public/api/login";
    const url = "https://buyenergy.herokuapp.com/public/api/login";

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
        // console.log( data['token']);

        if (data["success"] === true) {
          const token = data["token"];
          const user = data["user"];

          setToken(token);
          setUser(user);
          //   history("/dashboard");
          setLoading(false);
        } else {
          const error = data["message"];
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

    return errors;
  };
  const homeData = {
    headline: "Login",
    buttonLabel: ["Login", "Register"],
    inputLabels: inputLabels,
    inputValues: inputValues,
    inputNames: inputNames,
    leftImageHeight: "180px",
    imageRight: "svg/emailcamp.svg",
    imageleft: "images/studio3.svg",
    formType: "",
    alt1: "two circles",
    alt2: "imageleft",
    // handleChange:{handleChange}
    // onClick:click,
  };
  return (
    <>
      <Formhero
        {...homeData}
        handleChange={handleChange}
        onSubmit={onSubmit}
        formErrors={inputErrors}
        // message={message}
        responseError={responseError}
      />
    </>
  );
}

export default Login;
