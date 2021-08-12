import React from "react";

const Message = ({ error }) => {
  return <span style={{ color: "#ff6161", marginLeft: 16 }}>{error}</span>;
};

export default Message;
