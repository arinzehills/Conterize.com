import React, { useEffect, useState } from "react";
import "./Team.css";
import { motion, AnimatePresence } from "framer-motion";
import SaveButton from "../components/SaveButton/SaveButton";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import { Button } from "../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../../useUser";
import useToken from "../../../useToken";
import Loader from "../../../components/Loader/Loader";

const AcceptInvitation = ({ children }) => {
  const initialValues = { password: "", password_confirmation: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [responseError, setResponseError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUser();
  const { token, setToken } = useToken();
  const history = useNavigate();

  //   const openModal = true;
  const queryParams = new URLSearchParams(window.location.search);
  const invite_token = queryParams.get("token");
  const teamname = queryParams.get("team_name");
  const firstname = queryParams.get("firstname");
  const lastname = queryParams.get("lastname");
  const email = queryParams.get("email");

  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trimLeft().trimRight() });

    console.log(formValues);
    // console.log(e.target)
  };
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

  const resetPassword = async () => {
    setLoading(true);
    const data = {
      password_confirmation: formValues.password_confirmation,
      password: formValues.password,
      invite_token: invite_token,
    };
    const url = window.baseUrl + "acceptInvite";

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

        if (data["success"] === true) {
          const token = data["token"];
          const user = data["user"];

          setToken(token);
          setUser(user);
          history("/dashboard");
          setLoading(false);
        } else {
          const error = data["message"];
          console.log(error);
          setResponseError(error);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.warn("Error:", error);
      });
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
  return (
    // <AnimatePresence >
    <div>
      <div className="invitesignup gradient ">
        <img
          src="images/logo_white.png"
          style={{ height: 210, top: -10 }}
          alt="h"
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        openModal && (
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
              className="invitesign_backdrop"
              // onClick={() => setOpenModal(false)}
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
                className="addteam_content_wrapper"
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
                      <Link to="/">
                        <img
                          src="images/logo_crop.png"
                          style={{
                            height: 60,
                            marginBottom: 0,
                            marginLeft: "-2rem",
                            //   background: "red",
                          }}
                          alt="h"
                        />
                      </Link>
                      <h2
                        style={{
                          marginBottom: 0,
                          marginTop: "-10px",
                          textTransform: "capitalize",
                        }}
                      >
                        Sign up to Join {teamname}
                      </h2>
                      <span
                        style={{ color: "grey", fontSize: 11, lineHeight: 0.5 }}
                      >
                        By creating a Conterize user account as member you have
                        agree to our terms & conditions
                      </span>
                      <p
                        style={{ color: "grey", fontSize: 13, lineHeight: 0.5 }}
                      >
                        Your name:{" "}
                        <b style={{ color: "black" }}>
                          {firstname + " " + lastname}
                        </b>
                      </p>
                      <p
                        style={{ color: "grey", fontSize: 13, lineHeight: 0.5 }}
                      >
                        Your email: <b style={{ color: "black" }}>{email}</b>
                      </p>
                      <h3>Password</h3>
                      <DashboardInput
                        name={"password"}
                        inputStyle="input--outline"
                        label="Enter password"
                        style={{
                          width: window.innerWidth > 769 ? "460px" : "300px",
                        }}
                        onHandleChange={handleChange}
                        value={formValues.password}
                      />
                      <p className="errors">{formErrors.password}</p>
                      <h3>Confirm password</h3>
                      <DashboardInput
                        name={"password_confirmation"}
                        style={{
                          width: window.innerWidth > 769 ? "460px" : "300px",
                        }}
                        inputStyle="input--outline"
                        label="Confirm password"
                        onHandleChange={handleChange}
                        value={formValues.password_confirmation}
                      />
                      <p className="errors">
                        {formErrors.password_confirmation}
                      </p>

                      <Button buttonColor={"gradient"} onClick={onSubmit}>
                        Create Account
                      </Button>
                      {/* {children} */}
                      {/* <SaveButton
                      //   onClick={updateCompany}
                      // onClick={handleNot}
                      // secondBtnSize={"10rem"}
                      onClick2={() => setOpenModal(false)}
                      labels={["Cancel", "Invite "]}
                    /> */}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )
      )}
    </div>
    // </AnimatePresence>
  );
};

export default AcceptInvitation;
