import React from "react";

const MessageContainer = ({ userSide }) => {
  return (
    <>
      <div className="message_section">
        <div className={`message_container ${userSide}`}>
          Hey this is ur delivery
        </div>
      </div>
    </>
  );
};

export default MessageContainer;
