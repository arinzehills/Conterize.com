import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import Table from "../../Admin/components/Table";
import NavComponent from "../NavComponent/NavComponent";
import RequestTable from "../Request/RequestTable";
import AddTeam from "./AddTeam";

const Team = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [openModal, setOpenModal] = useState(true);
  const [activeRow, setActiveRow] = useState(false); //the rows that is clicked or selected
  let columnData = [
    { heading: "First Name", value: "first_name" },
    { heading: "Last Name", value: "last_name" },
    { heading: "Email", value: "email" },
    { heading: "Role", value: "role" },
    // { heading: "Email", value: "email" },
    // { heading: "submmitted by", value: "submitted_by" },
    // { heading: "Status", value: "status" },
  ];

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
  return (
    <>
      <AddTeam openModal={openModal} setOpenModal={setOpenModal} />
      <div>
        <NavComponent pageTitle="Team" handleClick={handleClick} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ textAlign: "left" }}>2 Team member added</h3>

          <Button onClick={() => setOpenModal(true)} buttonColor={"gradient"}>
            Add Team Member
          </Button>
        </div>
        <RequestTable
          title={""}
          // data={requests?.["requests"]}
          data={req}
          messageNotFound={"You have not placed any requests yet"} //this displays if no request was placed
          columnData={columnData}
          // loading={loading}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
        />
      </div>
    </>
  );
};

export default Team;
