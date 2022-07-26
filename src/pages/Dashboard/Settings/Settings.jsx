import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
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
import { Button } from "../../../components/Button/Button";
import { Icon } from "@iconify/react";
import logout from "../../../components/ProfilePicsComponent/logout";
import Billing from "./Billing";
import SettingsComponent from "./SettingsComponent";
import SettingsTabs from "./SettingsTabs";
import NoDataFound from "../Request/NoDataFound";

const Settings = ({ setHandleNotData }) => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const { token, setToken } = useToken();
  const { user, setUser } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const history = useNavigate();

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
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <div>
        <NavComponent
          pageTitle="Settings"
          handleClick={handleClick}
          setHandleNotData={setHandleNotData}
        />
        {/* <Modal2 /> */}
        <ReactNotifications />
        <div
          style={{
            display: "flex",
            justifyContent:
              user?.user_type === "business_user"
                ? "space-between"
                : "flex-end",
            alignItems: "center",
          }}
        >
          {user?.user_type === "business_user" && (
            <SettingsTabs
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          )}
          <Button
            buttonStyle={"btn--normal"}
            buttonColor="pink"
            onClick={() =>
              logout({
                token: token,
                setToken: setToken,
                history: history,
                setHandleNotData: setHandleNotData,
              })
            }
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Icon icon="majesticons:logout-half-circle-line" />
              Log Out
            </div>
          </Button>
        </div>
        <div className="company-section">
          {currentTab === 1 ? (
            <SettingsComponent
              setShowModal={setShowModal}
              handleNot={handleNot}
            />
          ) : user?.payment_status === "unpaid" ? (
            <>
              <NoDataFound message={"You have not subscribe yet!"} />
              <Button
                buttonColor={"gradient"}
                onClick={() =>
                  history("/pricing", {
                    state: {
                      isRegisteredUser: true,
                    },
                  })
                }
              >
                Compare Plans
              </Button>
            </>
          ) : (
            <Billing />
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
