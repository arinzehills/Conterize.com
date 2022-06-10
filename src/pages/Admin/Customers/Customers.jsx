import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import useFetch from "../../../useFetch";
import useUser from "../../../useUser";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import RequestTable from "../../Dashboard/Request/RequestTable";
import Subnav from "../components/Subnav";

const Customers = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const { user, setUser } = useUser();
  const [activeRow, setActiveRow] = useState(false); //the rows that is clicked or selected

  const {
    data: requests,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getAllCompanies",
  });
  let columnData = [
    { heading: "Name", value: "firstname" },
    { heading: "Company Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "Country", value: "nationality" },
    { heading: "Plan", value: "plan" },
    { heading: "Status", value: "status" },
  ];
  const req = [
    {
      firstname: "Achills",
      name: "achillstechnologies",
      phone: "434343",
      status: "under review",
    },
  ];
  console.log(requests);
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
        <RequestTable
          isAdmin={true}
          loading={loading}
          data={requests}
          // data={req}
          columnData={columnData}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
        />
      </div>
    </>
  );
};

export default Customers;
