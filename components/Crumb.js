import React from "react";

const Crumb = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        position: "fixed",
        top: "10px",
        left: "10px",
        padding: "0 5px",
        fontSize: "18px",
      }}
    >
      {children}
    </div>
  );
};

export default Crumb;
