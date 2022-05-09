import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button/Button";
import "../../components/Payment/Payment.css";
import "./Register.css";
import DropDownField from "../../components/Inputfield/DropDownField";
import { Icon } from "@iconify/react";
const ChoseNationality = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h2>Country of residence</h2>
        <DropDownField />
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
  const [roleType, setRoleType] = useState("");
  const [error, setError] = useState("");
  //   const nextWrapper = (e) => {
  //     e.preventDefault();
  //     // increaseIndex();
  //     setReview(true);
  //     index = +1;

  //     // setReview(true);
  //   };
  useEffect(() => {
    setTimeout(() => {
      setReview(true);
    }, 100);
  }, []);
  console.log(error);
  return (
    <>
      <div className={review ? "payment " : "payment none"}>
        <ChoseRole
          roleType={roleType}
          setRoleType={setRoleType}
          error={error}
        />
      </div>

      <Button
        buttonColor="gradient"
        buttonSize="btn--large"
        style={{ width: "100%", opacity: roleType === "" && 0.3 }}
        onClick={() => {
          roleType === "" ? setError("Please select your role") : next();
        }}
      >
        Next{" "}
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
