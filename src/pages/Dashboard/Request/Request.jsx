import React from "react";
import { useOutletContext } from "react-router-dom";
import useFetch from "../../../useFetch";
import useUser from "../../../useUser";
import NavComponent from "../NavComponent/NavComponent";
import RequestTable from "./RequestTable";

const Request = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const { user, setUser } = useUser();

  const {
    data: requests,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getUserRequests",
    fetchParamData: { user_id: user?.["id"] },
  });
  let columnData = [
    { heading: "Request Name", value: "request_name" },
    { heading: "Category", value: "category" },
    { heading: "Assign to", value: "assign_to" },
    { heading: "submmitted by", value: "submmitted_by" },
    { heading: "Status", value: "status" },
  ];
  // console.log(loading);
  const req = [
    {
      request_name: "Achills",
      category: "graphics",
      assign_to: "admin",
      status: "under review",
    },
    {
      request_name: "Achills",
      category: "video",
      assign_to: "admin",
      status: "under review",
    },
  ];
  return (
    <>
      <div>
        <NavComponent pageTitle="Request" handleClick={handleClick} />
        <RequestTable
          title={"All Request"}
          data={requests?.["requests"]}
          columnData={columnData}
          // data={req}
          messageNotFound={"You have not placed any requests yet"} //this displays if no request was placed
          loading={loading}
        />
      </div>
    </>
  );
};

export default Request;
