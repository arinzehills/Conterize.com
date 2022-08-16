import React from "react";
import { Helmet } from "react-helmet";
import "./GetDemo.css";

const GetDemo = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Conterize -Get Demo</title>
        <meta
          name="description"
          content="Get a demo on any content creation type u will do"
        />
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
        className={"demo_container"}
      >
        {/* <img
          src="/images/getdemo.jpg"
          alt="Get Demo at conterize"
          height={"599px"}
          width={"90%"}
          style={{ position: "relative" }}
        /> */}
        <div
          style={{
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12rem",
          }}
        >
          <h1
            style={{
              //   color: "var(--light-purple)",
              fontSize: "3rem",
              lineHeight: 0,
            }}
          >
            Explore Conterize
          </h1>
          <h1>Request a demo</h1>
        </div>
        <div style={{ background: "white", borderRadius: "15px" }}></div>
      </div>
    </>
  );
};

export default GetDemo;
