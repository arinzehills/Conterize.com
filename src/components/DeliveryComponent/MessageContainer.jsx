import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

const FilesContainer = ({ children, userSide, url, filename, height }) => {
  const saveFile = (e) => {
    e.stopPropagation();
    saveAs(url, filename);
  };
  return (
    <>
      {/* <div className="message_section"> */}
      <div className={`files_container ${userSide}`} style={{ height: height }}>
        <Icon icon="ant-design:file-filled" color="rgb(4, 63, 241)" />
        {children}
        <div style={{}} id={"try"} onClick={saveFile}>
          <Icon icon="et:download" color="rgb(4, 63, 241)" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
const MessageContainer = ({ userSide, message, materials, urls }) => {
  // var referenceLinksMap = [];
  // var writingTopicsMap = [];
  console.log(urls);
  return (
    <>
      <div className="message_section">
        <div className={`message_container ${userSide}`}>
          {message ?? "Hey this is ur delivery"}
          {materials?.length !== 0 &&
            materials !== null &&
            materials.map((fileMaterial, index) => (
              <a
                href={urls[`${index}`]}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <FilesContainer
                  userSide={userSide}
                  url={urls[`${index}`]}
                  filename={fileMaterial}
                >
                  {fileMaterial}
                </FilesContainer>
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default MessageContainer;
export { FilesContainer };
