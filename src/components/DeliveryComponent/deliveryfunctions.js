import { useNavigate } from "react-router-dom";

const acceptOrReviewDelivery = ({
  request_id: request_id,
  urlPath,
  history,
}) => {
  const url = window.baseUrl + `${urlPath}?request_id=` + request_id;

  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    method: "POST",
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["success"] === true) {
        // setHandleNotData({ message: data.message, color: "#41f1b6" });
        history(-1);
      } else {
        // setHandleNotData({ message: data.message, color: "red" });
        //   setHandleNotData(data.message);
      }
      // console.log('Success:', data);
    })
    .catch((error) => {
      console.warn("Error:", error);
    });
};
export default acceptOrReviewDelivery;
