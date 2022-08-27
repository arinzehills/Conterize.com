import { Icon } from "@iconify/react";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import InputField from "../../components/Inputfield/InputField";

const DemoPage = () => {
  return (
    <>
      <Helmet>
        <title>Conterize - Request Demo</title>
        <meta
          name="description"
          content="Request a demo any content creation type u will do"
        />
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth < 960 && "column",
        }}
      >
        <img
          src={"/images/contactus.png"}
          // src={"/images/getdemo.jpg"}
          alt={"alt2"}
          height="700px"
          className="right__hero-img"
        />
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "2.5rem",
            color: "black",
            display: "flex",
            flexDirection: "column",
            placeItems: "start",
            textAlign: "left",
            width: "28rem",
            alignItems: "center",
          }}
          className={"get_demo_division"}
        >
          <h1
            style={{
              color: "var(--dark-purple)",
              lineHeight: 0,
              fontSize: "2.4rem",
              fontWeight: 900,
            }}
          >
            Request a demo
          </h1>
          <InputField
            label={"Enter first name.."}
            // value={inputValues[0]}
            // name={inputNames[0]}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            // onHandleChange={handleChange}
          />
          {/* <p className="errors">{formErrors[0]}</p> */}
          <InputField
            label={"Enter last name.."}
            // value={inputValues[0]}
            // name={inputNames[0]}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            // onHandleChange={handleChange}
          />
          {/* <p className="errors">{formErrors[0]}</p> */}
          <InputField
            label={"Enter email.."}
            // value={inputValues[0]}
            // name={inputNames[0]}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            // onHandleChange={handleChange}
          />
          {/* <p className="errors">{formErrors[0]}</p> */}
          <InputField
            label={"Enter phone.."}
            // value={inputValues[0]}
            // name={inputNames[0]}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            // onHandleChange={handleChange}
          />
          <div>
            <h3
              style={{
                fontWeight: 700,
                color: "var(--dark-purple)",
                lineHeight: 0,
              }}
            >
              Select all content types you need at scale
            </h3>
            <Checkbox label={"Content Writing "} />
            <Checkbox label={"Graphic design"} />
            <Checkbox label={"Video creation/Video editing"} />
          </div>

          <InputField
            label={"What industry is your business in.."}
            // value={inputValues[0]}
            // name={inputNames[0]}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            // onHandleChange={handleChange}
          />
          <InputField
            label={"Company Size.."}
            // value={inputValues[0]}
            // name={inputNames[0]}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            // onHandleChange={handleChange}
          />
          <InputField
            label={"Kindly describe your content needs.."}
            // value={inputValues[0]}
            // name={inputNames[0]}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            // onHandleChange={handleChange}
          />
          {/* <p className="errors">{formErrors[0]}</p> */}
          <Link to="/demopage">
            <Button
              buttonStyle="btn--outline"
              buttonColor="gradient"
              // style={{ borderRadius: "50px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontWeight: 700,
                }}
              >
                <Icon icon="carbon:intent-request-inactive" fontSize={"2rem"} />
                Submit
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
