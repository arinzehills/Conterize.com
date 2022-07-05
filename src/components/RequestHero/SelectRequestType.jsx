import React, { useState } from "react";
import { useEffect } from "react";
import DropDownField from "../Inputfield/DropDownField";

const SelectRequestType = ({
  requestCategory,
  setRequestType,
  formValues,
  setFormValues,
}) => {
  const role_types =
    requestCategory === "content"
      ? [
          "Articles/blogs posts",
          "Landing Page copy",
          "Website content",
          "Newsletters",
          "Email copy",
          "Press Release",
          "Product descriptions",
          "Social media post",
          " Ebook ",
          "Lead magnet",
          "Technical writing",
        ]
      : requestCategory === "video"
      ? [
          "Explainer video",
          "Promotional video",
          "Animated video",
          " Marketing video",
          "Product demo ",
          "Video editing",
          "Animated 2d explainer",
          "Animated ads",
          "Animated cover photos",
          "Animated logos",
          "Animated graphics",
        ]
      : ["Social Media", "Advertising", "Others"];
  const [selectRole, setSelectRole] = useState(
    requestCategory === "graphics"
      ? "Choose the graphics aspect/niche"
      : "Select here..."
  );
  const [selectGraphicRole, setSelectGraphicRole] = useState("Select here...");
  const graphics_role_types =
    selectRole === "Social Media"
      ? [
          "Facebook/Instagram post",
          "Facebook/instagram banner",
          "Facebook cover",
          "Instagram cover",
          "YouTube banner",
          "YouTube thumbnails",
          "Instagram story",
          "Facebook avatar",
          "LinkedIn banner",
          "Twitter banner",
          "Twitter header",
          "LInkedIn post",
          "Infographics",
        ]
      : selectRole === "Advertising"
      ? [
          "Digital ads",
          "Facebook ads",
          "Instagram ads",
          "Google ads",
          "YouTube ads",
        ]
      : ["Blog graphics", "Website hero images", "Ebook cover", "Lead Magnet"];
  useEffect(() => {
    if (requestCategory === "graphics") {
      //   setFormValues({ ...formValues, selectGraphicRole });
      setRequestType(selectGraphicRole);
    } else {
      //   setFormValues({ formValues, role_types });
      setRequestType(selectRole);
    }
  }, [selectRole, selectGraphicRole]);
  //   useEffect(()=>{

  //   },[graphics_role_types])
  return (
    <>
      <DropDownField
        options={role_types}
        selected={selectRole}
        setSelected={setSelectRole}
        // inputSize="width-353"
      />
      <div style={{ height: "1rem" }}></div>
      {requestCategory === "graphics" &&
        selectRole !== "Choose the graphics aspect/niche" && (
          <DropDownField
            options={graphics_role_types}
            selected={selectGraphicRole}
            setSelected={setSelectGraphicRole}
            // inputSize="width-353"
          />
        )}
    </>
  );
};

export default SelectRequestType;
