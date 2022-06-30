import { Icon } from "@iconify/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavComponent from "../../pages/Dashboard/NavComponent/NavComponent";
import IconAndName, {
  StatusWidget,
} from "../../pages/Dashboard/Request/IconsWidget";
import useFetch from "../../useFetch";
import useUser from "../../useUser";
import { Button } from "../Button/Button";
import Modal2 from "../Modal/Modal2";
import "./RequestDetail.css";

const RequestDetail = ({ setHandleNotData, user_id, isAdmin }) => {
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
      user_id: location.state.item.user_id,
      request_id: location.state.item.id,
    },
  });

  const requestData = requestdetail?.["requests"][0];
  console.log(requestData);
  var referenceLinksMap = [];
  var writingTopicsMap = [];

  requestData?.reference_links.forEach((item) => {
    // referenceLinksMap.push(JSON.parse(item));
    const itemJson = JSON.parse(item);
    referenceLinksMap.push(itemJson.links);
    console.log(itemJson.links);
  });
  requestData?.writing_topics.forEach((item) => {
    // referenceLinksMap.push(JSON.parse(item));
    const itemJson = JSON.parse(item);
    writingTopicsMap.push(itemJson.topics);
    // console.log(itemJson.topics);
  });
  // var referenceLinks = [];
  // for (var key in referenceLinksMap) {
  //   if (referenceLinksMap.hasOwnProperty(key)) {
  //     // referenceLinks.push(referenceLinksMap[key]);
  //     console.log(referenceLinksMap);
  //   }
  // }
  return (
    <>
      <NavComponent
        pageTitle={`Request>>${location.state.item.request_name}`}
        handleClick={handleClick}
        setHandleNotData={setHandleNotData}
      />

      <div className="request_detail_section">
        <div className="request_detail_container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Icon
              icon="carbon:drill-back"
              onClick={() => history(-1)}
              id="icon_goback"
            />
            {isAdmin ? (
              <Button
                onClick={() =>
                  history("/admin/deliver", {
                    state: {
                      item: location.state.item,
                    },
                  })
                }
                buttonColor={"gradient"}
                style={{ marginTop: 0 }}
              >
                Deliver
              </Button>
            ) : (
              <Button
                onClick={() =>
                  history("/dashboard/delivery", {
                    state: {
                      item: location.state.item,
                    },
                  })
                }
                style={{ marginTop: 0 }}
                buttonColor={"gradient"}
              >
                Check Delivery
              </Button>
            )}
          </div>
          {loading ? (
            <Modal2 />
          ) : (
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
                  {/* {requestData?.reference_links.map((item) => ( */}
                  {referenceLinksMap.map((item) => (
                    <a href={`http://${item}`} target="_blank">
                      <h4 key={item}>{item}</h4>
                    </a>
                  ))}
                </div>
                <div>
                  <p>Writing Topics</p>
                  {writingTopicsMap.map((item) => (
                    // <a href={`http://${item}`} target="_blank">
                    <h4 style={{ textTransform: "capitalize" }} key={item}>
                      {item}
                    </h4>
                    // </a>
                  ))}
                </div>
                <div>
                  <p>Supporting Materials</p>
                  {/* <h4>{requestData?.supporting_materials.join(",")}</h4> */}
                  {requestData?.supporting_materials.map((item) => (
                    <Link to={item}>
                      <h4 key={item}>{item}</h4>
                    </Link>
                  ))}
                </div>
                <div>
                  <p>Description</p>
                  <h4>{requestData?.description}</h4>
                </div>
                <div>
                  <p>Additional Supporting Info</p>
                  <h4>{requestData?.description}</h4>
                </div>
                {/* end of second colum sub divs */}
              </div>
              {/* end of second culumn div */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RequestDetail;
