import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NotPermittedComponent from "../../components/NotPermittedComponent/NotPermittedComponent";
import useFetch from "../../useFetch";
import useToken from "../../useToken";
import useUser from "../../useUser";
import NavComponent from "./NavComponent/NavComponent";
import Sidebar from "./Sidebar/Sidebar";

function Dashboard() {
  const [click, setClick] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(true);
  const handleClick = () => setClick(!click);
  const { user, setUser } = useUser();
  const refreshTime = 2000;
  const { token, setToken } = useToken();
  const {
    //this is for content creators only
    data: freelancer,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getAFreelancer",
    fetchParamData: { user_id: user?.["id"] },
  });
  const fetchCurrentUser = async () => {
    const data = await fetch(window.baseUrl + "getCurrentUser?token=" + token)
      .then((ddd) => ddd.json())
      .then((data) => {
        console.log(data);
      });
    //make sure to set it to false so the component is not in constant loading state
  };
  useEffect(() => {
    // const comInterval = setInterval(fetchCurrentUser, refreshTime); //This will refresh the data at regularIntervals of refreshTime
    // return () => clearInterval(comInterval); //Clear interval on component unmount to avoid memory leak
  }, []);

  // console.log(token)
  //   if(!token) {
  //       return <Login setToken={setToken} setUser={setUser}/>
  //   }
  // console.log();
  return (
    <>
      <Sidebar click={click} handleClick={handleClick} setClick={setClick} />

      {user?.user_type === "business_user" &&
        user?.payment_status === "unpaid" &&
        showPermissionModal === true && (
          <NotPermittedComponent
            type={"payment"}
            setShowPermissionModal={setShowPermissionModal}
          />
        )}
      {user?.user_type === "content_creator" &&
        showPermissionModal === true &&
        freelancer?.activated === "no" && (
          <NotPermittedComponent
            message="You account have not been activated"
            setShowPermissionModal={setShowPermissionModal}
          />
        )}
      <div className="section">
        {/* <NavComponent handleClick={handleClick} /> */}
        <Outlet context={[click, setClick]} />
      </div>
    </>
  );
}

export default Dashboard;
