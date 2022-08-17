import { Icon } from "@iconify/react";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./GetDemo.css";

const GetDemo = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Conterize - Get Demo</title>
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
            padding: "9rem",
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
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "2.5rem",
            color: "black",
            display: "flex",
            flexDirection: "column",
            placeItems: "start",
            textAlign: "left",
            maxWidth: "41rem",
            marginTop: "-5rem",
          }}
          className={"get_demo_division"}
        >
          <h1
            style={{
              color: "var(--dark-purple)",
              lineHeight: 0,
              fontSize: "2.4rem",
              fontWeight: 900,
            }}
          >
            Request a demo
          </h1>
          <div style={{ display: "flex" }}>
            <p>
              Let's discuss your content requirements and how Conterize can help
              <br /> scale your content creation needs{" "}
            </p>
            <img
              src={"/images/requestdemo.png"}
              alt={"request demo conterize"}
              height="200px"
              style={{ marginTop: "-11rem" }}
              className="right__hero-img"
            />
          </div>
          <Link to="/demopage">
            <Button
              buttonStyle="btn--outline"
              buttonColor="gradient"
              // style={{ borderRadius: "50px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontWeight: 700,
                }}
              >
                <Icon icon="carbon:intent-request-inactive" fontSize={"2rem"} />
                Get Demo
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetDemo;
