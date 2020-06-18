import React, { useMemo } from "react";

const DUMBS = [
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/static/trump.jpg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/static/trump2.jpg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/static/trump3.jpeg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/static/trump4.jpeg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/static/trump6.jpg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/static/trump5.jpg",
];

const Human = ({ children }) => {
  const imgUrl = useMemo(
    () => DUMBS[Math.floor(Math.random() * DUMBS.length)],
    []
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        src={imgUrl}
        style={{ width: "337px", objectFit: "cover", height: "446px" }}
      ></img>
      <div
        style={{
          fontStyle: "italic",
          borderLeft: "solid 2px black",
          fontSize: "24px",
          paddingLeft: "10px",
          marginLeft: "40px",
          maxWidth: "800px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Human;
