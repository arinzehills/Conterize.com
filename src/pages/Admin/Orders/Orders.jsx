import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import DraftReqestModal from "../../../components/RequestHero/DraftReqestModal";
import useFetch from "../../../useFetch";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import RequestTable from "../../Dashboard/Request/RequestTable";
import Subnav from "../components/Subnav";
import "./Orders.css";
const Orders = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [activeRow, setActiveRow] = useState(false); //the rows that is clicked or selected

  const {
    data: orders,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getAllRequest",
    secondParam: activeRow,
  });

  useEffect(() => {}, []);
  let columnData = [
    { heading: "Request Name", value: "request_name" },
    { heading: "Customer", value: "request_name" },
    { heading: "Date Created", value: "request_name" },
    { heading: "Category", value: "category" },
    { heading: "Assign To", value: "assign_to" },
    { heading: "Status", value: "status" },
  ];

  return (
    <>
      <div>
        <NavComponent
          personsName="Hills"
          showNotification={true}
          handleClick={handleClick}
          pageTitle=""
        />
        <Subnav />

        <RequestTable
          title={"All orders"}
          loading={loading}
          isAdmin={true}
          data={orders}
          columnData={columnData}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
        />
      </div>
    </>
  );
};

export default Orders;
