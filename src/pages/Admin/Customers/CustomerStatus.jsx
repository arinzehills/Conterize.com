import React from "react";

const CustomerStatus = ({ payment_status }) => {
  return (
    <>
      <div
        className={
          payment_status === "paid"
            ? "online_status online"
            : " online_status offline"
        }
        style={{
          //   padding: "1rem",
          background: payment_status === "unpaid" && "rgba(146, 3, 255, 0.362)",
          color: payment_status === "unpaid" && "var(--light-purple)",
        }}
      >
        {payment_status}
      </div>
    </>
  );
};

export default CustomerStatus;
