import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/Button/Button";
import ProfilePicsComponent from "../../../../components/ProfilePicsComponent/ProfilePicsComponent";
import RequestHero from "../../../../components/RequestHero/RequestHero";
import useFetch from "../../../../useFetch";
import useUser from "../../../../useUser";
import NavComponent from "../../NavComponent/NavComponent";
import IconAndName, { StatusWidget } from "../IconsWidget";
import "./RequestDetail.css";

const RequestDetail = () => {
  const handleClick = () => setClick(!click);
  const location = useLocation();
  const history = useNavigate();

  const { user, setUser } = useUser();
  console.log(location.state.item.id);
  const {
    data: requestdetail,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getUserRequestDetail",
    fetchParamData: {
      user_id: user?.["id"],
      request_id: location.state.item.id,
    },
  });
  const requestData = requestdetail?.["requests"][0];
  console.log(requestData);
  return (
    <>
      <NavComponent
        pageTitle={`Request>>${location.state.item.request_name}`}
        handleClick={handleClick}
      />

      <div className="request_detail_section">
        <div className="request_detail_container">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => history(-1)} buttonColor={"gradient"}>
              Back
            </Button>
          </div>
          <div className="request_detail_contents">
            {/* first div column */}
            <div>
              {/* then the sub divs */}
              <div>
                <p>Request Name</p>
                <h4>{location.state.item.request_name}</h4>
              </div>
              <div>
                <p>Request Type</p>
                <h4>{requestData?.request_type}</h4>
              </div>
              <div>
                <p>Category</p>
                <h4>
                  <IconAndName type={requestData?.category} />
                  {requestData?.category}
                </h4>
              </div>
              <div>
                <p>Quantity</p>
                <h4>{location.state.item.request_name}</h4>
              </div>
              <div>
                <p>Size</p>
                <h4>{location.state.item.request_name}</h4>
              </div>
              <div>
                <p>Submitted By</p>
                <h4>
                  <IconAndName type={"calendar"} />
                  {requestData?.submitted_by}
                </h4>
              </div>

              <div>
                <p>Assign To</p>
                <h4>{requestData?.assign_to}</h4>
              </div>
              <div>
                <p>Status</p>
                <h4>
                  <StatusWidget
                    status={requestData?.status}
                    title={requestData?.status}
                  />
                  {/* {requestData?.submitted_by} */}
                </h4>
              </div>
              {/* end of first colum sub divs */}
            </div>
            {/* second column div */}
            <div>
              {/* then the sub divs */}
              <div>
                <p>Refrence Links</p>
                {requestData?.reference_links.map((item) => (
                  <h4>{item}</h4>
                ))}
              </div>
              <div>
                <p>Request Type</p>
                <h4>{requestData?.writing_topics}</h4>
              </div>
              <div>
                <p>Request Type</p>
                <h4>{requestData?.supporting_materials}</h4>
              </div>
              {/* end of second colum sub divs */}
            </div>
            {/* end of second culumn div */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDetail;
