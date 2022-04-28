import React from "react";
import ContentType from "../../components/ContenType/ContentType";

const contentWrt = {
  headline: "Content Writing",
  detail:
    "  On demand content writing at scale for your business every month." +
    "Our highly vetted writers are waiting to deliver you the best" +
    "content to improve your brand visibility, help you build" +
    "authority, drive traffic and new actions on your website. We" +
    "create the following content writing.",
  subcontents: [
    {
      subHeadline: "Content Writing Services",
      desc: [
        "Articles/blogs posts",
        "	Landing Page copy",
        "	Newsletters",
        "	Email copy",
        "	Social Media Post",
        "	Ebook ",
        "	Lead Magnet ",
        "	Press Release",
        "	Website Content",
        "	Product descriptions",
        "	Business plan",
        "	Technical writing",
      ],
    },
  ],
};
const graphicsDsn = {
  headline: "Graphic Design",
  reverse: true,
  detail:
    "On demand graphic design at scale monthly to power your business inbound and paid marketing needs. " +
    "Just tell us what you want or design concept and our graphic experts will take care of it in no time." +
    "We cover a whole lot of graphics designs for businesses which are listed below.",
  subcontents: [
    {
      subHeadline: "Social Media",
      desc: [
        "Facebook/Instagram posts",
        "	Facebook/instagram banners",
        "	Facebook/Instagram Flyers",
        "	Facebook Cover",
        "	Instagram Cover",
        "	YouTube Banner",
        "	YouTube Thumbnails",
        "	Instagram story",
        "	Facebook avatar",
        "	LinkedIn banner",
        "	Twitter banner",
        "	Twitter header",
        "	LInkedIn post",
        "	Infographics",
      ],
    },
    {
      subHeadline: "Advertising",
      desc: [
        "Digital Ads",
        "Facebook ads",
        "Instagram ads",
        "Google ads",
        "YouTube ads",
      ],
    },
    {
      subHeadline: "2D Animation",
      desc: [
        "Animated ads",
        ,
        "	Animated Cover Photos",
        "	Animated logos",
        "	Animated graphics",
      ],
    },
    {
      subHeadline: "Others",
      desc: [
        "Logos",
        "	Blog Graphics",
        "	Website hero images",
        "	Ebook cover",
        "	Lead Magnet",
      ],
    },
  ],
  desc: [
    "Articles/blogs posts",
    "	Landing Page copy",
    "	Newsletters",
    "	Email copy",
    "	Social Media Post",
    "	Ebook ",
    "	Lead Magnet ",
    "	Press Release",
    "	Website Content",
    "	Product descriptions",
    "	Business plan",
    "	Technical writing",
  ],
};
const videoCrt = {
  headline: "Video Creation",
  detail:
    "On demand video creation and editing service for your business organic and paid marketing needs at scale. " +
    " Need promo videos or explainer videos for your marketing like social media ads or to update your  social media profiles?" +
    "This is available only on our Scale and Growth plans but can also request for a custom plan.",
  subcontents: [
    {
      subHeadline: "Video Creation Services",
      desc: [
        "Explainer Video",
        "	Promotional Video",
        "	Animated Video",
        "	Marketing Video",
        "	Product demo ",
        "	Video editing",
        "	Cinematograph",
        "	3d Animated Video",
        "	Animated 2d explainer ",
      ],
    },
  ],

  img: "images/videocrt.jpg",
};
const ContentTypePage = () => {
  return (
    <>
      <ContentType {...contentWrt} />
      <ContentType {...graphicsDsn} />
      <ContentType {...videoCrt} />
    </>
  );
};

export default ContentTypePage;
