import { Icon } from "@iconify/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavComponent from "../Dashboard/NavComponent/NavComponent";

const DemoRequestDetail = ({ setHandleNotData }) => {
  const location = useLocation();
  const handleClick = () => setClick(!click);
  const history = useNavigate();
  return (
    <>
      <NavComponent
        pageTitle={`Demo Request>>${location.state.item.firstname}`}
        handleClick={handleClick}
        setHandleNotData={setHandleNotData}
      />

      <div
        className="request_detail_section"
        style={{
          boxShadow: "var(--box-shadow)",
          padding: "0rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <Icon
            icon="carbon:drill-back"
            onClick={() => history(-1)}
            id="icon_goback"
          />
        </div>
        <div className="request_detail_contents" style={{ padding: "1rem" }}>
          {/* first div column */}
          <div>
            {/* then the sub divs */}
            <div>
              <p>First Name</p>
              <h4>{location.state.item.firstname}</h4>
            </div>
            <div>
              <p>Last Name</p>
              <h4>{location.state.item.lastname}</h4>
            </div>
            <div>
              <p>Last Name</p>
              <h4>{location.state.item.lastname}</h4>
            </div>
            <div>
              <p>Email</p>
              <h4>{location.state.item.email}</h4>
            </div>
            <div>
              <p>Phone</p>
              <h4>{location.state.item.phone}</h4>
            </div>
            <div>
              <p>Content Types</p>
              <h4>
                {location.state.item.content_types === null
                  ? "User did not select a content type"
                  : location.state.item.content_types.toString()}
              </h4>
            </div>
          </div>
          {/* second coulumn */}
          <div>
            <div>
              <p>Industry</p>
              <h4>{location.state.item.industry}</h4>
            </div>
            <div>
              <p>Company Size</p>
              <h4>{location.state.item.companysize}</h4>
            </div>
            <div>
              <p>Description</p>
              <h4>{location.state.item.description}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoRequestDetail;
