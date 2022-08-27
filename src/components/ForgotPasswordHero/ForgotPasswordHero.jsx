import React from "react";
import { Button } from "../Button/Button";
import InputField from "../Inputfield/InputField";
import { FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import "./ForgotPasswordHero.css";
import { Link, useNavigate } from "react-router-dom";
function ForgotPasswordHero({
  headline,
  showButton,
  onClick,
  imageRight,
  imageleft,
  formType,
  buttonLabel,
  inputLabels,
  inputNames,
  inputValues,
  handleChange,
  onSubmit,
  formErrors,
  responseError,
  alt1,
  alt2,
}) {
  const images = [""];
  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    history("/dashboard");
  }
  return (
    <>
      <Link to="/" className="navbar-logo">
        <img
          src="images/conterize.png"
          style={{
            margin: "-30px",
            marginLeft: "0",
            padding: "-100px",
            height: 110,
          }}
          alt=""
        />
      </Link>
      <div className="form-hero-section">
        <div className="form-hero-container">
          <div
            className="row form-hero-row"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="right__hero-img-wrapper">
              <img
                src={imageleft}
                alt={alt2}
                className="right__hero-img"
                height={"600px"}
              />
            </div>
            <div className="form__hero-text-wrapper">
              <form onSubmit={onSubmit}>
                <div
                  className="form-col"
                  style={{ height: "33rem", zIndex: -2121 }}
                >
                  <div className="">
                    <div className="left__hero-img-wrapper">
                      <img
                        src={imageRight}
                        alt={alt1}
                        height={"50px"}
                        className="left__hero-img"
                      />
                    </div>

                    <h1 className="headline">{headline}</h1>
                  </div>
                  <div className=" btn-wrapper">
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                      }}
                    >
                      <InputField
                        label={inputLabels[0] ?? ""}
                        value={inputValues[0]}
                        name={inputNames[0]}
                        inputStyle="input--shadow-purple"
                        inputColor="purple-input"
                        onHandleChange={handleChange}
                      />
                      <p className="errors">{formErrors[0]}</p>
                      {formType === "reset" && (
                        <div>
                          {" "}
                          <InputField
                            label={inputLabels[1]}
                            value={inputValues[1]}
                            name={inputNames[1]}
                            inputStyle="input--shadow-purple"
                            inputColor="purple-input"
                            onHandleChange={handleChange}
                          />
                          <p className="errors">{formErrors[1]}</p>
                        </div>
                      )}
                      {formType === "reset" && (
                        <div style={{ marginTop: "10px" }}>
                          <InputField
                            label={inputLabels?.[2] ?? ""}
                            value={inputValues[2]}
                            name={inputNames?.[2]}
                            inputStyle="input--shadow-purple"
                            inputColor="purple-input"
                            onHandleChange={handleChange}
                          />

                          <p className="errors">{formErrors[2]}</p>
                        </div>
                      )}
                    </div>
                    <p className="errors">{responseError ?? ""}</p>
                    {/* //for register and sign up */}
                    <div style={{ marginTop: "10px" }}>
                      {/* <Link to={'/'+ buttonLabel[0]} > */}
                      <Button
                        buttonColor="gradient"
                        buttonSize="btn--mobile"
                        style={{ width: "100%" }}
                      >
                        {buttonLabel[0]}
                      </Button>
                      {/* </Link> */}
                      <div className="hr-wrapper">
                        <hr className="hr"></hr>
                        <p className="hr-p ">OR</p>
                        <hr className="hr"></hr>
                      </div>
                      <div className="forgot-password-link">
                        <Link to="/login">
                          <Button
                            buttonStyle="btn--outline"
                            buttonSize="btn--mobile"
                            style={{ width: "100%" }}
                          >
                            Login
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordHero;
