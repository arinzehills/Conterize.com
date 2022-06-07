import React, { useEffect, useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import handleNot from "../../../components/HandleNotification/HandleNot";
import DraftReqestModal from "../../../components/RequestHero/DraftReqestModal";
import useFetch from "../../../useFetch";
import SaveButton from "../../Dashboard/components/SaveButton/SaveButton";
import Table from "../components/Table";
import Freelancers from "./Freelancers";
import "./Freelancers.css";
const FreelancersModal = ({
  setOpenModal,
  onClick,
  activeRow,
  setActiveRow,
  objHasSelected,
  data,
  requestToReassign,
  setRequestToReassign,
  setshowAssignFreelacer,
}) => {
  const {
    data: freelancers,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getAllFreelancers",
  });
  let columnData = [
    { heading: "Name", value: "firstname" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "Niche", value: "role_type" },
    // { heading: "Actions", value: "" },
    // { heading: "Ongoing Projects", value: "ongoing_projects" },
  ];
  const [assignFreelancerName, setAssignFreelancerName] = useState("");
  console.log(assignFreelancerName);
  // Object.entries(activeRow).forEach((key, value) => {
  //   console.log(value);
  //   // if(objHasSelected){}
  // });
  //any value of row is clicked or unclicked trigger an set state

  const handleAssignFreelancer = () => {
    for (let i = 0; i < requestToReassign.length; i++) {
      // console.log(requestToReassign[i]["request_name"]);
      assignFreelancer(assignFreelancerName, requestToReassign[i]["id"]);
    }
    setRequestToReassign([]);
    setActiveRow(false);
    setshowAssignFreelacer(false);
  };

  const assignFreelancer = async (freelancer_name, request_id) => {
    // setLoading(true);
    // const errors={}
    const data = {
      freelancer_name: freelancer_name, //name of the freelancer to assign the request to
      id: request_id, //id of the request to update
    };
    // const url="http://localhost/buyenergy_api/public/api/register";
    const url = window.baseUrl + "assignFreelancer";
    fetch(url, {
      // credentials: 'include
      // Authorization:'http://localhost:8000/api/user',
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
        return data;
        // console.log( data['token']);

        // if (data["success"] === true) {
        //   handleNot({
        //     title: "Success",
        //     message: "Your data have been updated!",
        //     backgroundColor: "var(--success)",
        //   });
        // } else {
        //   handleNot({
        //     title: "Error",
        //     message: "Their is an error in your request data, try again!",
        //     backgroundColor: "var(--danger)",
        //   });
        // }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);
      });
  };
  return (
    <>
      <div
        className="modalBackground"
        onClick={() => {
          //close the modal if the user
          //presses around the body of the page
          //   setOpenModal(false);
        }}
      >
        <div
          onClick={() => {
            // setOpenModal(true);
          }}
          style={{
            top: "15%",
            right: "28%",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
            position: "absolute",
            flexDirection: "column",
            background: "white",
            backdropFilter: blur("33px"),
            transition: "all 0.3s ease-out",

            height: "auto",
            width: "70vw",
            boxShadow: "var(--box-shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2>Freelancers</h2>
              <img src="/images/dullbaby.png" alt="ds" height={100} />
            </div>
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
          </div>
          <Table
            loaderType={"modal"}
            loading={loading}
            data={freelancers}
            columnData={columnData}
            isAdmin={true}
            setAssignFreelancerName={setAssignFreelancerName}
            handleAssignFreelancer={handleAssignFreelancer}
            //this is to trigger the confirmation modal for the update
          />
          <h4
            onClick={() => {
              setOpenModal(false);
            }}
            // style={style}
            className="close_freelancers_modal"
          >
            Close
          </h4>
        </div>
      </div>
    </>
  );
};
// const style = {
//   background: "red",
// };
export default FreelancersModal;
