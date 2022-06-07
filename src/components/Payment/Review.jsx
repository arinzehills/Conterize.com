import React from "react";

const Review = ({ className, firstname, lastname, email }) => {
  return (
    <>
      <div className="review-order-section">
        <div className={className}>
          <div>
            <h2 style={{ color: "var(--mypurple)" }}>Review Order</h2>
          </div>
          <div className="review-order-contents">
            <p>First name</p>
            <p>{firstname ?? "Christher"}</p>
          </div>
          <div className="review-order-contents">
            <p>Last name</p>
            <p>{lastname}</p>
          </div>
          <div className="review-order-contents">
            <p>Email</p>
            <p>{email ?? "Myemail.com"}</p>
          </div>
          {/* <p>last name</p>
          <p>Email</p>
          <p>Total price</p> */}
        </div>
      </div>
    </>
  );
};

export default Review;
