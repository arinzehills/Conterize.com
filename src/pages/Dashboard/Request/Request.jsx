import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import useFetch from "../../../useFetch";
import useUser from "../../../useUser";
import NavComponent from "../NavComponent/NavComponent";
import RequestTable from "./RequestTable";

const Request = ({ setHandleNotData }) => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const { user, setUser } = useUser();
  const history = useNavigate();
  const [activeRow, setActiveRow] = useState(false); //the rows that is clicked or selected
  const [item, setItem] = useState({});
  // console.log(item.id);
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
    // { heading: "submmitted by", value: "created_at" },
    { heading: "submitted by", value: "submitted_by" },
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
        <NavComponent
          pageTitle="Request"
          handleClick={handleClick}
          setHandleNotData={setHandleNotData}
        />
        <RequestTable
          title={"All Request"}
          showCaret={true}
          data={requests?.["requests"]}
          columnData={columnData}
          // data={req}
          messageNotFound={"You have not placed any requests yet"} //this displays if no request was placed
          loading={loading}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          onClickRow={(item) =>
            history("/dashboard/requestdetail", {
              state: {
                item: item,
              },
            })
          }
          runDefualtFunc={false} //this is to determine wether to run the deafault select multiple items or run your own custom function define here
        />
      </div>
    </>
  );
};

export default Request;
