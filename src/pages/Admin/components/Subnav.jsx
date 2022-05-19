import { Icon } from "@iconify/react";
import React from "react";

const Subnav = ({ title, icon }) => {
  const subNavData = [
    {
      title: "Share",
      icon: "ci:share-outline",
    },
    {
      title: "Sort",
      icon: "emojione:clockwise-vertical-arrows",
    },
    {
      title: "Filter",
      icon: "bx:filter-alt",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 15,
          marginBottom: 20,
          flexDirection: window.innerWidth < 500 && "column",
        }}
      >
        <div
          className="sub_nav_component"
          style={{
            color: "var(--light-purple)",
            width: 159,
            fontSize: window.innerWidth < 500 && "14px",
          }}
        >
          {title ?? " Orders"}
          <Icon
            icon={icon ?? "bx:cart"}
            fontSize={window.innerWidth < 500 ? "16px" : "28px"}
          />
        </div>
        {/* the second phase */}
        <div style={{ display: "flex" }}>
          {subNavData.map((item) => (
            <div
              key={item.title}
              className="sub_nav_component"
              style={{
                marginLeft: "1rem",
                height: 15,
                width: 75,
                marginTop: window.innerWidth < 500 && 20,
                boxShadow: "0 5px 10px 1px  rgb(182, 184, 185)",
              }}
            >
              {item.title}
              <Icon icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subnav;
