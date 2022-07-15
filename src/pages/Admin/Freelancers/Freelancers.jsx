import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import DraftReqestModal from "../../../components/RequestHero/DraftReqestModal";
import useFetch from "../../../useFetch";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import SettingsTabs from "../../Dashboard/Settings/SettingsTabs";
import AddTeam from "../../Dashboard/Team/AddTeam";
import Subnav from "../components/Subnav";
import Table from "../components/Table";
import AddFreelancer from "./AddFreelancer";

const Freelancers = ({ handleNotData, setHandleNotData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);

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
  const {
    data: appovedfreelancers,
    appovedloading,
    appovederror,
  } = useFetch({
    url: window.baseUrl + "getApprovedFreelancers",
    secondParam: handleNotData,
  });
  const {
    data: unApprovedFreelancers,
    unApprovedloading,
    unApprovederror,
  } = useFetch({
    url: window.baseUrl + "getUnApprovedFreelancers",
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
  let columnDataForPending = [
    { heading: "Name", value: "firstname" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "Niche", value: "role_type" },
    { heading: "Online Status", value: "online_status" },
    { heading: "Last Login", value: "last_seen" },
    // { heading: "Actions", value: "actions" },
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
      {showPermissionModal && (
        <DraftReqestModal
          message={"Approve Freelancer?"}
          seconBtnLabel="Yes"
          firstBtnLabel={"Reject"}
          // seconBtnSize="115px"
          setOpenModal={setShowPermissionModal}
        />
      )}
      <div style={{ paddingTop: 20 }}>
        <NavComponent
          personsName="Hills"
          showNotification={true}
          handleClick={handleClick}
          pageTitle=""
        />
        <Subnav title={"Freelancers"} icon="fa6-solid:people-carry-box" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SettingsTabs
            title1={"All"}
            title2={"Approved"}
            title3={"Pending Approval"}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
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
        {currentTab === 1 ? (
          <Table loading={loading} data={freelancers} columnData={columnData} />
        ) : currentTab === 2 ? (
          <Table
            loading={loading}
            data={appovedfreelancers}
            columnData={columnData}
          />
        ) : (
          <>
            <h3>Pending Approval</h3>
            <Table
              loading={unApprovedloading}
              data={unApprovedFreelancers}
              columnData={columnDataForPending}
              onClickRow={(item) => setShowPermissionModal(true)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Freelancers;
