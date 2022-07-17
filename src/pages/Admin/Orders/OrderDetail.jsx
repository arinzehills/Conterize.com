import React from "react";
import RequestDetail from "../../../components/RequestDetail/RequestDetail";

const OrderDetail = ({ setHandleNotData }) => {
  return (
    <>
      <RequestDetail isAdmin={true} setHandleNotData={setHandleNotData} />
    </>
  );
};

export default OrderDetail;
