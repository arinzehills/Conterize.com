import React from "react";
import DeliveryComponent from "../../../components/DeliveryComponent/DeliveryComponent";

const Deliver = ({ setHandleNotData }) => {
  return (
    <>
      <div>
        <DeliveryComponent isAdmin={true} setHandleNotData={setHandleNotData} />
      </div>
    </>
  );
};

export default Deliver;
