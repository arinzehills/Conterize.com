import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SaveButton from "../../pages/Dashboard/components/SaveButton/SaveButton";
import NavComponent from "../../pages/Dashboard/NavComponent/NavComponent";
import NoDataFound from "../../pages/Dashboard/Request/NoDataFound";
import useFetch from "../../useFetch";
import useUser from "../../useUser";
import { Button } from "../Button/Button";
import TextArea from "../Inputfield/TextArea";
import "./DeliveryComponent.css";
import acceptOrReviewDelivery from "./deliveryfunctions";
import MessageContainer from "./MessageContainer";
const DeliveryComponent = ({ isAdmin, setHandleNotData }) => {
  const fileNamesRef = React.useRef();
  const messagesEndRef = React.useRef(null);
  const [trigger, setTrigger] = useState(false);
  const handleClick = () => setTrigger(!trigger);
  const [filesnamesList, setFilesnamesList] = useState([]);
  const location = useLocation();
  const history = useNavigate();
  const refreshTime = 1111000;
  const { user, setUser } = useUser();
  const [deliveriesData, setDeliveriesData] = useState(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const {
  //   data: deliveriesData,
  //   loading,
  //   error,
  // } = useFetch({
  //   url: window.baseUrl + "getRequestDeliveries",
  //   fetchParamData: {
  //     // user_id: location.state.item.user_id,
  //     request_id: location.state.item.id,
  //   },
  //   secondParam: trigger,
  // });
  console.log(location.state.item);
  const fetchCurrentDeliveryData = async () => {
    const data = {
      request_id: location.state.item.id,
    };

    const fetchdata = await fetch(window.baseUrl + "getRequestDeliveries", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((ddd) => ddd.json())
      .then((data) => {
        setDeliveriesData(data);
        console.log(data);
      });
    //make sure to set it to false so the component is not in constant loading state
  };
  useEffect(() => {
    const comInterval = setInterval(fetchCurrentDeliveryData, refreshTime); //This will refresh the data at regularIntervals of refreshTime
    return () => clearInterval(comInterval); //Clear interval on component unmount to avoid memory leak
  }, [trigger]);
  useEffect(() => {
    fetchCurrentDeliveryData(); //Clear interval on component unmount to avoid memory leak
  }, [trigger]);
  var deliveries = deliveriesData?.deliveries;
  useEffect(() => {
    scrollToBottom();
  }, [trigger, deliveries]);
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
    const data = new FormData();
    data.append("senders_id", user?.id);
    data.append("comments", formValues.comments);
    data.append("request_id", location.state.item.id);

    // const data = {
    //   senders_id: user?.id,
    //   comments: formValues.comments,
    //   request_id: location.state.item.id,
    // };
    for (let i = 0; i < formValues.uploads_materials.length; i++) {
      // console.log(formValues.supporting_materials[i].name);
      data.append("uploads_materials[]", formValues.uploads_materials[i]);
    }
    console.log(Object.fromEntries(data));
    const url = window.baseUrl + "deliver";

    fetch(url, {
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/json",
      //   // 'Authorization': 'http://localhost:8000/api/user',
      // },
      method: "POST",
      body: data,
    })
      .then((response) =>
        // response.text()
        response.json()
      )
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
        isSticky={true}
        setHandleNotData={setHandleNotData}
      />
      <div className="delivery_body">
        {deliveries?.length === 0 && (
          <NoDataFound message={"No delivery yet"} />
        )}

        {deliveries?.map((item) => (
          <MessageContainer
            key={item.id}
            userSide={user?.id === item.senders_id ? "sender" : "reciever"}
            message={item.comments}
            materials={item.uploads_materials}
            urls={item?.uploaded_file_urls}
          />
        ))}
        <div ref={messagesEndRef} style={{ maxHeight: 0 }} />
      </div>
      <div className="delivery_upload_area">
        {location.state.item.status === "archived" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Icon
                icon="carbon:checkmark-filled-error"
                fontSize={"53px"}
                style={{ color: "var(--danger)" }}
              />
              Sorry This has been archived and completed
            </div>
          </div>
        ) : (
          <>
            <div className="delivery_filenames_area">
              <span>{filesnamesList.join(",")}</span>
            </div>
            {!isAdmin && (
              <div
                style={{ position: "absolute", right: 0, marginTop: "-4rem" }}
              >
                {deliveries?.length !== 0 && (
                  <SaveButton
                    secondBtnSize={"160px"}
                    onClick={() =>
                      acceptOrReviewDelivery({
                        request_id: location.state.item.id,
                        urlPath: "requestRevision",
                        history: history,
                      })
                    }
                    onClick2={() =>
                      acceptOrReviewDelivery({
                        request_id: location.state.item.id,
                        urlPath: "acceptDelivery",
                        history: history,
                      })
                    }
                    labels={[
                      "Accept",
                      location.state.item.status === "under review"
                        ? "Under Review"
                        : "Request Revision",
                    ]}
                    secondBtnColor={
                      location.state.item.status === "under review"
                        ? "var(--danger)"
                        : null
                    }
                  />
                )}
              </div>
            )}
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
          </>
        )}
      </div>
    </>
  );
};

export default DeliveryComponent;
