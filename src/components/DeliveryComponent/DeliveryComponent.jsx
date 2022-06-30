import { Icon } from "@iconify/react";
import React from "react";
import { useLocation } from "react-router-dom";
import NavComponent from "../../pages/Dashboard/NavComponent/NavComponent";
import NoDataFound from "../../pages/Dashboard/Request/NoDataFound";
import TextArea from "../Inputfield/TextArea";
import "./DeliveryComponent.css";
const DeliveryComponent = () => {
  const location = useLocation();
  return (
    <>
      <NavComponent
        pageTitle={`Delivery>>${location.state.item.request_name}`}
        // handleClick={handleClick}
        // setHandleNotData={setHandleNotData}
      />
      <div className="delivery_body">
        <NoDataFound message={"No delivery yet"} />
      </div>
      <div className="delivery_upload_area">
        <div className=" gradient send_delivery">
          <Icon icon="ant-design:file-add-outlined" />
        </div>
        <TextArea label={"Write a comment..."} width={"60%"} />
        <div className="gradient send_delivery">
          <Icon icon="bi:send" />
        </div>
      </div>
    </>
  );
};

export default DeliveryComponent;
