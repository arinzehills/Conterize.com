import React, { useState } from "react";
import "./Faq.css";
import { GrFormAdd } from "react-icons/gr";
import { BsRecordCircle } from "react-icons/bs";
const data = [
  {
    id: 1,
    heading: "How does it work?",
    desc: [
      "After signing up, you will see different monthly plans to choose from on your dashboard. ",
      "Pick a plan and submit a content request from your dashboard. Specify requirements, word counts and content type, etc. " +
        "Our algorithm finds the best content creators for your requirements and the content is delivered to you on your dashboard where you can accept or request a revision.  ",
      "You can also Invite any member of your team to make a content request or handle content requests for you.      ",
    ],
  },
  {
    id: 2,
    heading: "How many pieces of content can I request per month? ",
    desc: [
      "Each plan comes with a variety of content options.",
      "For instance, the Starter plan comes with 4,000 worded content and five social media graphics per month. On the 4,000 worded content, you can request 8 500 worded articles or 4 1,000 worded articles or 2 2,000 worded articles, or any other split word count you like. Also, this could be articles, newsletters, product descriptions, ebooks, etc.",
      "For the Social media graphics, it could be flyers, cover photos, banner images, quote graphics, infographics, or just any other form of social media graphic. You can also split the graphic types. For instance, you can request three flyers and two cover photo designs. ",
    ],
  },
  {
    id: 3,
    heading: "What if I don’t like my content?",
    desc: [
      "We offer unlimited revisions for all content created as part of your monthly subscription plan. We also offer a 100% money-back guarantee. ",
    ],
  },
  {
    id: 4,
    heading: "Can I cancel anytime?",
    desc: [
      "Yes, you can cancel the monthly" +
        "subscription at any time and resume it any " +
        "time of your choice. No contracts. ",
    ],
  },
];

const Faq = () => {
  const [click, setClick] = useState({});
  const handleClick = (index) => () => {
    setClick((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };
  return (
    <>
      <div className="faq__section">
        <div className="faq_wrapper">
          <h3>F.A.Q </h3>
          {data.map((item, index) => (
            <div
              className={
                click[index] ? "faq_container active" : "faq_container  "
              }
              onClick={handleClick(index)}
              key={item.id}
            >
              <div className="faq_inner">
                {/* row for the plus sign and */}
                <GrFormAdd
                  className={click[index] ? "faq_icon active" : "faq_icon "}
                  size="20"
                  style={{ paddingRight: "10px" }}
                />
                <h4>{item.heading}</h4>
              </div>
              {click[index] &&
                item.desc.map((des) => (
                  <div className="accordian_content" key={des}>
                    <BsRecordCircle size="12px" />
                    <p style={{ alignContent: "center" }}>{des}</p>
                  </div>
                ))}
              <hr style={{ height: "1px" }}></hr>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
