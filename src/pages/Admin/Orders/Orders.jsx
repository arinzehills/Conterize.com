import { Icon } from "@iconify/react";
import React from "react";
import { useOutletContext } from "react-router-dom";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import RequestTable from "../../Dashboard/Request/RequestTable";
import Subnav from "../components/Subnav";
import "./Orders.css";
const Orders = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const subNavData = [
    {
      title: "Share",
      icon: "ci:share-outline",
    },
    {
      title: "Sort",
      icon: "emojione:clockwise-vertical-arrows",
    },
    {
      title: "Filter",
      icon: "bx:filter-alt",
    },
  ];
  const tableData = {
    th: [
      "",
      "request name",
      "Customer",
      "Date Created",
      "Category",
      "Assigned to",
      "Status",
    ],
    td: [
      {
        requestName: "Content Marketing",
        category: "content",
        assignTo: "Arinze",
        submmitedOn: "20/04/2022",
        status: "active",
      },
      {
        requestName: "Content For Youtube",
        category: "graphics design",
        assignTo: "Arinze",
        submmitedOn: "20/04/2022",
        status: "under review",
      },
      {
        requestName: "Content Ads",
        category: "video",
        assignTo: "Arinze",
        submmitedOn: "20/04/2022",
        status: "archived",
      },
      {
        requestName: "Content For Youtube",
        category: "graphics design",
        assignTo: "Arinze",
        submmitedOn: "20/04/2022",
        status: "under review",
      },
      {
        requestName: "Content Ads",
        category: "video",
        assignTo: "Arinze",
        submmitedOn: "20/04/2022",
        status: "archived",
      },
    ],
  };
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

        <RequestTable isAdmin={true} data={tableData} />
      </div>
    </>
  );
};

export default Orders;
