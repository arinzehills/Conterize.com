import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Modal2 from "../../../components/Modal/Modal2";
import useFetch from "../../../useFetch";
import useToken from "../../../useToken";
import useUser from "../../../useUser";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import RequestTable from "../../Dashboard/Request/RequestTable";
import Subnav from "../components/Subnav";

const Customers = ({ setHandleNotData }) => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const { user, setUser } = useUser();
  const { token, setToken } = useToken();
  const [cusloading, setLoading] = useState(false);

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
    // { heading: "Company Name", value: "name" },
    { heading: "Email", value: "email" },
    // { heading: "Phone", value: "phone" },
    { heading: "Country", value: "nationality" },
    { heading: "Plan", value: "plan" },
    { heading: "Last Login", value: "last_seen" },

    { heading: "Status", value: "payment_status" },
    { heading: "Action", value: "actions" },
  ];
  const req = [
    {
      firstname: "Achills",
      name: "achillstechnologies",
      phone: "434343",
      status: "under review",
    },
  ];
  const markUserAsPaid = () => {
    setLoading(true);
    const data = {
      token: token,
      payment_status: "paid",
    };
    const url = window.baseUrl + "update";

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': 'http://localhost:8000/api/user',
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log( data['token']);

        if (data["success"] === true) {
          const token = data["token"];
          const user = data["user"];
          setHandleNotData({ message: data.message });
          setLoading(false);
        } else {
          const error = data["message"];
          console.log(error);
          setLoading(false);
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);
      });
  };
  return (
    <>
      {cusloading && <Modal2 />}
      <div className="customers-section">
        <NavComponent
          personsName="Hills"
          showNotification={true}
          handleClick={handleClick}
          pageTitle=""
          setHandleNotData={setHandleNotData}
        />
        <Subnav title={"Customers"} icon="bi:people" />
        <RequestTable
          isAdmin={true}
          isCustomer={true}
          // markUserAsPaid={markUserAsPaid}
          onClickRow={(item) => console.log(item)}
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
