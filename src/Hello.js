import React from "react";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
  // border: "solid 1px #ddd",
  // background: "#f0f0f0"
};

export default ({ name }) => (
  <div>
    <h1>Hello {name}!</h1>
    <div style={style}>
      <button>&lt;&lt;</button>
      <button>&gt;&gt;</button>
    </div>
  </div>
);
