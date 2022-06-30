import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button/Button";
import "../../components/Payment/Payment.css";
import "./Register.css";
import DropDownField from "../../components/Inputfield/DropDownField";
import { Icon } from "@iconify/react";
import Loader from "../../components/Loader/Loader";
import useToken from "../../useToken";
import fetchCountries from "../../utils/fetchCountries";
const ChoseNationality = ({
  className,
  nationality,
  setNationality,
  countries,
}) => {
  return (
    <>
      <div className={className}>
        <h2>Country of residence</h2>
        <DropDownField
          options={countries}
          selected={nationality}
          setSelected={setNationality}
        />
      </div>
      {/* <Payment /> */}
    </>
  );
};
const ChoseRole = ({ roleType, setRoleType, error }) => {
  console.log("roleType" + roleType);
  return (
    <>
      <h3>Please select one option </h3>
      <p style={{ color: "red" }}>{error}</p>
      <div className="choose_role_wrapper">
        <div
          className="choose_role blue"
          onClick={() => setRoleType("content writing")}
          style={{
            opacity:
              roleType !== "" && roleType !== "content writing" ? 0.4 : 1,
          }}
        >
          <div>
            <Icon icon="fluent:draw-image-20-filled" fontSize={"30px"} />
            <p>Content writing</p>
          </div>
        </div>
        <div
          className="choose_role red"
          onClick={() => setRoleType("graphics design")}
          style={{
            opacity:
              roleType !== "" && roleType !== "graphics design" ? 0.4 : 1,
          }}
        >
          <div>
            <Icon icon="fa6-solid:pen-nib" fontSize={"30px"} />
            <p>Graphic design</p>
          </div>
        </div>
        <div
          className="choose_role purple"
          onClick={() => setRoleType("video creation")}
          style={{
            opacity: roleType !== "" && roleType !== "video creation" ? 0.4 : 1,
          }}
        >
          <div>
            <Icon icon="emojione-monotone:film-projector" fontSize={"30px"} />
            <p>Video creation</p>
          </div>
        </div>
        <div
          className=" choose_role pink"
          onClick={() => setRoleType("content director")}
          style={{
            opacity:
              roleType !== "" && roleType !== "content director" ? 0.4 : 1,
          }}
        >
          <div>
            <Icon icon="codicon:file-symlink-directory" fontSize={"30px"} />
            <p>Content Director</p>
          </div>
        </div>
      </div>
    </>
  );
};
const CreatorsFinish = ({ next, back, index }) => {
  const [review, setReview] = useState(false);
  const [showNational, setShowNational] = useState(false);
  const [nationality, setNationality] = useState("Select Nationality");
  // const countries = ["nigeria", "ghana"];

  const [roleType, setRoleType] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState("");
  const { token, setToken } = useToken();
  const [countries, setCountries] = useState(["nigeria"]);
  // const countries = ["nigeria", "ghana"];

  useEffect(() => {
    fetchCountries(setCountries);
  }, []);
  // const setRoleandData = () => {
  //   setShowNational(true);
  //   setData({ nationality: nationality, role_type: roleType });
  // };
  useEffect(() => {
    setData({ nationality: nationality, role_type: roleType });
  }, [roleType, nationality]);

  useEffect(() => {
    setTimeout(() => {
      setReview(true);
    }, 100);
  }, []);
  console.log(data);
  const finishReg = async () => {
    setLoading(true);

    // const url="http://localhost/buyenergy_api/public/api/login";
    const url = window.baseUrl + `update?token=${token}`;

    fetch(url, {
      // credentials: 'include
      // Authorization:'http://localhost:8000/api/user',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': 'http://localhost:8000/api/user',
      },
      method: "POST",
      body: JSON.stringify(
        Object.assign(data, { user_type: "content_creator" })
      ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log( data['token']);

        if (data["success"] === true) {
          next();
          setLoading(false);
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
  return (
    <>
      {loading ? (
        <div style={{ height: "40%", marginTop: "3rem" }}>
          <Loader position={"relative"} />
        </div>
      ) : showNational ? (
        <ChoseNationality
          nationality={nationality}
          setNationality={setNationality}
          countries={countries}
        />
      ) : (
        <div className={review ? "payment " : "payment none"}>
          <ChoseRole
            roleType={roleType}
            setRoleType={setRoleType}
            error={error}
          />
        </div>
      )}
      <p className="errors">{responseError ?? ""}</p>

      <Button
        buttonColor="gradient"
        buttonSize="btn--large"
        style={{ width: "100%", opacity: roleType === "" && 0.3 }}
        onClick={() => {
          roleType === ""
            ? setError("Please select your role")
            : nationality === "Select Nationality"
            ? setShowNational(true)
            : finishReg();
        }}
      >
        Next
      </Button>

      <Button
        // buttonColor="gradient"
        buttonStyle={"btn--outline"}
        buttonSize="btn--large"
        style={{ width: "100%" }}
        onClick={back}
      >
        Back{" "}
      </Button>
    </>
  );
};

export default CreatorsFinish;
