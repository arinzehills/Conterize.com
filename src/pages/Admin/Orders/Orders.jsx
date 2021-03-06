import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import DraftReqestModal from "../../../components/RequestHero/DraftReqestModal";
import useFetch from "../../../useFetch";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import RequestTable from "../../Dashboard/Request/RequestTable";
import Subnav from "../components/Subnav";
import "./Orders.css";
const Orders = ({ setHandleNotData }) => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [activeRow, setActiveRow] = useState(false); //the rows that is clicked or selected
  const history = useNavigate();

  const {
    data: orders,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getAllRequest",
    secondParam: activeRow,
    method: "GET",
  });

  useEffect(() => {}, []);
  let columnData = [
    { heading: "Request Name", value: "request_name" },
    { heading: "Customer", value: "request_name" },
    { heading: "Date Created", value: "submitted_by" },
    { heading: "Category", value: "category" },
    { heading: "Assign To", value: "assign_to" },
    { heading: "Status", value: "status" },
    { heading: "Actions", value: "actions" },
  ];
  const tableData = [
    {
      name: "Content Marketing",
      email: "achill@gmail.com",
      phone: "904343",
      category: "content",
      assign_to: "Arinze",
      status: "20/04/2022",
    },
    {
      request_name: "aiodasd Marketing",
      email: "achill@gmail.com",
      phone: "904343",
      category: "video",
      total: "Arinze",
      status: "under review",
    },
  ];
  return (
    <>
      <div>
        <NavComponent
          personsName="Hills"
          showNotification={true}
          handleClick={handleClick}
          pageTitle=""
          setHandleNotData={setHandleNotData}
        />
        <Subnav />

        <RequestTable
          title={"All orders"}
          loading={loading}
          isAdmin={true}
          // data={tableData}
          data={orders}
          columnData={columnData}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          // showCaret={fa}
          onClickRow={(item) =>
            history("/admin/orderdetail", {
              state: {
                item: item,
              },
            })
          }
        />
      </div>
    </>
  );
};

export default Orders;
