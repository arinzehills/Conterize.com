import React from "react";

const MessageContainer = ({ userSide, message }) => {
  return (
    <>
      <div className="message_section">
        <div className={`message_container ${userSide}`}>
          {message ?? "Hey this is ur delivery"}
        </div>
      </div>
    </>
  );
};

export default MessageContainer;
