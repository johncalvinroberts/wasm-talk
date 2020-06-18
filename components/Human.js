import React from "react";

const DUMBS = [
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/assets/trump.jpg",
];

const Human = ({ children }) => {
  const imgUrl = DUMBS[Math.floor(Math.random() * DUMBS.length)];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src={imgUrl}
        style={{ width: "337px", "object-fit": "cover", height: "446px" }}
      ></img>
      <div
        style={{
          fontStyle: "italic",
          borderLeft: "solid 2px black",
          fontSize: "20px",
          paddingLeft: "4px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Human;
