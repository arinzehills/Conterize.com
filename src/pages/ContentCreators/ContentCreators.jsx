import React from "react";
import { Button } from "../../components/Button/Button";
import GuaranteeHero from "../../components/GuaranteeHero/GuaranteeHero";
import Hero from "../../components/Hero/Hero";
import "./ContentCreators.css";
const ContentCreators = () => {
  const dataArr2 = {
    headline: "More Reasons to Work with Us",
    description: [
      "100% Remote Work",
      "Flexible payout medium ",
      "Stable payout schedule ",
      "Development & growth potential ",
      "Performance-based incentives ",
      "Amazing working culture",
      "Promotional opportunity",
      "Contests and awards",
      "And lots more",
    ],
    isList: true,
    img: "images/oneman.png",
    showButton: true,
    buttonLabel: "Apply Now",
    withBg: true,
  };
  const desArr = [
    "You apply and undergo our test where we test your capabilities in your chosen category.",
    "If you scale through our rigorous test process, we will start matching you with client" +
      " requests. Only the top 5% of content creators get accepted.",
    " You chose your working hours and work from anywhere you want as a freelancer on Conterize. ",
    " As we are a monthly subscription service, you are likely to be creating content for the same set of " +
      "clients we match you with. This will save you time and resources on always starting from scratch to" +
      "learn about a new business every single time.",
  ];
  return (
    <>
      <div
        className="pricing_bottom_header"
        style={{
          //   backGround: "-webkit-linear-gradient(var(--mypurple), red)",
          justifyContent: "center",
        }}
      >
        <h1 className="" style={{ textAlign: "center" }}>
          Want to work with Conterize and make <br></br>your work stand out?
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "black", fontWeight: "500" }}>
          Join a fast growing team of content creators across several sectors.
          We work with content writers, graphic designers and video editors who
          <br></br>
          match our high quality standard at the same time willing to work in a
          rewarding environment.{" "}
        </h3>
        <Button buttonColor="gradient">Join Now </Button>
      </div>
      <GuaranteeHero
        descArr={desArr}
        headline="How does it work for Content creators?"
      />
      <Hero {...dataArr2} marginfrBg="-11rem" bgheight="550px" />
      <div style={{ height: "52px", color: "white", marginTop: "2rem" }}>
        dsadsaa
      </div>
    </>
  );
};

export default ContentCreators;
