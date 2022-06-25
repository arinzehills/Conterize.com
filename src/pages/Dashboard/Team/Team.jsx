import React, { useState } from "react";
import { useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { Link, useOutletContext } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import handleNot from "../../../components/HandleNotification/HandleNot";
import DraftReqestModal from "../../../components/RequestHero/DraftReqestModal";
import useFetch from "../../../useFetch";
import useToken from "../../../useToken";
import useUser from "../../../useUser";
import Table from "../../Admin/components/Table";
import NavComponent from "../NavComponent/NavComponent";
import RequestTable from "../Request/RequestTable";
import AddTeam from "./AddTeam";

const Team = ({ setHandleNotForTeam }) => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [openModal, setOpenModal] = useState(false);
  const [handleNotData, setHandleNotData] = useState("no");
  const [handleNotColor, setHandleNotColor] = useState("#41f1b6");
  const [activeRow, setActiveRow] = useState(false); //the rows that is clicked or selected

  const { user, setUser } = useUser();
  const { token, setToken } = useToken();

  const {
    data: teamMembers,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "members",
    fetchParamData: { id: user?.["current_team_id"] },
    secondParam: handleNotData,
  });
  let columnData = [
    { heading: "First Name", value: "firstname" },
    { heading: "Last Name", value: "lastname" },
    { heading: "Email", value: "email" },
    { heading: "Online Status", value: "online_status" },
    { heading: "Last Login", value: "last_seen" },
    // user?.["id"] === teamMembers?.[0]["owner_id"] &&
    {
      heading: "actions",
      value: "actions",
    },
  ];
  let inviteColumnData = [
    { heading: "First Name", value: "firstname" },
    { heading: "Last Name", value: "lastname" },
    { heading: "Email", value: "email" },
    { heading: "", value: "Online" },
    { heading: "", value: "Last Login" },
    {
      heading: "actions",
      value: "actions",
    },
  ];

  let usersInTeam = teamMembers?.[0]["users"];
  let teamInvites = teamMembers?.[0]["invites"];

  useEffect(() => {
    if (handleNotData !== "no") {
      handleNot({
        title: "Success",
        message: handleNotData,
        backgroundColor: handleNotColor ?? "var(--success)",
      });
    }
  }, [handleNotData]);
  const req = [
    {
      first_name: "Achills",
      last_name: "chukwu",
      email: "graphics",
      assign_to: "admin",
      status: "under review",
    },
    {
      last_name: "Chris",
      first_name: "Achills",
      email: "graphics",
      assign_to: "admin",
      status: "under review",
    },
  ];
  const [openDeleteModal, setDeleteOpenModal] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  const current_team_id = user?.["current_team_id"];

  const actOnMember = ({ user_id: user_id, actionUrl: urlRs, dataRs }) => {
    console.log(current_team_id);
    const data = dataRs;
    const url = urlRs;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["success"] === true) {
          setHandleNotColor("#41f1b6");
          setDeleteOpenModal(false);
          setHandleNotData(data.message);
        } else {
          setHandleNotColor("red");
          setDeleteOpenModal(false);
          setHandleNotData(data.message);
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);
      });
  };
  return (
    <>
      {openDeleteModal && (
        <DraftReqestModal
          message={"Are u sure you want to delete?"}
          setOpenModal={setDeleteOpenModal}
          onClick={() => {
            actOnMember({
              dataRs: {
                user_id: deleteID,
                team_id: current_team_id,
                token: token,
              },
              actionUrl: window.baseUrl + "deleteMember",
            });
            setHandleNotData("");
          }}
        />
      )}
      {user?.["id"] === teamMembers?.[0]["owner_id"] ? (
        <AddTeam
          openModal={openModal}
          setOpenModal={setOpenModal}
          setHandleNot={setHandleNotData}
          setHandleNotColor={setHandleNotColor}
        />
      ) : (
        <AddTeam
          className={"autoMode"}
          openModal={openModal}
          setOpenModal={setOpenModal}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "capitalize",
            }}
          >
            {" "}
            Sorry You dont have permission to add team members
            <Button
              style={{
                width: "96px",
                height: "43px",
                color: "grey",
                border: "1px solid #ececec",
                background: "#fff",
              }}
              onClick={() => setOpenModal(false)}
            >
              Go back
            </Button>
          </div>
        </AddTeam>
      )}
      <ReactNotifications />

      <div>
        <NavComponent
          pageTitle="Team"
          handleClick={handleClick}
          setHandleNotData={setHandleNotForTeam}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 style={{ textAlign: "left" }}>
              {teamMembers?.[0]["users"].length} Team member(s) added
            </h3>
            <h5 style={{ textAlign: "left" }}>
              Team Name: {teamMembers?.[0]["name"]}
            </h5>
          </div>

          {/* {user?.["id"] === teamMembers?.[0]["owner_id"] && ( */}
          <Button onClick={() => setOpenModal(true)} buttonColor={"gradient"}>
            Add Team Member
          </Button>
          {/* )} */}
        </div>
        <Table
          title={""}
          // isAdmin={true}
          // data={requests?.["requests"]}
          data={usersInTeam}
          // data={req}
          messageNotFound={"Added to team yet"} //this displays if no request was placed
          columnData={columnData}
          loading={loading}
          loaderType="modal"
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          onClickRowButton={(item) => {
            setDeleteID(item.item.id);
            setDeleteOpenModal(item);
          }}
        />
        {/* Pending invites starts here */}
        <div style={{ height: 20 }}></div>
        <h3 style={{ textAlign: "left" }}>Pending Invites</h3>
        {user?.["id"] === teamMembers?.[0]["owner_id"] ? (
          <Table
            title={"people invited that are yet to accept to join you team"}
            // isAdmin={true}
            data={teamInvites}
            isInvition={true}
            messageNotFound={"No pending Invites"} //this displays if no request was placed
            columnData={inviteColumnData}
            loading={loading}
            loaderType="modal"
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            onClickResendButton={(item) => {
              console.log(item);
              actOnMember({
                actionUrl: window.baseUrl + "resendInvite",
                dataRs: {
                  invite_id: item.id,
                  token: token,
                },
              });
              // setDeleteID(item.item.id);
              // setDeleteOpenModal(item);
            }}
            onClickRowButton={(item) => {
              //when user click the delete btn
              console.log(item);
              actOnMember({
                actionUrl: window.baseUrl + "deleteInvite",
                dataRs: {
                  invite_id: item.item.id,
                },
              });
            }}
          />
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            You not allowed to view this content you are not the owner of the
            team
          </div>
        )}
      </div>
    </>
  );
};

export default Team;
