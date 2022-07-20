import React from "react";
import BreadthComponent from "../../components/BreadthComponent/BreadthComponent";
import Faq from "../../components/Faq/Faq";
import Hero from "../../components/Hero/Hero";
import Partners from "../../components/PatnersComponent/Partners";
import HowitWorks from "../../components/HowitWorks/HowitWorks";
import ReadyComponent from "../../components/ReadyComponent/ReadyComponent";
import { Helmet } from "react-helmet";

const homeData = {
  headline: "Power Your Business Growth with On-Demand Content",
  description:
    "Automate your content creation and crush your inbound and " +
    "paid marketing with a dedicated content creation team that works 24/7 " +
    "to support your business.",
  // subdescription:
  //   "Content Writing, Social media graphics and Videos at scale monthly",
  img: "images/twowomen.png",
  imgalt1: "Power Your Business Growth on conterize",
  showButton: true,
  buttonLabel: "Get Started",
};
const homeData2 = {
  headline: "Your Startup Content Partner",
  description:
    "Content writing, Graphics and Videos to scale your content marketing ",
  descriptionFont: "f16px",
  subdescription:
    "Get the right content your business need to attract, convert and scale.",
  subdescriptionFont: "f18px",
  img: "images/twomen.png",
  imgalt1: "Your Startup Content Partner",
  // showButton: true,
  withBg: true,
  buttonLabel: "Get Started",
};
const homeData3 = {
  headline:
    "Listen, we know consistent content creation and content marketing sucks.",
  description:
    "We will handle all your content needs and so you got to spend your" +
    " time where it is most useful. Its high time you focus on sales and growth.",
  img: "images/post.png",
  imgalt1: "consistent content creation and content marketing",
  withBg: true,
  showButton: true,
  buttonLabel: "Pick a Plan",
  imgStart: "start",
};
const dataArr = {
  headline: "Conterize Guaranteed Quality Assurance",
  description: [
    "100 percent unique Content",
    "Only top 2% content Creators",
    "Unlimited revisions ",
    "Customizable plans option",
    "Change monthly subscription ",
    "Cancel at anytime",
    "100% money back guarantee",
  ],
  isList: true,
  imgStart: "start",
  img: "images/single-post.png",
  imgalt1: "Conterize Guaranteed Quality Assurance",
  showButton: true,
  buttonLabel: "Pick a plan",
};
const dataArr2 = {
  headline: "We help you skip:",
  description: [
    "Days of reviewing profiles",
    "Weeks of interviews  ",
    "Weeks of dealing with proposals ",
    "Paying for service without guarantees ",
    "Spending precious hours on revisions",
  ],
  isList: true,
  img: "images/oneman.png",
  imgalt1: "We help you skip:",

  showButton: true,
  buttonLabel: "Get Started",
  withBg: true,
};
const whyConterize = [
  {
    heading: "Vetted Content Creators",
    desc: "All our content creators are fully vetted, tested and trusted from content writers, graphic designers to video creators. ",
    img: "/images/web-content1.png",
    imgalt: "vetted content creators",
    icon: "arcticons:androits-gps-test",
    iconColorClass: "blue",
  },
  {
    heading: "Dedicated Content Director ",
    desc:
      "You are assigned a creative director to act as the supervisor" +
      " of the content creation team and the quality of the delivery so" +
      " you don’t have to. ",
    img: "/images/calculations1.png",
    imgalt: "dedicated conterize director",
    icon: "fluent:window-inprivate-account-20-filled",
    iconColorClass: "red",
  },
  // {
  //   heading: "Less Headaches",
  //   desc:
  //     "You are assigned a creative director to act as the supervisor" +
  //     " of the content creation team and the quality of the delivery so" +
  //     "you don’t have to.",
  //   img: "/images/headache1.png",
  //   icon: "icon-park-solid:thinking-problem",
  //   iconColorClass: "purple",
  // },
  {
    heading: "High Quality & Reliable Work",
    desc:
      "Thanks to our team of vetted and highly qualified content " +
      " creators, creative directors and our quality assurance, you can" +
      "  only expect the top notch and reliable deliveries. ",
    img: "/images/high-quality1.png",
    imgalt: "quality content creation",
    icon: "cib:when-i-work",
    iconColorClass: "darkpurple",
  },
];
const howitWorks = [
  {
    heading: "Select a plan",
    desc:
      "Choose a plan and request Content from your dashboard by submitting the requirements." +
      " You can also invite your team members to manage content request.    ",
    img: "/images/lightbulb 1.png",
    imgalt: "Select Conterize Plan",
    icon: "fluent:select-all-on-20-filled",
    iconColorClass: "blue",
  },
  {
    heading: "Matches Your Request",
    desc:
      "Our system matches your request with " +
      "the best content creators suitable for your specific content needs. ",
    img: "/images/content-marketing 1.png",
    imgalt: "Select Plan that matches your request",
    iconColorClass: "red",
    icon: "simple-icons:yourtraveldottv",
    // icon: "logos:chromatic-icon",
  },
  {
    heading: "Recieve Content",
    desc:
      "Sit back and relax while you receive " +
      "your content on your dashboard in few days." +
      " You can then accept or request for revision.      ",
    img: "/images/dashboard 1.png",
    imgalt: "Relax and recieve content from conterize",

    // icon: "logos:adonisjs-icon",
    icon: "cib:open-collective",
    iconColorClass: "purple",
  },
];
function Homepage() {
  return (
    <>
      <Helmet>
        <title>Conterize Content Creation & Content Marketing Platform</title>
        <meta
          name="description"
          content="Conterize helps you scale your business through effortless content creation automation from content writing, and graphics to videos."
        />
      </Helmet>
      <Hero {...homeData} />
      <Partners />
      <Hero {...homeData2} />
      <HowitWorks
        headline="Why should you use Conterize?"
        data={whyConterize}
        height="320px"
      />
      <BreadthComponent />
      <Hero
        {...homeData3}
        bgheight="550px"
        bgColor="#31A7FE"
        marginfrBg="-10rem"
      />
      <HowitWorks
        headline="How it works"
        data={howitWorks}
        height="280px"
        alignCenter={true}
      />
      <Hero {...dataArr} />
      <Hero {...dataArr2} marginfrBg="-1rem" />
      <ReadyComponent getStartedLink="/pricing" />
    </>
  );
}

export default Homepage;
