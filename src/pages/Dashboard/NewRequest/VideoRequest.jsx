import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import TextArea from "../../../components/Inputfield/TextArea";
import InputWithIcon from "../../../components/InputWithIcon/InputWithIcon";
import RequestHero from "../../../components/RequestHero/RequestHero";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import SaveButton from "../components/SaveButton/SaveButton";
import NavComponent from "../NavComponent/NavComponent";

const VideoRequest = () => {
  return (
    <>
      <RequestHero requestTitle={"Video Creation"} requestType="video" />
    </>
  );
};

export default VideoRequest;
