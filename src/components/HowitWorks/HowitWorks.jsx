import React from "react";
import { Button } from "../Button/Button";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./HowitWorks.css";
import { Icon } from "@iconify/react";

const HowitWorks = ({
  headline,
  data,
  isPricing,
  height,
  showBtn,
  alignCenter,
  showImg,
}) => {
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-wrapper">
          <h2 className="itworks-header">
            {headline ?? "How it Works?"}
            {/* {window.innerWidth <= 960 ? "" : headline ?? "How it Works?"} */}
          </h2>
          <div className="itworks-card-container">
            {data.map((item) => (
              <div className="pricing_card_wrapper" key={item.key}>
                <div
                  className={
                    alignCenter ? "pricing-card alignCenter" : "pricing-card"
                  }
                  key={item.heading}
                  style={{ height: height }}
                >
                  {/* <MyProgress
                    progress={item.progress}
                    stopColor1={item.stopColor1}
                    stopColor2={item.stopColor2}
                  /> */}
                  {showImg && (
                    <img src={item.img} className="img" alt={item.imgalt} />
                  )}
                  <div className={`pricing_icon ${item.iconColorClass}`}>
                    <Icon icon={item.icon} fontSize="36px" />
                  </div>
                  <div
                    className="card-info"
                    style={{ textAlign: alignCenter && "center" }}
                  >
                    <h3 className="pricing_heading2 ">{item.heading}</h3>
                    {isPricing === true ? (
                      item.desc.map((des, index) => (
                        <div className="guarantee_row" key={index}>
                          <HiOutlineBadgeCheck
                            className="g_icon"
                            style={{ color: "var(--red)" }}
                          />
                          <p style={{ alignContent: "center" }}>{des}</p>
                        </div>
                      ))
                    ) : (
                      <p className="pricing_description">{item.desc}</p>
                    )}
                  </div>
                </div>
                {showBtn && (
                  <Button
                    buttonStyle="btn--outline"
                    children="GET STARTED"
                  ></Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitWorks;
