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
import { FilesContainer } from "../DeliveryComponent/MessageContainer";
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
  console.log(location.state.item);
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
                      item: requestData,
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
                      item: requestData,
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
                {requestData?.category === "video" ? (
                  <></>
                ) : (
                  <div>
                    <p>Quantity</p>
                    <h4>{requestData?.quantity}</h4>
                  </div>
                )}
                <div>
                  <p>
                    {requestData?.category === "video"
                      ? "Video Length"
                      : requestData?.category === "graphics"
                      ? "Dimension"
                      : "Word Count"}
                  </p>
                  <h4>{requestData?.size}</h4>
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
                  <h4 style={{ textTransform: "capitalize" }}>
                    {requestData?.assign_to === "content dir.."
                      ? "Content Director"
                      : requestData?.assign_to}
                  </h4>
                </div>
                <div>
                  <p>Status</p>
                  <h4
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color:
                        requestData?.status === "active"
                          ? "green"
                          : requestData?.status === "under review"
                          ? "#FF724A"
                          : "grey",
                      background:
                        requestData?.status === "active"
                          ? "#00c32a59"
                          : requestData?.status === "under review"
                          ? "#f25c323e"
                          : "var(--grey)",
                      width: "120px",
                      padding: "1rem",
                      borderRadius: "1.6rem",
                    }}
                  >
                    {requestData?.status}

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
                  {referenceLinksMap?.map((item) => (
                    <a href={`http://${item}`} target="_blank">
                      <h4 key={item}>{item}</h4>
                    </a>
                  ))}
                </div>
                <div>
                  <p>Writing Topics</p>
                  {writingTopicsMap?.length === 0 ? (
                    <h4>No topics added</h4>
                  ) : (
                    writingTopicsMap?.map((item) => (
                      // <a href={`http://${item}`} target="_blank">
                      <h4 style={{ textTransform: "capitalize" }} key={item}>
                        {item + writingTopicsMap.length}
                      </h4>
                      // </a>
                    ))
                  )}
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <p>Supporting Materials</p>
                  {/* <h4>{requestData?.supporting_materials.join(",")}</h4> */}
                  {requestData?.supporting_materials.length === 0 ? (
                    <h4>No supporting materials added</h4>
                  ) : (
                    requestData?.supporting_materials.map((item, index) => (
                      // <Link to={item}>
                      //   <h4 key={item}>{item}</h4>
                      // </Link>
                      <a
                        href={requestData?.uploaded_file_urls[`${index}`]}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <FilesContainer
                          filename={item}
                          url={requestData?.uploaded_file_urls[`${index}`]}
                          height={"5px"}
                        >
                          {item}
                        </FilesContainer>
                      </a>
                    ))
                  )}
                </div>
                <div>
                  <p>Description</p>
                  <h4 style={{ lineHeight: "1.5rem" }}>
                    {requestData?.description}
                  </h4>
                </div>
                <div>
                  <p>Additional Supporting Info</p>
                  <h4 style={{ lineHeight: "1.5rem" }}>
                    {requestData?.description}
                  </h4>
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
