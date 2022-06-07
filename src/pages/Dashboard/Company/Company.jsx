import React, { useEffect, useState } from "react";
import "./Company.css";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import NavComponent from "../NavComponent/NavComponent";
import SaveButton from "../components/SaveButton/SaveButton";
import { useOutletContext } from "react-router-dom";
import TextArea from "../../../components/Inputfield/TextArea";
import DropDownField from "../../../components/Inputfield/DropDownField";
import useUser from "../../../useUser";

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import Modal from "../../../components/Modal/Modal";
import Modal2 from "../../../components/Modal/Modal2";
import useFetch from "../../../useFetch";
import { Button } from "../../../components/Button/Button";
import handleNot from "../../../components/HandleNotification/HandleNot";
// import "animate.css/animate.min.css";
// import ''
const Company = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [nationality, setNationality] = useState("Select Nationality");
  const [showModal, setShowModal] = useState(false);
  const countries = ["nigeria", "ghana"];
  const { user, setUser } = useUser();
  const {
    data: companyInfo,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getUserCompany",
    fetchParamData: { user_id: user?.["id"] },
  });
  console.log(companyInfo?.["company_info"]);
  var info = companyInfo?.["company_info"];

  const initialValues = {
    name: loading ? "" : info?.["name"],
    industry: loading ? "" : info?.["name"],
    website_url: loading ? "" : info?.["website_url"],
    facebook: loading ? "" : info?.["facebook"],
    twitter: loading ? "" : info?.["twitter"],
    instagram: loading ? "" : info?.["instagram"],
    short_description: loading ? "" : info?.["short_description"],
    target_audience: loading ? "" : info?.["target_audience"],
    additional_info: loading ? "" : info?.["additional_info"],
  };
  const [formValues, setFormValues] = useState(initialValues);
  useEffect(() => {
    setFormValues(initialValues);
  }, [loading]); //if loading has changed set values to data from api

  console.log(formValues);
  const user_id = user?.["id"];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
    // console.log(e.target)
  };
  const handleOnClickform = (e) => {
    if (e.target.value === null || e.target.value === "") {
      console.log("is empty");
    } else {
      e.target.value = "";
    }
    // console.log(e.target.value);
  };
  const updateCompany = async () => {
    // setLoading(true);
    setShowModal(true);
    const errors = {};
    const data = {
      user_id: user_id,
      name: formValues.name,
      industry: formValues.industry,
      website_url: formValues.website_url,
      facebook: formValues.facebook,
      twitter: formValues.twitter,
      instagram: formValues.instagram,
      short_description: formValues.short_description,
      target_audience: formValues.target_audience,
      additional_info: formValues.additional_info,
    };
    // const url="http://localhost/buyenergy_api/public/api/register";
    const url = window.baseUrl + "updateCompany";
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
          setShowModal(false);

          handleNot({
            title: "Success",
            message: "Your data have been updated!",
            backgroundColor: "var(--success)",
          });
          console.log(data);
        } else {
          const error = 'data["email"][0]';
          // console.log(error);
          // setResponseError(error);
          // setLoading(false);
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);
        setShowModal(false);

        handleNot({
          title: "Error",
          message: "Their is an error in your request data, try again!",
          backgroundColor: "var(--danger)",
        });
        // setLoading(false);
      });
  };

  return (
    <>
      <div>
        <NavComponent pageTitle="Company" handleClick={handleClick} />
        {/* <DashboardInput inputSize="width-495" /> */}

        {showModal && <Modal2 />}
        <ReactNotifications />
        <div className="company-section">
          <div className="company-container">
            <div className="company-row">
              {/* goes left-to-right */}
              <div className="company-col">
                {/* goes bottom-to-top */}
                <h3>Company Name</h3>
                <DashboardInput
                  name="name"
                  label={"enter company name"}
                  value={formValues.name}
                  onHandleChange={handleChange}
                  inputSize="width-353  "
                  onClick={handleOnClickform}
                />
              </div>
              <div className="company-col">
                <h3>Industry</h3>

                <DropDownField
                  options={countries}
                  selected={nationality}
                  setSelected={setNationality}
                  inputSize="width-353  "
                  style={{ height: 190 }}
                />
              </div>
              <div className="company-col">
                <h3>Website URL</h3>
                <DashboardInput
                  inputSize="width-353  "
                  onHandleChange={handleChange}
                  name="website_url"
                  onClick={handleOnClickform}
                  value={formValues.website_url}
                  label={"type..."}
                />
              </div>
            </div>
            <div className="company-row">
              {/* goes left-to-right */}
              <div className="company-col">
                {/* goes bottom-to-top */}
                <h3>Facebook</h3>
                <DashboardInput
                  name="facebook"
                  value={formValues.facebook}
                  onHandleChange={handleChange}
                  onClick={handleOnClickform}
                  label={"type..."}
                  inputSize="width-353  "
                />
              </div>
              <div className="company-col">
                <h3>Twitter</h3>

                <DashboardInput
                  name="twitter"
                  value={formValues.twitter}
                  onHandleChange={handleChange}
                  onClick={handleOnClickform}
                  label={"type..."}
                  inputSize="width-353"
                />
              </div>
              <div className="company-col">
                <h3>Instagram</h3>

                <DashboardInput
                  name="instagram"
                  value={formValues.instagram}
                  onHandleChange={handleChange}
                  label={"type..."}
                  inputSize="width-353  "
                  onClick={handleOnClickform}
                />
              </div>
            </div>
            <div className="company-row" style={{ boxSizing: "content-box" }}>
              {/* goes left-to-right */}
              <div className="company-col" style={{ boxSizing: "content-box" }}>
                {/* goes bottom-to-top */}
                <h3>Short Description About Your Business</h3>
                <TextArea
                  name="short_description"
                  value={formValues.short_description}
                  label={"type..."}
                  onHandleChange={handleChange}
                  inputSize="width-353"
                  onClick={handleOnClickform}
                />
              </div>
              <div className="company-col" style={{ boxSizing: "content-box" }}>
                <h3>What are your target audience</h3>

                <TextArea
                  label={"type..."}
                  name="target_audience"
                  value={formValues.target_audience}
                  onHandleChange={handleChange}
                  inputSize="width-353  "
                  onClick={handleOnClickform}
                />
              </div>
              <div className="company-col" style={{ boxSizing: "content-box" }}>
                <h3>Additional Info for Content Creators</h3>

                <TextArea
                  name="additional_info"
                  label={"type..."}
                  value={formValues.additional_info}
                  onHandleChange={handleChange}
                  inputSize="width-353"
                  onClick={handleOnClickform}
                />
              </div>
            </div>
            <SaveButton
              onClick={updateCompany}
              // onClick={handleNot}
              labels={["Back", "Save"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
