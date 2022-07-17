const handleApproveFreelancer = ({
  data: data,
  setHandleNotData: setHandleNotData,
  token: token,
  setShowPermissionModal: setShowPermissionModal,
}) => {
  console.log(data);
  const url = window.baseUrl + "approveFreelancer?token=" + token;
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["success"] === true) {
        setHandleNotData({ message: data.message, color: "#41f1b6" });
        setShowPermissionModal(false);
      } else {
        setHandleNotData({
          message: data.message + "Error occured",
          color: "red",
        });
        //   setHandleNotData(data.message);
      }
      // console.log('Success:', data);
    })
    .catch((error) => {
      console.warn("Error:", error);
    });
};
export default handleApproveFreelancer;
