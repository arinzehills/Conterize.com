import React from "react";
import { useOutletContext } from "react-router-dom";
import NavComponent from "../NavComponent/NavComponent";

const Team = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  return (
    <>
      <div>
        <NavComponent pageTitle="Team" handleClick={handleClick} />
      </div>
    </>
  );
};

export default Team;
