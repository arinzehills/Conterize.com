import React from "react";

const Review = ({ className, firstname, lastname, email, planData }) => {
  return (
    <>
      <div className="review-order-section">
        <div className={className}>
          <div>
            <h2 style={{ color: "var(--mypurple)" }}>Review Order</h2>
            <p
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                background: "#c4f0ff",
                padding: "0.4rem",
                borderRadius: 10,
              }}
            >
              you will be charged {planData.price} for this subscription plan
            </p>
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
          <div className="review-order-contents">
            <p>Subscription Plan</p>
            <p>{planData.heading ?? "Myemail.com"}</p>
          </div>
          <div className="review-order-contents">
            <p>Price</p>
            <p>{planData.price ?? "Myemail.com"}</p>
          </div>
          <div
            className="review-order-contents"
            style={{
              lineHeight: window.innerWidth < 760 && 2,
              gap: window.innerWidth < 760 && "1rem",
            }}
          >
            <p>Contents/month</p>
            <br />
            <p>{planData.desc[0] ?? ""}</p>
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
