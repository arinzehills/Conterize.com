import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import InputField from "../../components/Inputfield/InputField";
import Loader from "../../components/Loader/Loader";
import Stepper from "../../components/StepperComponent/Stepper";
import useToken from "../../useToken";
import useUser from "../../useUser";

const Signup = ({
  type,
  next,
  increaseIndex,
  inputNames,
  inputValues,
  formValues,
  setFormValues,
  user_type,
}) => {
  const nextStep = () => {
    next();
    increaseIndex();
  };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseError, setResponseError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useUser();
  const { token, setToken } = useToken();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      // [name]: value.trimLeft().trimRight(),
      [name]: name === "email" ? value.trimLeft().trimRight() : value,
    });

    console.log(formValues);
    // console.log(e.target)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
    console.log(formErrors.email);
  };
  useEffect(() => {
    // setLoading(true)
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // setLoading(true)
      console.log(formValues + "This has validated");
      register();
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "First name is required";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (type == "creators") {
      if (!values.phone) {
        errors.phone = "Phone is required";
      } else if (values.phone < 5) {
        errors.phone = "Phone must be more than 5 required";
      }
    }

    return errors;
  };
  const register = async () => {
    setLoading(true);
    const errors = {};
    const data = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      password: formValues.password,
      user_type: user_type,
      phone: formValues.phone,
    };
    // const url="http://localhost/buyenergy_api/public/api/register";
    const url = window.baseUrl + "register";
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
          setUser(data["user"]);
          const token = data["token"];
          console.log(token);
          setToken(token);
          setLoading(false);
          nextStep();
        } else {
          const error = data["email"][0];
          console.log(error);
          setResponseError(error);
          setLoading(false);
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);

        setLoading(false);
      });
  };
  return (
    <>
      {/* <img src="/images/conterize.png" height={"120px"} alt="" />
       */}
      {loading ? (
        <div style={{ height: "70%", marginTop: "3rem" }}>
          <Loader position={"relative"} />
        </div>
      ) : (
        <div>
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
                style={{ width: window.innerWidth > 960 && "230px" }}
                label="Enter first name"
                name={inputNames[0]}
                value={inputValues[0]}
                onHandleChange={handleChange}
              />
              <p className="errors">{formErrors.firstname}</p>
            </div>
            <div>
              <h3>Last Name</h3>
              <InputField
                inputStyle="input--outline"
                style={{
                  width: window.innerWidth > 960 && "230px",
                  marginLeft: window.innerWidth > 960 && "15px",
                }}
                label="Enter last name"
                name={inputNames[1]}
                value={inputValues[1]}
                onHandleChange={handleChange}
              />
              <p className="errors">{formErrors.lastname}</p>
            </div>
          </div>
          <h3>Email Address</h3>
          <InputField
            inputStyle="input--outline"
            label="Enter email address"
            name={inputNames[2]}
            value={inputValues[2]}
            onHandleChange={handleChange}

            // style={{ width: "93.5%" }}
          />
          <p className="errors">{formErrors.email}</p>

          {type === "creators" && <h3>Phone Number</h3>}
          {type === "creators" && (
            <InputField
              label="Enter phone number"
              inputStyle="input--outline"
              name={inputNames[3]}
              value={inputValues[3]}
              onHandleChange={handleChange}

              // style={{ width: "93.5%" }}
            />
          )}
          <p className="errors">{formErrors.phone}</p>

          <h3>Password</h3>
          <InputField
            label="Enter password"
            inputStyle="input--outline"
            // style={{ width: "93.5%" }}
            value={type === "creators" ? inputValues[4] : inputValues[3]}
            name={type === "creators" ? inputNames[4] : inputNames[3]}
            onHandleChange={handleChange}
          />
          <p className="errors">{formErrors.password}</p>
        </div>
      )}
      <p className="errors">{responseError ?? ""}</p>

      <Button
        buttonColor="gradient"
        buttonSize="btn--large"
        style={{ width: "100%" }}
        onClick={onSubmit}
        // onClick={next}
      >
        NEXT
      </Button>
    </>
  );
};

export default Signup;
