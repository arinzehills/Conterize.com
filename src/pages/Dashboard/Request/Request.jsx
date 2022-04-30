import React from "react";
import NavComponent from "../NavComponent/NavComponent";
import RequestTable from "./RequestTable";

const Request = () => {
  return (
    <>
      <div>
        <NavComponent pageTitle="Request" />
        <RequestTable />
      </div>
    </>
  );
};

export default Request;
