import React from "react";
import { useOutletContext } from "react-router-dom";
import useFetch from "../../../useFetch";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import Subnav from "../components/Subnav";
import Table from "../components/Table";

const Freelancers = () => {
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
  });
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  let columnData = [
    { heading: "Name", value: "firstname" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "Niche", value: "role_type" },
    { heading: "Total Completed", value: "completed_projects" },
    { heading: "Ongoing Projects", value: "ongoing_projects" },
  ];
  return (
    <>
      <div style={{ paddingTop: 20 }}>
        <NavComponent
          personsName="Hills"
          showNotification={true}
          handleClick={handleClick}
          pageTitle=""
        />
        <Subnav title={"Freelancers"} icon="fa6-solid:people-carry-box" />
        <Table loading={loading} data={freelancers} columnData={columnData} />
      </div>
    </>
  );
};

export default Freelancers;
