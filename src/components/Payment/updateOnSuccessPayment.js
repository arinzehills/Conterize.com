import { useNavigate } from "react-router-dom";

const updateOnSuccessPayment = ({ token: token, data: data }) => {
  const url = window.baseUrl + "upadetePaymentStatus?token=" + token;

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
        history("/login");
        setToken(null);
      } else {
        setHandleNotData({ message: data.message, color: "red" });
        //   setHandleNotData(data.message);
      }
      // console.log('Success:', data);
    })
    .catch((error) => {
      console.warn("Error:", error);
    });
};
export default updateOnSuccessPayment;
