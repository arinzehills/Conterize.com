import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import FormHero from "../../components/FormHero/FormHero";

function Contact() {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const inputValues = [formValues.name, formValues.email, formValues.message];

  const inputNames = ["name", "email", "message"];
  const inputErrors = [formErrors.name, formErrors.email, formErrors.message];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

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
      console.log(formValues);

      // register()
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };
  const homeData = {
    headline: "CONTACT SUPPORT",
    buttonLabel: ["Send message"],
    inputLabels: ["Name..", "Enter email", "Message..."],
    imageRight: "/svg/envelope.svg",
    rightImageHeight: "600px",
    leftImageHeight: "150px",
    imageleft: "/svg/contactus.svg",
    formType: "contact",
    alt1: "dssdadsa",
    alt2: "dssdadsa",
  };
  return (
    <>
      <Helmet>
        <title>Contact Conterize Support</title>
        <meta
          name="description"
          content="This is a page to contact conterize support team"
        />
      </Helmet>
      <FormHero
        handleChange={handleChange}
        onSubmit={onSubmit}
        formErrors={inputErrors}
        inputValues={inputValues}
        inputNames={inputNames}
        {...homeData}
      />
    </>
  );
}

export default Contact;
