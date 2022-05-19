import React from "react";
import { useOutletContext } from "react-router-dom";
import NavComponent from "../../Dashboard/NavComponent/NavComponent";
import Subnav from "../components/Subnav";
import Table from "../components/Table";

const Freelancers = () => {
  const tableData = {
    th: [
      "",
      " name",
      "email",
      "phone",
      "niche",
      "category",
      "total completed",
      "ongoing projects",
    ],
    tr: [
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
    ],
    // td: [
    //     {
    //       requestName: "Content Marketing",
    //       category: "content",
    //       assignTo: "Arinze",
    //       submmitedOn: "20/04/2022",
    //       status: "active",
    //     },
    //     {
    //       requestName: "Content For Youtube",
    //       category: "graphics design",
    //       assignTo: "Arinze",
    //       submmitedOn: "20/04/2022",
    //       status: "under review",
    //     },
    //     {
    //       requestName: "Content Ads",
    //       category: "video",
    //       assignTo: "Arinze",
    //       submmitedOn: "20/04/2022",
    //       status: "archived",
    //     },
    //     {
    //       requestName: "Content For Youtube",
    //       category: "graphics design",
    //       assignTo: "Arinze",
    //       submmitedOn: "20/04/2022",
    //       status: "under review",
    //     },
    //     {
    //       requestName: "Content Ads",
    //       category: "video",
    //       assignTo: "Arinze",
    //       submmitedOn: "20/04/2022",
    //       status: "archived",
    //     },
    //   ],
  };

  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
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
        <Table data={tableData} />
      </div>
    </>
  );
};

export default Freelancers;
