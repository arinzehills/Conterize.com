import React, { useEffect, useState } from "react";
import "./Team.css";
import { motion, AnimatePresence } from "framer-motion";
import SaveButton from "../components/SaveButton/SaveButton";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import Modal2 from "../../../components/Modal/Modal2";
import useToken from "../../../useToken";
import handleNot from "../../../components/HandleNotification/HandleNot";
import { ReactNotifications } from "react-notifications-component";

const AddTeam = ({
  openModal,
  setOpenModal,
  children,
  setHandleNot,
  setHandleNotColor,
  className,
  bkdropclassName,
}) => {
  const initialValues = { email: "", firstname: "", lastname: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseError, setResponseError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useToken();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trimLeft().trimRight() });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {}, [loading]);
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
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

    return errors;
  };
  const register = async () => {
    setLoading(true);
    const errors = {};
    const data = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      token: token,
    };
    const url = window.baseUrl + "sendInvite";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["success"] === true) {
          setLoading(false);
          setOpenModal(false);
          setHandleNot(data["message"] === null ? data.email : data.message);
        } else {
          setHandleNotColor("red");
          setOpenModal(false);
          setHandleNot(data["message"] + data.email);
          const error = data["message"] + data.email;
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

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <AnimatePresence>
      {openModal && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className={`addteam_backdrop ${bkdropclassName}  `}
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{ scale: 0 }}
              className={`addteam_content_wrapper ${className}`}
              onClick={stopPropagation}
            >
              <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.7,
                  },
                }}
                exit={{ opacity: 0, x: 100 }}
                className="addteam_content"
              >
                {children ?? (
                  <div>
                    <h2 style={{ marginBottom: 0 }}>Add Team Member</h2>
                    <span
                      style={{ color: "grey", fontSize: 11, lineHeight: 0.5 }}
                    >
                      Add a member that you wished to work with you on this
                      account, and login details will be send them to have
                      access
                    </span>
                    <h3>First Name</h3>
                    <DashboardInput
                      name={"firstname"}
                      value={formValues.firstname}
                      onHandleChange={handleChange}
                      inputStyle="input--outline"
                      label="Enter email address"
                      style={{
                        width: window.innerWidth > 769 ? "460px" : "300px",
                      }}
                    />
                    <p
                      className="errors"
                      style={{ fontSize: 13, lineHeight: 1 }}
                    >
                      {formErrors.firstname}
                    </p>

                    <h3>Last Name</h3>
                    <DashboardInput
                      name={"lastname"}
                      value={formValues.lastname}
                      onHandleChange={handleChange}
                      style={{
                        width: window.innerWidth > 769 ? "460px" : "300px",
                      }}
                      inputStyle="input--outline"
                      label="Enter email address"
                    />
                    <p
                      className="errors"
                      style={{ fontSize: 13, lineHeight: 1 }}
                    >
                      {formErrors.lastname}
                    </p>
                    <h3>Email Address</h3>
                    <DashboardInput
                      name={"email"}
                      value={formValues.email}
                      onHandleChange={handleChange}
                      style={{
                        width: window.innerWidth > 769 ? "460px" : "300px",
                      }}
                      inputStyle="input--outline"
                      label="Enter email address"
                    />
                    <p
                      className="errors"
                      style={{ fontSize: 13, lineHeight: 1 }}
                    >
                      {formErrors.email}
                    </p>
                    <p className="errors" style={{ fontSize: 13 }}>
                      {responseError ?? ""}
                    </p>

                    {/* {children} */}
                    {loading ? (
                      <div
                        className=" gradient"
                        style={{
                          padding: "0.5rem",
                          width: "80%",
                          marginTop: "1rem",
                          borderRadius: "5px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {"Processing..."}
                      </div>
                    ) : (
                      <SaveButton
                        onClick={onSubmit}
                        // onClick={handleNot}
                        // secondBtnSize={"10rem"}
                        onClick2={() => setOpenModal(false)}
                        labels={["Cancel", "Invite "]}
                      />
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddTeam;
