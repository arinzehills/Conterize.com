import React from "react";
import { useOutletContext } from "react-router-dom";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import RequestTable from "../../Dashboard/Request/RequestTable";
import Subnav from "../components/Subnav";

const tableData = {
  th: [" name", "Company name", "Email", "Phone", "Country", "Plan", "Status"],
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

const Customers = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="customers-section">
        <NavComponent
          personsName="Hills"
          showNotification={true}
          handleClick={handleClick}
          pageTitle=""
        />
        <Subnav title={"Customers"} icon="bi:people" />
        <RequestTable isAdmin={true} data={tableData} />
      </div>
    </>
  );
};

export default Customers;
