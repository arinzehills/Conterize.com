import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import DraftReqestModal from "../../../components/RequestHero/DraftReqestModal";
import useFetch from "../../../useFetch";
import useUser from "../../../useUser";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import RequestTable from "../../Dashboard/Request/RequestTable";
import Subnav from "../components/Subnav";
import "./Orders.css";
const Orders = ({ setHandleNotData }) => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [activeRow, setActiveRow] = useState(false); //the rows that is clicked or selected
  const history = useNavigate();
  const { user, setUser } = useUser();
  const [showOrders, setShowOrders] = useState(true);
  const {
    data: orders,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getAllRequest",
    secondParam: activeRow,
  });
  const {
    data: demoRequests,
    demoloading,
    demoerror,
  } = useFetch({
    url: window.baseUrl + "getAllDemo",
    secondParam: activeRow,
  });
  console.log(demoRequests);
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
  let columnDemoData = [
    { heading: "First Name", value: "firstname" },
    { heading: "Last Name", value: "lastname" },
    { heading: "email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "Industry", value: "industry" },
    // { heading: "Status", value: "status" },
    // { heading: "Actions", value: "actions" },
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
          personsName={user?.role_type ?? "Admin"}
          showNotification={true}
          handleClick={handleClick}
          pageTitle=""
          setHandleNotData={setHandleNotData}
        />
        <Subnav />
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            buttonColor={"gradient"}
            onClick={() => setShowOrders(!showOrders)}
          >
            {showOrders ? "Demo Requests" : "Orders"}
          </Button>
        </div>

        {showOrders ? (
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
        ) : (
          <RequestTable
            title={"Demo Request"}
            loading={demoloading}
            isAdmin={true}
            // data={tableData}
            data={demoRequests}
            runDefualtFunc={false}
            columnData={columnDemoData}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            // showCaret={fa}
            onClickRow={(item) =>
              history("/admin/demo-requests-detail", {
                state: {
                  item: item,
                },
              })
            }
          />
        )}
      </div>
    </>
  );
};

export default Orders;
