import React, { useMemo } from "react";

const DUMBS = [
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/assets/trump.jpg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/assets/trump2.jpg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/assets/trump3.jpeg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/assets/trump4.jpeg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/assets/trump5.jpg",
  "https://raw.githubusercontent.com/johncalvinroberts/wasm-talk/dev/assets/trump6.jpg",
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
          paddingLeft: "4px",
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
