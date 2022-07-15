import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NotPermittedComponent from "../../components/NotPermittedComponent/NotPermittedComponent";
import useToken from "../../useToken";
import NavComponent from "./NavComponent/NavComponent";
import Sidebar from "./Sidebar/Sidebar";

function Dashboard() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const refreshTime = 2000;
  const { token, setToken } = useToken();

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

  // const {user, setUser} = useUser();
  // console.log(token)
  //   if(!token) {
  //       return <Login setToken={setToken} setUser={setUser}/>
  //   }
  return (
    <>
      <Sidebar click={click} handleClick={handleClick} setClick={setClick} />

      <NotPermittedComponent />
      <div className="section">
        {/* <NavComponent handleClick={handleClick} /> */}
        <Outlet context={[click, setClick]} />
      </div>
    </>
  );
}

export default Dashboard;
