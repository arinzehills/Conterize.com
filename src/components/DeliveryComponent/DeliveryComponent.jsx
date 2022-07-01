import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavComponent from "../../pages/Dashboard/NavComponent/NavComponent";
import NoDataFound from "../../pages/Dashboard/Request/NoDataFound";
import useFetch from "../../useFetch";
import useUser from "../../useUser";
import TextArea from "../Inputfield/TextArea";
import "./DeliveryComponent.css";
import MessageContainer from "./MessageContainer";
const DeliveryComponent = () => {
  const fileNamesRef = React.useRef();

  const [trigger, setTrigger] = useState(false);
  const handleClick = () => setTrigger(!trigger);
  const [filesnamesList, setFilesnamesList] = useState([]);
  const location = useLocation();
  const { user, setUser } = useUser();
  const {
    data: deliveriesData,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getRequestDeliveries",
    fetchParamData: {
      // user_id: location.state.item.user_id,
      request_id: location.state.item.id,
    },
    secondParam: trigger,
  });
  var deliveries = deliveriesData?.deliveries;
  // console.log(deliveries);
  const pickFileRef = React.useRef();
  const [files, setFiles] = useState([]);
  const initialValues = {
    comments: "",
    uploads_materials: [],
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleClickMaterials = () => {
    pickFileRef.current.click();
  };
  const handlePickFiles = (e) => {
    setFilesnamesList([]);
    e.preventDefault();

    setFiles(e.target.files);
    setFormValues({
      ...formValues,
      uploads_materials: e.target.files,
    });
  };
  const handleAddMaterialsNames = () => {
    const newArr = [];
    for (let i = 0; i < formValues.uploads_materials.length; i++) {
      console.log(formValues.uploads_materials[i].name);
      newArr.push(formValues.uploads_materials[i].name);
    }
    setFilesnamesList([...filesnamesList, ...newArr]);
  };

  useEffect(() => {
    handleAddMaterialsNames();
    // fileNamesRef = "dsjkds";
  }, [formValues.uploads_materials]);

  const deliver = () => {
    const data = {
      senders_id: user?.id,
      comments: formValues.comments,
      request_id: location.state.item.id,
    };
    const url = window.baseUrl + "deliver";

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
          // setHandleNotData({ message: data.message });
          // setToken(token);
          // setUser(user);
          // history("/dashboard");
          // setLoading(false);
          console.log("success");
        } else {
          const error = data["message"];
          console.log("failire");
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
    // console.log(e.target)
  };
  return (
    <>
      <NavComponent
        pageTitle={`Delivery>>${location.state.item.request_name}`}
        // handleClick={handleClick}
        // setHandleNotData={setHandleNotData}
      />
      <div className="delivery_body">
        {/* <NoDataFound message={"No delivery yet"} /> */}
        {deliveries?.map((item) => (
          <MessageContainer
            userSide={user?.id === item.senders_id ? "sender" : "reciever"}
            message={item.comments}
          />
        ))}
      </div>
      <div className="delivery_upload_area">
        <div className="delivery_filenames_area">
          <span>{filesnamesList.join(",")}</span>
        </div>
        <div className="delivery_upload_area_inner">
          <div
            className=" gradient send_delivery"
            onClick={handleClickMaterials}
          >
            <input
              type="file"
              // name=""
              name="uploads_materials"
              ref={pickFileRef}
              onChangeCapture={handlePickFiles}
              hidden
              multiple
            />
            <Icon icon="ant-design:file-add-outlined" />
          </div>
          <TextArea
            label={"Write a comment..."}
            width={"60%"}
            name={"comments"}
            value={formValues.comments}
            onHandleChange={handleChange}
          />
          <div
            className="gradient send_delivery"
            onClick={() => {
              deliver();
              handleClick();
            }}
          >
            <Icon icon="bi:send" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryComponent;
