import React from "react";
import { useOutletContext } from "react-router-dom";
import NavComponent from "../NavComponent/NavComponent";
import RequestTable from "./RequestTable";

const Request = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  return (
    <>
      <div>
        <NavComponent pageTitle="Request" handleClick={handleClick} />
        <RequestTable />
      </div>
    </>
  );
};

export default Request;
