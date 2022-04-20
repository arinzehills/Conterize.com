import React from "react";
import "./Breadth.css";
function BreadthComponent() {
  return (
    <>
      <div className="breadth__section">
        <div className="breadth_container">
          <div className="breadth_text_wrapper">
            <h3>
              We breath <br></br>everything content{" "}
            </h3>
            <p>Spend your time doing what you love, we will do the content.</p>
            <div className="breadth_inner_text">
              <div>
                <h3>600+</h3>
                <p>Content Creators</p>
              </div>
              <div>
                <h3>100,000+</h3>
                <p>content created</p>
              </div>
              <div>
                <h3>1,000+</h3>
                <p>Clients served</p>
              </div>
            </div>
          </div>
          <img src="images/people.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default BreadthComponent;
