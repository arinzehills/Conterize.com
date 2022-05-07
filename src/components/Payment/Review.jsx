import React from "react";

const Review = ({ className }) => {
  return (
    <>
      <div className="review-order-section">
        <div className={className}>
          <div>
            <h2 style={{ color: "var(--mypurple)" }}>Review Order</h2>
          </div>
          <div className="review-order-contents">
            <p>first name</p>
            <p>Christher</p>
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
