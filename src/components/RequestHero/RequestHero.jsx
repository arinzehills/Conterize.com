import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import { useNavigate, useOutletContext } from "react-router-dom";
import DashboardInput from "../../pages/Dashboard/components/DashboardInput/DashboardInput";
import SaveButton from "../../pages/Dashboard/components/SaveButton/SaveButton";
import NavComponent from "../../pages/Dashboard/NavComponent/NavComponent";
import useUser from "../../useUser";
import { Button } from "../Button/Button";
import handleNot from "../HandleNotification/HandleNot";
import TextArea from "../Inputfield/TextArea";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
import Modal2 from "../Modal/Modal2";
import DraftReqestModal from "./DraftReqestModal";
import SupportUpload from "./SupportUpload";

const RequestHero = ({ requestTitle, requestType }) => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const history = useNavigate();
  let [referenceLinks, setReferenceLinks] = useState([{ links: "" }]);
  let [writing_topics, setWriting_topics] = useState([{ topics: "" }]);
  const [loading, setLoading] = useState(false);
  const [showDraftModal, setShowDraftModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseError, setResponseError] = useState("");
  const { user, setUser } = useUser();
  const [isDraft, setIsDraft] = useState("no");
  const user_id = user?.["id"];
  const user_name = user?.["firstname"];
  const [filesnamesList, setFilesnamesList] = useState([]);
  // let filesnames = filesnamesList.toString();

  const initialValues = {
    user_id: user_id,
    request_name: "",
    request_type: "",
    category: requestType,
    quantity: "",
    size: "",
    reference_links: [{}],
    description: "",
    writing_topics: [{}],
    supporting_info: "",
    supporting_materials: [],
    video_format: "ddsadas",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const inputValues = [
    formValues.request_name,
    formValues.request_type,
    formValues.category,
    formValues.quantity,
    formValues.size, //idea dimension, word count, videolength
    formValues.reference_links,
    formValues.description,
    formValues.writing_topics,
    formValues.supporting_info,
    formValues.supporting_materials,
  ];

  const handleAddLinks = () => {
    setReferenceLinks([...referenceLinks, { links: "" }]);
  };
  const handleRemoveLinks = (index) => {
    const list = [...referenceLinks];
    list.splice(index, 1); //starting from index zero remove one service
    setReferenceLinks(list); //set links to new list
  };
  const handleLinksChange = (e, index) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    const list = [...referenceLinks];
    list[index][name] = value;
    setReferenceLinks(list);
  };

  // console.log(referenceLinks);
  useEffect(() => {
    setFormValues({ ...formValues, reference_links: referenceLinks });
  }, [referenceLinks]);
  useEffect(() => {
    setFormValues({ ...formValues, writing_topics: writing_topics });
  }, [writing_topics]);

  const handleAddTopics = () => {
    setWriting_topics([...writing_topics, { topics: "" }]);
  };
  console.log(formValues.writing_topics);
  console.log(formValues.reference_links);
  const handleRemoveTopics = (index) => {
    const list = [...writing_topics];
    list.splice(index, 1); //starting from index zero remove one service
    setWriting_topics(list); //set links to new list
  };
  const handleTopicsChange = (e, index) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    const list = [...writing_topics];
    list[index][name] = value;
    setWriting_topics(list);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
    // console.log(e.target)
  };
  // console.log(inputValues)
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
      requestContent();
    }
  }, [formErrors]);

  const requestContent = async () => {
    setLoading(true);
    const data = new FormData();
    //data for main request table
    data.append("status", "under review");
    data.append("submmitted_by", user_name);
    data.append("assign_to", "admin");
    data.append("is_draft", isDraft);
    // this is data for request detail
    data.append("user_id", user_id);
    data.append("request_name", formValues.request_name);
    data.append("request_type", formValues.request_type);
    data.append("category", formValues.category);
    data.append("quantity", formValues.quantity);
    data.append("size", formValues.size);
    data.append("description", formValues.description);
    // data.append("writing_topics", formValues.writing_topics);
    formValues.writing_topics.forEach((item) => {
      data.append("writing_topics[]", JSON.stringify(item));
    });
    formValues.reference_links.forEach((item) => {
      data.append("reference_links[]", JSON.stringify(item));
    });
    // data.append("reference_links", formValues.reference_links);

    for (let i = 0; i < formValues.supporting_materials.length; i++) {
      // console.log(formValues.supporting_materials[i].name);
      data.append("supporting_materials[]", formValues.supporting_materials[i]);
    }
    console.log(formValues.supporting_materials.length);
    console.log(Object.fromEntries(data));
    const url = window.baseUrl + "addRequest";

    fetch(url, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   Accept: "application/json",
      //   // 'Authorization': 'http://localhost:8000/api/user',
      // },
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log( data['token']);

        if (data["success"] === true) {
          console.log("success");
          handleNot({
            title: "Success",
            message: "Your request have been Placed!",
            backgroundColor: "var(--success)",
          });
          setLoading(false);
        } else {
          handleNot({
            title: "Error",
            message: "Their is an error in your request data, try again!",
            backgroundColor: "var(--danger)",
          });
          const error = data["message"];
          console.log(error);
          setResponseError(error);
          setLoading(false);
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        setLoading(false);

        console.warn("Error:", error);
      });
  };
  // console.log(loading)
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.request_name) {
      errors.request_name = "Name  is required";
    }
    if (!values.description) {
      errors.description = "description is required";
    }
    if (requestType == "graphics") {
      if (!values.size) {
        errors.size = "Word count is required";
      }
    }
    if (requestType == "video") {
      if (!values.size) {
        errors.size = "Video length is required";
      }
    }
    if (requestType == "graphics") {
      if (!values.size) {
        errors.size = "Dimension is required";
      }
    }
    if (!values.writing_topics) {
      errors.writing_topics = "writing topics is required";
    }

    return errors;
  };
  const [files, setFiles] = useState([]);
  const pickFileRef = React.useRef();
  const fileNamesRef = React.useRef();

  const handlePickFiles = (e) => {
    setFilesnamesList([]);
    e.preventDefault();

    setFiles(e.target.files);
    setFormValues({
      ...formValues,
      supporting_materials: e.target.files,
    });
  };
  const handleAddMaterialsNames = () => {
    const newArr = [];
    for (let i = 0; i < formValues.supporting_materials.length; i++) {
      console.log(formValues.supporting_materials[i].name);
      newArr.push(formValues.supporting_materials[i].name);
    }
    setFilesnamesList([...filesnamesList, ...newArr]);
  };

  useEffect(() => {
    handleAddMaterialsNames();
    // fileNamesRef = "dsjkds";
  }, [formValues.supporting_materials]);
  const handleClickMaterials = () => {
    pickFileRef.current.click();
  };
  console.log(filesnamesList);
  console.log(formValues.supporting_materials.length);
  return (
    <>
      <ReactNotifications />

      {loading && <Modal2 />}
      {showDraftModal && (
        <DraftReqestModal
          onClick={onSubmit} //for the yes button
          onClick2={() => {
            setIsDraft("no");
            setShowDraftModal(false);
          }} //for the no button
        />
      )}
      <NavComponent handleClick={handleClick} pageTitle={"New Request"} />

      <div className="request-header">{requestTitle}</div>
      <div className="request-section">
        <div className="request-first-container">
          <h3>
            pick a name for your
            {requestType == "video"
              ? " Video Creation"
              : requestType == "graphics"
              ? " Graphics Design"
              : " Writing "}
          </h3>

          <DashboardInput
            name={"request_name"}
            value={formValues.request_name}
            onHandleChange={handleChange}
            style={{ width: "100%" }}
            placeholder="Select Type"
          />
          <p className="errors">{formErrors.request_name}</p>

          <h3>
            {requestType == "video"
              ? " Video Creation Type"
              : requestType == "graphics"
              ? "Design Type"
              : "Content Writing Type"}
          </h3>
          <DashboardInput
            name={"request_type"}
            value={formValues.request_type}
            onHandleChange={handleChange}
            style={{ width: "100%" }}
            placeholder="Select Type"
          />
          <p className="errors">{formErrors.request_type}</p>
          {(requestType === "graphics" || requestType === "content") && (
            <div>
              <h3>Quantity </h3>
              <DashboardInput
                name="quantity"
                value={formValues.quantity}
                onHandleChange={handleChange}
                style={{ width: "100%" }}
                placeholder="Type here or select"
              />
              <p className="errors">{formErrors.quantity}</p>
            </div>
          )}
          {requestType === "content" && (
            <div>
              <h3>Word count </h3>
              <DashboardInput
                style={{ width: "100%" }}
                name="size"
                value={formValues.size}
                onHandleChange={handleChange}
                placeholder="Type here or select"
              />

              <p className="errors">{formErrors.size}</p>
            </div>
          )}
          {requestType === "graphics" && (
            <div>
              <h3>Dimension </h3>
              <DashboardInput
                style={{ width: "100%" }}
                name="size"
                onHandleChange={handleChange}
                value={formValues.size}
                placeholder="Type here or select"
              />
              <p className="errors">{formErrors.size}</p>
            </div>
          )}
          {requestType === "video" && (
            <div>
              <h3>Video length </h3>
              <DashboardInput
                name="size"
                value={formValues.size}
                style={{ width: "100%" }}
                placeholder="Type here or select"
                onHandleChange={handleChange}
              />
              <p className="errors">{formErrors.size}</p>

              <h3>Video format </h3>
              <DashboardInput
                name="video_format"
                style={{ width: "100%" }}
                placeholder="Type here or select"
                onHandleChange={handleChange}
              />
            </div>
          )}
          <h3>Examples or Refrence Links </h3>
          {referenceLinks.map((links, index) => (
            <div style={{ marginTop: "0.4rem" }} key={index}>
              <InputWithIcon
                // inputkey={index + 1}
                name="links"
                iconName={"bi:dash-square-fill"}
                style={{ width: "100%" }}
                inputHeight="37px"
                placeholder="Type here or select"
                onClickIcon={() => handleRemoveLinks(index)}
                onHandleChange={(e) => handleLinksChange(e, index)}
              />
              {referenceLinks.length - 1 === index &&
                referenceLinks.length < 3 && (
                  <div
                    style={{
                      color: "var(--light-purple)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onClick={handleAddLinks}
                  >
                    <Icon icon="akar-icons:circle-plus-fill" fontSize={23} />
                    <p>Add Another</p>
                  </div>
                )}
            </div>
          ))}
          {requestType === "content" && <h3>Writing topics </h3>}
          {requestType === "content" &&
            writing_topics.map((topics, index) => (
              <div style={{ marginTop: "0.4rem" }} key={index}>
                <InputWithIcon
                  // inputkey={index + 1}
                  name="topics"
                  iconName={"bi:dash-square-fill"}
                  style={{ width: "100%" }}
                  inputHeight="37px"
                  placeholder="Type here or select"
                  onClickIcon={() => handleRemoveTopics(index)}
                  onHandleChange={(e) => handleTopicsChange(e, index)}
                />
                {writing_topics.length - 1 === index &&
                  writing_topics.length < 3 && (
                    <div
                      style={{
                        color: "var(--light-purple)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                      onClick={handleAddTopics}
                    >
                      <Icon icon="akar-icons:circle-plus-fill" fontSize={23} />
                      <p>Add Another</p>
                    </div>
                  )}
              </div>
            ))}
          <h3>Description </h3>
          <TextArea
            // style={{ width: "100%", height: "70px" }}
            name={"description"}
            width={"98%"}
            label={
              requestType == "video"
                ? "Write a short description  of your video"
                : requestType == "graphics"
                ? "Write a short description of your graphic"
                : "Write a short description of your content "
            }
            value={formValues.description}
            onHandleChange={handleChange}
          />
          <p className="errors">{formErrors.description}</p>
        </div>
        <div
          className="div"
          style={{ width: window.innerWidth < 960 && "100%" }}
        >
          <div className="request-scn-container">
            {/* {requestType === "video" && (
              <div>
                <h3>Overview</h3>
                <TextArea
                  // style={{ width: "100%", height: "70px" }}
                  name={"overview"}
                  width={"98%"}
                  placeholder="type here..."
                  value={formValues.overview}
                  onHandleChange={handleChange}
                />
                <p className="errors">{formErrors.overview}</p>
              </div>
            )} */}
            <h3>supporting info</h3>
            <TextArea
              // style={{ width: "100%", height: "70px" }}
              name={"supporting_info"}
              width={"98%"}
              label={
                requestType == "video"
                  ? "Pls write any other instruction for video creator regarding this request"
                  : requestType == "graphics"
                  ? "Pls write any other instruction for your graphic designer regarding this request"
                  : "Pls write any other instruction for your writer regarding this request "
              }
              value={formValues.supporting_info}
              onHandleChange={handleChange}
            />
            <p className="errors">{formErrors.supporting_info}</p>

            <h3>Supporting materials </h3>

            {/* <InputWithIcon
              onClickIcon={handleClickMaterials}
              value={filesnamesList}
              placeholder={filesnamesList}
              onHandleChange={handleChange}
              showbtn={true}
            /> */}
            <p>{filesnamesList.join(",")}</p>
            <SupportUpload
              onClickBtn={handleClickMaterials}
              fileNamesRef={fileNamesRef}
            />
            <input
              type="file"
              // name=""
              name="supporting_materials"
              ref={pickFileRef}
              onChangeCapture={handlePickFiles}
              hidden
              multiple
            />
          </div>
          <div
            className="div"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              style={{
                width: "96px",
                height: "43px",
                color: "grey",
                border: "1px solid #ececec",
                background: "#fff",
              }}
              onClick={() => history(-1)}
            >
              {"Back"}
            </Button>
            <SaveButton
              labels={["Draft", "Request Now"]}
              secondBtnSize="auto"
              firstBtnColor="#35438C"
              onClick={onSubmit} //for the draft request
              // onClick={onDraftRequest}
              onClick2={() => {
                setShowDraftModal(true);
                setIsDraft("yes");
              }} //for the draft
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestHero;
