import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./ContentType.css";
import { Button } from "../Button/Button";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ContentType = ({ headline, detail, subcontents, img, reverse }) => {
  return (
    <>
      <Helmet>
        <title>Conterize | Content Types</title>
        <meta
          name="description"
          content="Conterize Simple Pricing for your Business"
        />
      </Helmet>
      <div className="content_section">
        <div
          className="content_container "
          style={{
            flexDirection:
              window.innerWidth > 960 && reverse ? "row-reverse" : "",
          }}
        >
          <div className="content_col">
            <h1>{headline}</h1>
            <p>{detail}</p>
            <Link to={"/pricing"}>
              <Button buttonColor="gradient">Get Started</Button>
            </Link>
            <div className="content_img_wrapper">
              {/* <img
                className="content_img"
                src={img ?? "images/writing.jpg"}
                alt=""
              /> */}
            </div>
          </div>
          <div className="content_row">
            {subcontents.map((item) => (
              <>
                <h2 style={{ color: "grey", fontSize: 18 }}>
                  {item.subHeadline}
                </h2>
                <div className="content_text_wrapper">
                  {item.desc.map((des) => (
                    <div className="guarantee_row" key={des}>
                      <HiOutlineBadgeCheck
                        className="g_icon"
                        size="22"
                        style={{ color: "var(--mypurple)" }}
                      />
                      <p
                        style={{
                          alignContent: "center",
                          fontSize: "16.6px",
                        }}
                      >
                        {des}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentType;
