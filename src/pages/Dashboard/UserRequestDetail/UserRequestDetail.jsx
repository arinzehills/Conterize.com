import React from "react";
import RequestDetail from "../../../components/RequestDetail/RequestDetail";
import useUser from "../../../useUser";

const UserRequestDetail = ({}) => {
  const handleClick = () => setClick(!click);

  const { user, setUser } = useUser();
  return (
    <>
      <RequestDetail />
    </>
  );
};

export default UserRequestDetail;
