import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./Pricing.css";
import "../../components/HowitWorks/HowitWorks.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import ReadyComponent from "../../components/ReadyComponent/ReadyComponent";
import Faq from "../../components/Faq/Faq";
import { Link, useNavigate } from "react-router-dom";

const data = [
  {
    heading: "Starter",
    price: "$595",
    desc: [
      "	5,000 words of content",
      "8 Creative graphics for Social Media, Ads, Web, etc.",
      "	Original Research Included",
      "	Royalty Free images",
      "	Unlimited Revisions",
      "	Guaranteed Quality Assurance",
      "	Full Copyright",
      "	30 days Money Back Guarantee",
    ],
  },
  {
    heading: "Growth ",
    price: "$1,295",
    more: " " + "<span><h4> Most Popular<h4></span>",
    desc: [
      "	10,000 words of content",
      "16 Creative graphics for Social Media, Ads, web, etc. ",
      "2 Videos of up to 60 secs each.",
      " 	Original Research Included ",
      "	Royalty Free images",
      "	Unlimited Revisions",
      "	Guaranteed Quality Assurance",
      "	Dedicated Content Director",
      "	Unlimited Brands",
      "	Full Copyright",
      "	30 days Money Back Guarantee",
    ],
  },
  {
    heading: "Scale ",
    price: "$2,495",
    desc: [
      "	20,000 words of content",
      " 32 Creative Graphics for Social Media, Ads, etc",
      "	5 Videos of up to 60 secs each",
      "	Original Research Included",
      "	Royalty free images",
      "	Unlimited Revisions",
      "	Guaranteed Quality Assurance",
      "	Dedicated Team of creators",
      "	Dedicated Content Director",
      "		Unlimited Brands",
      "	Full Copyright",
      "	30 days Money Back Guaranteed",
    ],
  },
];
const Pricingpage = () => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="pricing-container" id="pricing">
        <div className="pricing-wrapper">
          <h2 className="pricing-header">Simple Pricing for your Business</h2>
          <h3>Choose any plan that best suite your business need. </h3>
          <p className="no_contracts">
            No contracts, No commitments, No long story.  Every plan comes with
            a 30 days money back guarantee.
          </p>
          <div className="pricing_card_container">
            {data.map((item) => (
              <div
                className="pricing_card"
                key={item.heading}
                onClick={() => {
                  setSelectedPrice(item.price);
                  console.log(selectedPrice);
                }}
              >
                <div className="item_header">
                  <h3>{item.heading}</h3>
                  <div
                    className="more_pop"
                    dangerouslySetInnerHTML={{ __html: item.more }}
                  />
                </div>
                <h2 className="price">
                  {item.price} <span>/month</span>
                </h2>
                <Link to="/register" state={{ item }}>
                  <Button
                    style={{ lineHeight: 0, marginTop: 0, width: "90%" }}
                    buttonColor="blue"
                    buttonSize="btn--large"
                    // onClick={useNavi}
                  >
                    Get Started
                  </Button>
                </Link>
                <hr style={{ width: "112.5%", marginLeft: "-20px" }}></hr>
                {item.desc.map((des) => (
                  <div
                    className="guarantee_row"
                    key={des}
                    style={
                      {
                        //  lineHeight: 6
                        // display: "flex",
                        // alignItems: "self-start",
                        // alignContent: "center",
                        // background: "red",
                        // marginTop: "1px",
                      }
                    }
                  >
                    <HiOutlineBadgeCheck
                      className="g_icon"
                      size="22"
                      style={{ color: "var(--mypurple)" }}
                    />
                    <p style={{ fontSize: "16.2px" }}>{des}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Faq />

      <ReadyComponent />
      {/* <div className="pricing_bottom_header">
        <h1 className="">
          Power and grow your business with our unbeatable Content Creation
          plans backed by leading content creators.{" "}
        </h1>
      </div> */}
    </>
  );
};

export default Pricingpage;
