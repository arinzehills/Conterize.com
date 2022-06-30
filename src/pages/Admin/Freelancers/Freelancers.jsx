import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import useFetch from "../../../useFetch";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import AddTeam from "../../Dashboard/Team/AddTeam";
import Subnav from "../components/Subnav";
import Table from "../components/Table";
import AddFreelancer from "./AddFreelancer";

const Freelancers = ({ handleNotData, setHandleNotData }) => {
  const [openModal, setOpenModal] = useState(false);
  // const [handleNotData, setHandleNotData] = useState("no");
  const tableData = [
    {
      name: "Content Marketing",
      email: "achill@gmail.com",
      phone: "904343",
      niche: "content",
      total: "Arinze",
      ongoing: "20/04/2022",
    },
    {
      name: "Content Marketing",
      email: "achill@gmail.com",
      phone: "904343",
      niche: "content",
      total: "Arinze",
      ongoing: "20/04/2022",
    },
  ];
  const {
    data: freelancers,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getAllFreelancers",
    secondParam: handleNotData,
  });
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  let columnData = [
    { heading: "Name", value: "firstname" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "Niche", value: "role_type" },
    { heading: "Online Status", value: "online_status" },
    { heading: "Last Login", value: "last_seen" },
    { heading: "Total Completed", value: "total_completed" },
    { heading: "Ongoing Projects", value: "ongoing_projects" },
  ];
  return (
    <>
      <AddFreelancer
        openModal={openModal}
        setOpenModal={setOpenModal}
        setHandleNot={setHandleNotData}
        // setHandleNotColor={setHandleNotColor}
        setHandleNotData={setHandleNotData}
      />
      <div style={{ paddingTop: 20 }}>
        <NavComponent
          personsName="Hills"
          showNotification={true}
          handleClick={handleClick}
          pageTitle=""
        />
        <Subnav title={"Freelancers"} icon="fa6-solid:people-carry-box" />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            buttonStyle={"btn--normal"}
            buttonColor="pink"
            onClick={() => setOpenModal(true)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Icon icon="ant-design:user-add-outlined" />
              Freelancer
            </div>
          </Button>
        </div>
        <Table loading={loading} data={freelancers} columnData={columnData} />
      </div>
    </>
  );
};

export default Freelancers;
