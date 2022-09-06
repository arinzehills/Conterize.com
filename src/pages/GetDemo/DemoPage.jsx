import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import DropDownField from "../../components/Inputfield/DropDownField";
import InputField from "../../components/Inputfield/InputField";
import Loader from "../../components/Loader/Loader";
import AddTeam from "../Dashboard/Team/AddTeam";

const DemoPage = ({ setHandleNotData }) => {
  const companySizes = ["1 to 10", "11 to 50", "51 to 250", ""];

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    industry: "",
    companysize: "Select Company Size",
    description: "",
    content_types: [],
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [responseError, setResponseError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [companiesize, setCompanieSize] = useState(formValues.companysize);
  useEffect(() => {
    setFormValues({ ...formValues, companysize: companiesize });
  }, [companiesize]);
  let [contentTypes, setContentTypes] = useState([
    { contentTypes: "" },
    { contentTypes: "" },
    { contentTypes: "" },
  ]);
  const [contentWriting, setContentWriting] = useState(false);
  const [graphics, setGraphics] = useState(false);
  const [video, setVideo] = useState(false);

  const handleContentWriting = () => {
    setContentWriting(!contentWriting);
  };

  const handleGraphics = () => {
    setGraphics(!graphics);
  };
  const handleVideo = () => {
    setVideo(!video);
  };
  console.log();
  const history = useNavigate();
  const inputErrors = [formErrors.email, formErrors.phone];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
  };
  const handleAddChecks = () => {
    setContentTypes([...contentTypes, { links: "" }]);
  };
  const handleCheckboxChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...contentTypes];
    list[index][name] = value;
    setContentTypes(list);
    console.log(list);
  };
  const handleRemoveChecks = (index) => {
    const list = [...writing_topics];
    list.splice(index, 1); //starting from index zero remove one service
    setWriting_topics(list); //set links to new list
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
      login();
    }
  }, [formErrors]);
  console.log(loading);
  const login = async () => {
    setLoading(true);
    const data = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      phone: formValues.phone,
      content_types: [
        contentWriting === true ? "content_writing" : "",
        graphics === true ? "graphics" : "",
        video === true ? "video" : "",
      ],
      industry: formValues.industry,
      companysize: formValues.companysize,
      description: formValues.description,
    };
    console.log(data);
    const url = window.baseUrl + "requestDemo";

    fetch(url, {
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
          setHandleNotData({ message: data.message });
          setLoading(false);
          setShowModal(true);
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
    if (!values.firstname) {
      errors.firstname = "First name is required";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required";
    }
    if (!values.industry) {
      errors.lastname = "Industry is required";
    }
    if (values.companysize === "Select Company Size") {
      errors.lastname = "Company is required";
    }
    if (!values.description) {
      errors.lastname = "description is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    }

    return errors;
  };
  return (
    <>
      {loading && <Loader />}
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
            value={formValues.firstname}
            name={"firstname"}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            onHandleChange={handleChange}
          />
          {/* <p className="errors">{formErrors[0]}</p> */}
          <InputField
            label={"Enter last name.."}
            value={formValues.lastname}
            name={"lastname"}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            onHandleChange={handleChange}
          />
          {/* <p className="errors">{formErrors[0]}</p> */}
          <InputField
            label={"Enter email.."}
            value={formValues.email}
            name={"email"}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            onHandleChange={handleChange}
          />
          {/* <p className="errors">{formErrors[0]}</p> */}
          <InputField
            label={"Enter phone.."}
            value={formValues.phone}
            name={"phone"}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            onHandleChange={handleChange}
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
            {/* {contentTypes.map((type, index) => (
              <Checkbox
                key={index}
                name={type.contentTypes}
                label={"Content Writing "}
                handleChange={(e) => handleCheckboxChange(e, index)}
                // checked=
              />
            ))} */}
            <Checkbox
              label={"Content writing"}
              name={"content_writing"}
              value={contentWriting}
              handleChange={handleContentWriting}
            />
            <Checkbox
              label={"Graphic design"}
              value={graphics}
              name={"graphics_design"}
              handleChange={handleGraphics}
            />
            <Checkbox
              label={"Video creation/Video editing"}
              name={"video_creation"}
              value={video}
              handleChange={handleVideo}
            />
          </div>

          <InputField
            label={"What industry is your business in.."}
            value={formValues.industry}
            name={"industry"}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            onHandleChange={handleChange}
          />
          <h3
            style={{
              fontWeight: 700,
              color: "var(--dark-purple)",
              lineHeight: 0,
              textAlign: "right",
            }}
          >
            Select the company size/no of employees
          </h3>
          <DropDownField
            options={companySizes}
            selected={companiesize}
            setSelected={setCompanieSize}
            inputSize="width-353"
          />
          {/* <InputField
            label={"Company Size.."}
            value={formValues.companysize}
            name={"companysize"}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            onHandleChange={handleChange}
          /> */}
          <InputField
            label={"Kindly describe your content needs.."}
            value={formValues.description}
            name={"description"}
            inputStyle="input--shadow-purple"
            inputColor="purple-input"
            onHandleChange={handleChange}
          />
          {/* <p className="errors">{formErrors[0]}</p> */}

          <Button
            buttonStyle="btn--outline"
            buttonColor="gradient"
            // style={{ borderRadius: "50px" }}
            onClick={login}
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
        </div>
      </div>
    </>
  );
};

export default DemoPage;
