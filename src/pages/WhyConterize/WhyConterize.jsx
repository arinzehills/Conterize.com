import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../../components/Hero/Hero";
import ReadyComponent from "../../components/ReadyComponent/ReadyComponent";
import "./WhyConterize.css";
const WhyConterize = () => {
  const homeData = {
    headline:
      "Multiple Content Creation Services" + " with only 1 subscription.",
    description:
      "We are a power house for on-demand content creation for businesses, startups and agencies.  " +
      "From content writing, graphics to video creation, your business need no other content creation " +
      "service. Power, automate and scale your entire content marketing with one flat monthly subscription.",
    img: "images/multiplecontentcreation.jpg",
    withBg: true,
    showButton: true,
    buttonLabel: "See all list of our services",
    imgStart: "start",
  };
  const homeData2 = {
    headline: "Quality Service",
    description:
      "With our Guaranteed Quality Assurance, we make sure you get the best of content " +
      "creation for your business. We accept only the top 5% of content creators who meets our " +
      "very high standard",
    // subdescription:
    //   "Content Writing, Social media graphics and Videos at scale monthly",
    img: "images/standard-quality.jpg",
    // showButton: true,
    withBg: true,
    bgheight: "440px",
    buttonLabel: "Get Started",
  };
  const homeData3 = {
    headline: "Designated Content Director",
    description:
      "Conterize uses the concept of assigning you a content director who can take all the hassle " +
      "of dealing with content creators and can help you come up with content marketing and " +
      "content creation ideas for your business  from writing, graphics to video creation.",
    img: "images/contentdirector2.jpg",
    withBg: true,
    // showButton: true,
    buttonLabel: "Pick a Plan",
    imgStart: "start",
  };
  return (
    <>
      <Helmet>
        <title>Conterize -Why Conterize?</title>
        <meta name="description" content="Conterize Registration Page" />
      </Helmet>
      <div
        className="pricing_bottom_header"
        style={{
          //   backGround: "-webkit-linear-gradient(var(--mypurple), red)",
          justifyContent: "center",
        }}
      >
        <h1
          className=""
          style={{
            textAlign: "center",
            lineHeight: window.innerWidth < 960 && "29px",
          }}
        >
          Why do businesses choose Conterize?
        </h1>
      </div>
      <Hero
        {...homeData}
        bgheight="450px"
        bgColor="#31A7FE"
        marginfrBg="-3rem"
        btnWidth="250px"
        buttonLink="/contenttypes"
      />
      <Hero {...homeData2} marginfrBg="5rem" />
      <Hero
        {...homeData3}
        bgheight="390px"
        bgColor="#31A7FE"
        marginfrBg="4.9rem"
      />
      <ReadyComponent getStartedLink={"pricing"} />
    </>
  );
};

export default WhyConterize;
