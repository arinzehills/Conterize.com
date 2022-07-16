import React from "react";
import "./Hero.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { Button } from "../Button/Button";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
function Hero({
  headline,
  description,
  descriptionFont,
  subdescription,
  subdescriptionFont,
  img,
  imgalt1,
  withBg,
  bgColor,
  marginfrBg,
  isList,
  imgStart,

  showButton,
  buttonLabel,
  buttonLink,
  bgheight,
  btnWidth,
  buttonColor,
}) {
  return (
    <>
      {withBg && window.innerWidth >= 960 && (
        <section
          className="blue_bg"
          style={{ height: bgheight, background: bgColor }}
        ></section>
      )}
      <div
        className="hero__section"
        style={{
          background:
            withBg && window.innerWidth <= 960 && (bgColor ?? "#141874"),
        }}
      >
        <div
          className="row home__hero_row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
            // padding: imgStart === "start" ? "0" : "",
          }}
        >
          <div
            className="col"
            style={{ marginTop: window.innerWidth >= 960 && marginfrBg }}
          >
            <div className="hero__text_wrapper">
              <h1
                className="heading"
                style={{
                  color: withBg ? "white" : "#1d293f",
                  fontSize: withBg && "32px",
                }}
              >
                {headline}
              </h1>
              {isList == null && (
                <p
                  className={`description ${descriptionFont}`}
                  style={{ color: withBg ? "white" : "#1d293f" }}
                >
                  {description}
                </p>
              )}
              {isList == null && (
                <p
                  className={`description subdescription ${subdescriptionFont}`}
                  style={{ color: withBg ? "white" : "#1d293f" }}
                >
                  {subdescription}
                </p>
              )}
              {isList && (
                <div className="guarantee_column">
                  {description.map((item) => (
                    <div className="guarantee_row" key={item}>
                      {withBg ? (
                        <BsCheckCircleFill
                          className="g_icon"
                          style={{ color: "#FFCB37" }}
                        />
                      ) : (
                        <AiTwotoneCheckCircle
                          size="8"
                          style={{ color: "#191C73" }}
                        />
                      )}
                      <p key={item} style={{ color: withBg && "white" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {showButton && (
                <Link to={buttonLink ?? "/pricing"}>
                  <Button
                    buttonColor={buttonColor ?? "gradient"}
                    style={{ width: btnWidth }}
                  >
                    {buttonLabel}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div
            className="col"
            style={{ marginTop: window.innerWidth >= 960 && marginfrBg }}
          >
            <div
              className={
                withBg && window.innerWidth >= 960
                  ? "hero__image withbg"
                  : "hero__image"
              }
            >
              {/* <img src='../../images/studio.png' alt='hero image' className='home__hero-img' /> */}

              <img src={img} alt={imgalt1} className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
