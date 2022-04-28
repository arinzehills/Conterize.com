import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavComponent from "./NavComponent/NavComponent";
import Sidebar from "./Sidebar/Sidebar";

function Dashboard() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const {user, setUser} = useUser();
  // const {  token, setToken } = useToken();
  // console.log(token)
  //   if(!token) {
  //       return <Login setToken={setToken} setUser={setUser}/>
  //   }
  return (
    <>
      <Sidebar click={click} handleClick={handleClick} />

      <div className="section">
        <NavComponent handleClick={handleClick} />
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
