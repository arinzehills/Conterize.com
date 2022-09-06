import React from "react";
import { useLocation } from "react-router-dom";
import RequestDetail from "../../../components/RequestDetail/RequestDetail";

const OrderDetail = ({ setHandleNotData }) => {
  return (
    <>
      <RequestDetail isAdmin={true} setHandleNotData={setHandleNotData} />
    </>
  );
};

export default OrderDetail;
