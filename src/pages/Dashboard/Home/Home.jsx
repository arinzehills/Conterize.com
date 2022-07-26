import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ProfilePicsComponent from "../../../components/ProfilePicsComponent/ProfilePicsComponent";
import NavComponent from "../NavComponent/NavComponent";
import RequestTable from "../Request/RequestTable";
import "./Home.css";
import { useOutletContext } from "react-router-dom";
import { Calendar } from "react-calendar";
import useUser from "../../../useUser";
import useToken from "../../../useToken";
import useFetch from "../../../useFetch";
import { Line } from "react-chartjs-2";
import CreatorsEarning from "./CreatorsEarning";
import DashbaordCardContainer from "./DashbaordCardContainer";
import IconAndName from "../Request/IconsWidget";
import NoDataFound from "../Request/NoDataFound";

const RequestProgressCard = ({
  title,
  value,
  profileName,
  userType,
  requests,
}) => {
  console.log(requests);
  return (
    <div
      //  style={{ width: "auto" }}
      className="request-progress-container"
    >
      <div className="rqs-header-wrapper">
        <h4>Profile</h4>
        <div
          //this is div for icon
          className="alarm-icon"
          style={{
            background: "var(--blue-grey)",
            borderRadius: "50%",
            padding: "0.3rem",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            color: "grey",
            fontSize: "13px",
          }}
        >
          <Icon icon="clarity:notification-outline-badged" />
        </div>
      </div>
      <ProfilePicsComponent name={profileName} userType={userType} />
      <h4>Request in progress</h4>
      {requests?.length === 0 ? (
        <div>No Request in progress yet!!!</div>
      ) : (
        requests
          ?.slice(0, 3)
          .map((request) => (
            <IconAndName
              type={request?.category}
              title={request?.request_name}
            />
          ))
      )}
    </div>
  );
};

const Home = ({ setHandleNotData }) => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const [date, setDate] = useState(new Date());
  const { user, setUser } = useUser();
  const { token, setToken } = useToken();
  const [activeRow, setActiveRow] = useState(false); //the rows that is clicked or selected

  const {
    data: requests,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getUserRequests",
    fetchParamData: { user_id: user?.["id"] },
  });

  let columnData = [
    { heading: "Request Name", value: "request_name" },
    { heading: "Category", value: "category" },
    { heading: "Assign to", value: "assign_to" },
    { heading: "submmitted by", value: "submitted_by" },
    { heading: "Status", value: "status" },
  ];

  const onChange = (date) => {
    setDate(date);
  };
  // console.log(name);
  const req = [
    {
      request_name: "Achills",
      category: "graphics",
      assign_to: "admin",
      status: "under review",
    },
    {
      request_name: "Achills",
      category: "video",
      assign_to: "admin",
      status: "under review",
    },
  ];
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        backgroundColor: "#ff724a",
      },
    },
  };
  return (
    <>
      <NavComponent
        handleClick={handleClick}
        personsName={user?.["firstname"]}
        setHandleNotData={setHandleNotData}
      />
      <div className="home">
        <div className="dashboard-wrapper">
          <div className="dash-fst-container">
            {/* the first row for dashboard */}
            <div className="greetings-and-card-wrapper">
              <div style={{ display: window.innerWidth > 960 && "flex" }}>
                <div>
                  <div className="greetings-wrapper">
                    <div className="greetings-text">
                      <h2 color="var(--dark-blue)">
                        Good Evening, {user?.["firstname"]}
                      </h2>
                      {user?.user_type === "business_user" ? (
                        <p>
                          you have {requests?.["draft"]?.length} draft to
                          complete. Do you need help in requesting content?
                          Invite team members or contact your content director
                          to assist you.
                        </p>
                      ) : (
                        <p>
                          You have 4 ongoing projects to complete. Please finish
                          up as soon as possible. as clients are waiting for
                          your delivery. Regards, Conterize Team
                        </p>
                      )}
                    </div>
                    <div className="greetings-img">
                      {/* <img src="/svg/womandashboard.svg" alt="" /> */}
                    </div>
                  </div>
                  <DashbaordCardContainer
                    user_type={user?.["user_type"]}
                    requests={requests}
                  />
                </div>
                {user?.user_type === "content_creator" && <CreatorsEarning />}
              </div>
            </div>
            <RequestProgressCard
              profileName={user?.["firstname"]}
              userType={user?.["user_type"]}
              requests={requests?.requests}
            />
          </div>
          <div className="dash-sec-container">
            {/* second row for dashboard */}
            <RequestTable
              title={"Draft Request"}
              data={requests?.["draft"]}
              // data={req}
              messageNotFound={"You have no request in your draft"} //this displays if no request was placed
              columnData={columnData}
              loading={loading}
              activeRow={activeRow}
              setActiveRow={setActiveRow}
            />
            {/* <Calendar
              onChange={onChange}
              value={date}
              style={{ width: "20px" }}
            /> */}
          </div>
          {/* <Calendar
            onChange={onChange}
            value={date}
            style={{ width: "20px" }}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
