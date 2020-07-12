import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 100,
        clear: "both",
        paddingTop: 40,
        textAlign: "center",
      }}
      className="jumbotron my-4"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
