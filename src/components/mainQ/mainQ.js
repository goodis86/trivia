import React from "react";
 import "./mainQ.css";

const mainQ = (props) => {
  return (
    
    <div className="main">
    <div className="game-question">
      {props.currentQuestion}
      </div>
  </div>
  );
};

export default mainQ;
