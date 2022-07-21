import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";

const Privacy = () => {
  const homeData = {
    headline: " PRIVACY POLICY",
    description: "",
    // subdescription:
    //   "Content Writing, Social media graphics and Videos at scale monthly",
    img: "images/privacy.jpg",
    imgalt1: "Conterize POLICY",
    // showButton: true,
    // buttonLabel: "More",
  };
  return (
    <>
      <Helmet>
        <title>Conterize: Privacy Policy</title>
        <meta
          name="description"
          content="This is a page that describes Conterize Platform Privacy Policy"
        />
      </Helmet>

      <Hero {...homeData} />
      <div
        style={{
          padding: "70px 120px",
          textAlign: "left",
          marginTop: "-6rem",
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue"         ',
        }}
        className={"terms_of_service"}
      >
        <h2
          style={{
            fontSize: "35px",
            color: "var(--dark-blue)",
          }}
        >
          {" "}
          CONTERIZE PRIVACY POLICY:
        </h2>
        <h2>PRIVACY NOTICE</h2>
        <p>
          This privacy notice for Conterize Inc("Conterize.com," "we," "us," or
          "our"), describes how and why we might collect, store, use, and/or
          share ("process") your information when you use our services, such as
          when you: Questions or concerns? Reading this privacy notice will help
          you understand your privacy rights and choices. If you do not agree
          with our policies and practices, please do not use our Services. If
          you still have any questions or concerns, please contact us at
          hello@conterize.com
        </p>
        <h2>SUMMARY OF KEY POINTS</h2>
        <p>
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section you are looking for.
        </p>
        <p>
          <b>What personal information do we process?</b> When you visit, use,
          or navigate our Services, we may process personal information
          depending on how you interact with our platform and the Services, the
          choices you make, and the products and features you use.
        </p>
        <p>
          <b>Do we process any sensitive personal information? </b>We do not
          process sensitive personal information.
        </p>
        <p>
          <b>Do you receive any information from third parties?</b> We may
          receive information from public databases, marketing partners, social
          media platforms, and other outside sources.
        </p>
        <p>
          <b>How do you process my information?</b> We process your information
          to provide, improve, and administer our Services, communicate with
          you, for security and fraud prevention, and to comply with law. We may
          also process your information for other purposes with your consent. We
          process your information only when we have a valid legal reason to do
          so.
        </p>
        <p>
          In what situations and with which parties do we share personal
          information? We may share information in specific situations and with
          specific third parties.
        </p>
        <p>
          <b>What are your rights?</b> Depending on where you are located
          geographically, the applicable privacy law may mean you have certain
          rights regarding your personal information.
        </p>
        <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3>Personal information you disclose to us</h3>
        <p>
          <b>In Short:</b> We collect personal information that you provide to
          us.
        </p>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>
        <p>
          <b>Sensitive Information.</b> We do not process sensitive information.
        </p>
        <p>
          ll personal information that you provide to us must be true, complete,
          and accurate, and you must notify us of any changes to such personal
          information.
        </p>
        <h2>Information automatically collected</h2>
        <p>
          In Short: Some information — such as your Internet Protocol (IP)
          address and/or browser and device characteristics — is collected
          automatically when you visit our Services.
        </p>
        <p>
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
        </p>
        <p>
          Like many businesses, we also collect information through cookies and
          similar technologies.
        </p>
        <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p>
          <b>In Short:</b> We process your information to provide, improve, and
          administer our Services, communicate with you, for security and fraud
          prevention, and to comply with law. We may also process your
          information for other purposes with your consent.
        </p>
        <p>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </p>
        <h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p>
          {" "}
          <b>In Short:</b>
           We may share information in specific situations described in this
          section and/or with the following third parties.
        </p>
        <p>
          We may need to share your personal information in the following
          situations:
        </p>
        <p></p>
        <p>
          <b>Business Transfers.</b>
           We may share or transfer your information in connection with, or
          during negotiations of, any merger, sale of company assets, financing,
          or acquisition of all or a portion of our business to another company.
        </p>
        <br></br>
        <p>
          <b>Business Partners.</b>
           We may share your information with our business partners to offer you
          certain products, services, or promotions.
        </p>
        <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p>
          <b>In Short: </b>We may use cookies and other tracking technologies to
          collect and store your information.
        </p>
        <p>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice
        </p>
        <h2>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p>
          <b>In Short: </b>If you choose to register or log in to our services
          using a social media account, we may have access to certain
          information about you.
        </p>
        <p>
          Our Services offer you the ability to register and log in using your
          third-party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          friends list, and profile picture, as well as other information you
          choose to make public on such a social media platform.
        </p>
        <p>
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </p>
        <h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>
          <b>In Short: </b> We keep your information for as long as necessary to
          fulfill the purposes outlined in this privacy notice unless otherwise
          required by law.
        </p>
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than hen
          we have no ongoing legitimate business need to process your personal
          information, we will either delete or anonymize such information, or,
          if this is not possible (for example, because your personal
          information has been stored in backup archives), then we will securely
          store your personal information and isolate it from any further
          processing until deletion is possible.
        </p>
        <h2>7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p>
          <b>In Short: </b> We keep your information for as long as necessary to
          fulfill the purposes outlined in this privacy notice unless otherwise
          required by law.
        </p>
        <p>
          We do not knowingly solicit data from or market to children under 18
          years of age. By using the Services, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent’s use of the Services. If we learn
          that personal information from users less than 18 years of age has
          been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we may have collected from children under age 18,
          please contact us at <i>hello@conterize.com</i>
        </p>
        <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>
          <b>In Short: </b>You may review, change, or terminate your account at
          any time.
        </p>
        <p>
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your local data protection supervisory authority. You can
          find their contact details here:
          <a
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
          >
             https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          </a>
        </p>
        <p>
          If you are located in Switzerland, the contact details for the data
          protection authorities are available here:
          <a
            href="https://www.edoeb.admin.ch/edoeb/en/home.html."
            target="_blank"
          >
            https://www.edoeb.admin.ch/edoeb/en/home.html.
          </a>
          .
        </p>
        <p>
          <b>Withdrawing your consent: </b>If we are relying on your consent to
          process your personal information, which may be express and/or implied
          consent depending on the applicable law, you have the right to
          withdraw your consent at any time. You can withdraw your consent at
          any time by contacting us by using the contact details provided in the
          section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.{" "}
        </p>
        <p>
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal, nor when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </p>
        <h3>Account Information</h3>
        <p>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can: Upon your request to
          terminate your account, we will deactivate or delete your account and
          information from our active databases. However, we may retain some
          information in our files to prevent fraud, troubleshoot problems,
          assist with any investigations, enforce our legal terms and/or comply
          with applicable legal requirements.
        </p>
        <h2>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. At this stage no
          uniform technology standard for recognizing and implementing DNT
          signals has been finalized. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this privacy
          notice.
        </p>
        <h2>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p>
          <b>In Short: </b>Yes, if you are a resident of California, you are
          granted specific rights regarding access to your personal information.{" "}
        </p>
        <p>
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below.
        </p>
        <p>
          If you are under 18 years of age, reside in California, and have a
          registered account with Services, you have the right to request
          removal of unwanted data that you publicly post on the Services. To
          request removal of such data, please contact us using the contact
          information provided below and include the email address associated
          with your account and a statement that you reside in California. We
          will make sure the data is not publicly displayed on the Services, but
          please be aware that the data may not be completely or comprehensively
          removed from all our systems (e.g., backups, etc.).
        </p>
        <p>11. DO WE MAKE UPDATES TO THIS NOTICE?</p>
        <p>
          <b>In Short: </b>Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
        </p>
        <p>
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
        </p>
        <h2>
          12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </h2>
        <p>
          {" "}
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it in some circumstances. To
          request to review, update, or delete your personal information,
          please submit a request form by clicking 
          <Link to="/dashboard/newrequest">here</Link>.
        </p>
      </div>
    </>
  );
};

export default Privacy;
