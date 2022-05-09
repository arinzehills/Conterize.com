import React, { useState } from "react";
import "./Faq.css";
import { GrFormAdd } from "react-icons/gr";
import { BsRecordCircle } from "react-icons/bs";
const data = [
  {
    id: 0,
    heading: "About Conterize? ",
    desc: [
      "Conterize is an on-demand content creation platform for business owners, startups, and agencies. We are dedicated to creating highly optimized content to take your content marketing and business growth to the next level.",
      "Our community of over 500 US and UK based content writers specialized in all kinds of SEO optimized content writing that ranks well on search engines." +
        "We are also powered by a network of over 500 Graphic designers and Video creators who are based in selected countries across the world. ",
    ],
  },
  {
    id: 1,
    heading: "What type of content can I request per month? ",
    desc: [
      "Each plan comes with a variety of content options." +
        "For instance, the Growth plan comes with 10,000 words of content" +
        "16 Graphics and 2 videos per month, with this plan, you can request " +
        "Twenty 500 worded articles or ten 1,000 worded articles or five 2,000" +
        "worded articles, etc. It could be newsletters, landing page " +
        "copy, ebooks, product descriptions, social media posts, etc see list",
      "For graphics, it could be Instagram/facebook flyers, cover photos, banner images,  " +
        "quote graphics, infographics, or just any other form of graphics. See list.  ",

      "For videos, it could be product demo videos, explainer videos, 2d Videos, promotional videos, onboarding videos, etc.",
    ],
  },
  {
    id: 2,
    heading: "How is Conterize different from the competition?  ",
    withInnerArray: true,
    desc: [
      "Conterize model differs from the competition in terms of reliability, quality and support." +
        "Our model matches you with a content director who collaborates " +
        "with you on your project and will be always there to assist you, " +
        "make sure your expectations are met and can also communicate your" +
        "needs to your team of content creators. ",
      "In addition, we help you skip the following:",
      [
        "•	Days of reviewing profiles",
        "•	Weeks of interviews",
        "•	Weeks of proposals ",
        "•	Payment for services with no guarantee.",
      ],
    ],
  },
  {
    id: 3,
    heading: "What if I am an agency? ",
    desc: [
      "We create tons of content for content marketing agencies, SEO agencies, graphics agencies, advertising agencies, sales agencies, content creation agencies, PR agencies, and E-commerce agencies. ",
      "Contact us to discuss your agency content needs. ",
    ],
  },
  {
    id: 4,
    heading: "What if I don’t like my content?",
    desc: [
      "We offer unlimited revisions for all content created as part of your monthly subscription plan. We also offer a 100% money-back guarantee.  ",
    ],
  },
  {
    id: 5,
    heading: "Why is your price so affordable?",
    desc: [
      "Conterize has a community of top, highly vetted content creators who create content across several industries and are in the top 2% of their category. Because we offer our content creators consistent work, they offer to work for our clients for a more affordable rate lower than the average industry freelancing rate. ",
      "Also, we use technology to automate much of our processes, giving us the edge to offer you the cost savings. ",
    ],
  },
  {
    id: 6,
    heading: "What if I am too busy to handle the platform myself?",
    desc: [
      "If you are too busy to manage the platform by yourself, we can assign you an account manager who would be responsible for handling content requests and revisions on your behalf. ",
    ],
  },
  {
    id: 7,
    heading: "Can I cancel anytime?",
    desc: [
      "Yes, you can cancel the monthly" +
        "subscription at any time and resume it any " +
        "time of your choice. No contracts and no long stories. ",
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
