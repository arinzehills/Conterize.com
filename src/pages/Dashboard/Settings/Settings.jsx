import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DropDownField from "../../../components/Inputfield/DropDownField";
import Modal2 from "../../../components/Modal/Modal2";
import useFetch from "../../../useFetch";
import usePost from "../../../usePost";
import useToken from "../../../useToken";
import useUser from "../../../useUser";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import SaveButton from "../components/SaveButton/SaveButton";
import NavComponent from "../NavComponent/NavComponent";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";

const Settings = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const { token, setToken } = useToken();
  const { user, setUser } = useUser();
  const [timeZone, setTimeZone] = useState("Select TimeZone");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const timeZones = ["nigeria", "ghana"];
  const initialValues = {
    personal_info: user?.["firstname"] + " " + user?.["lastname"],
    industry: "",
    time_zone: "",
    oldpassword: "",
    password: "",
    password_confirmation: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const user_id = user?.["id"];

  const savePassword = async () => {
    setShowModal(true);
    const errors = {};
    const data = {
      id: user_id,
      token: token,
      ...formValues,
    };
    const url = window.baseUrl + "updatePassword";
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
        // console.log( data['token']);

        if (data["success"] === true) {
          setShowModal(false);
          setError("");
          handleNot({
            title: "Success",
            message: data["message"] ?? "Your data have been updated!",
            backgroundColor: "var(--success)",
          });
          console.log(data);
        } else {
          setShowModal(false);
          setError(data["message"]);
          handleNot({
            title: "Request Failed",
            message: data["message"] ?? "Your data have not been updated!",
            backgroundColor: "var(--danger)",
          });
          console.log(data);
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
  const handleNot = ({ title, message, backgroundColor }) => {
    Store.addNotification({
      content: MyNotify({
        title: title,
        message: message,
        backgroundColor: backgroundColor,
      }),
      type: "success",
      container: "top-center",
      insert: "top",
      animationIn: ["animate__animated animate__fadeIn"],
      animationOut: ["animate__animated animate__fadeOut"],
      dismiss: {
        duration: 2000,
        showIcon: true,
      },
      width: 300,
    });
  };

  function MyNotify({ title, backgroundColor, message }) {
    return (
      <div
        className="gradient"
        style={{
          background: backgroundColor,
          borderRadius: 20,
          // right: 1000,
          width: "100%",
        }}
      >
        <h2>{title ?? "Title"}</h2>
        <h4>{message ?? "Updated"}</h4>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
    // console.log(e.target)
  };

  return (
    <>
      <div>
        <NavComponent pageTitle="Settings" handleClick={handleClick} />
        {/* <Modal2 /> */}
        {showModal && <Modal2 />}
        <ReactNotifications />
        <div className="company-section">
          <div
            className="company-container"
            style={{ width: window.innerWidth > 960 && "110%" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                {"Personal Info"}
              </h3>
              {window.innerWidth > 763 && (
                <SaveButton title="Personal Info" labels={["Cancel", "Save"]} />
              )}
            </div>
            <div className="company-row">
              <div className="company-col">
                {/* goes bottom-to-top */}
                <h3>Person info</h3>
                <DashboardInput
                  value={formValues.personal_info}
                  name="personal_info"
                  label={user?.["firstname"] + " " + user?.["lastname"]}
                  onHandleChange={handleChange}
                />
              </div>
              <div className="company-col">
                <h3>Email</h3>

                <DashboardInput
                  value={user?.["email"]}
                  placeholder={user?.["email"]}
                />
              </div>
              <div className="company-col">
                <h3>Time Zone</h3>

                <DropDownField
                  options={timeZones}
                  selected={timeZone}
                  setSelected={setTimeZone}
                  inputSize="width-353  "
                  style={{ height: 190 }}
                />
              </div>
            </div>
            {/* person info for smaller screens */}
            {window.innerWidth < 763 && (
              <SaveButton title="Personal Info" labels={["Cancel", "Save"]} />
            )}
          </div>

          <div
            className="company-container"
            style={{ width: window.innerWidth > 960 && "110%" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                {"Change password"}
              </h3>
              {/* change password for large screens */}
              {window.innerWidth > 763 && (
                <SaveButton
                  labels={["Cancel", "Save"]}
                  onClick={savePassword}
                />
              )}
            </div>

            <div className="company-row">
              <div className="company-col">
                {/* goes bottom-to-top */}
                <h3>Old Password</h3>
                <DashboardInput
                  name={"oldpassword"}
                  value={formValues.oldpassword}
                  onHandleChange={handleChange}
                />
              </div>
              <div className="company-col">
                <h3>New Password</h3>

                <DashboardInput
                  name={"password"}
                  value={formValues.password}
                  onHandleChange={handleChange}
                />
              </div>
              <div className="company-col">
                <h3>Retype Password</h3>

                <DashboardInput
                  name={"password_confirmation"}
                  value={formValues.password_confirmation}
                  onHandleChange={handleChange}
                />
                <p className="errors">{error}</p>
              </div>
            </div>
            {/* for smaller screens */}
            {window.innerWidth < 763 && (
              <SaveButton
                title="Personadsdsal Info"
                labels={["Cancel", "Save"]}
                onClick={savePassword}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
