import React from "react";
import { useLocation } from "react-router-dom";
import NavComponent from "../../pages/Dashboard/NavComponent/NavComponent";

const DeliveryComponent = () => {
  const location = useLocation();
  console.log(location.state.item);
  return (
    <>
      <NavComponent
        pageTitle={`Delivery>>${location.state.item.request_name}`}
        // handleClick={handleClick}
        // setHandleNotData={setHandleNotData}
      />
      <div>dadasdsada</div>
    </>
  );
};

export default DeliveryComponent;
