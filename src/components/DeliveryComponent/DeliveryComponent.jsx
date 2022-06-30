import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavComponent from "../../pages/Dashboard/NavComponent/NavComponent";
import NoDataFound from "../../pages/Dashboard/Request/NoDataFound";
import TextArea from "../Inputfield/TextArea";
import "./DeliveryComponent.css";
import MessageContainer from "./MessageContainer";
const DeliveryComponent = () => {
  const fileNamesRef = React.useRef();
  const [filesnamesList, setFilesnamesList] = useState([]);

  const pickFileRef = React.useRef();
  const location = useLocation();
  const [files, setFiles] = useState([]);
  const initialValues = {
    message: "",
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
  return (
    <>
      <NavComponent
        pageTitle={`Delivery>>${location.state.item.request_name}`}
        // handleClick={handleClick}
        // setHandleNotData={setHandleNotData}
      />
      <div className="delivery_body">
        {/* <NoDataFound message={"No delivery yet"} /> */}
        <MessageContainer userSide={"sender"} />
        <MessageContainer userSide={"reciever"} />
        <MessageContainer userSide={"sender"} />
        <MessageContainer userSide={"reciever"} />
      </div>
      <div className="delivery_upload_area">
        <div className="delivery_filenames_area">
          <p>{filesnamesList.join(",")}</p>
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
          <TextArea label={"Write a comment..."} width={"60%"} />
          <div className="gradient send_delivery">
            <Icon icon="bi:send" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryComponent;
