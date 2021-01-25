import React from "react";
 import "./answer.css";

const answer = (props) => {
  return (
    
    <button className="answer" onClick={props.clicked}>{props.versi}</button>
  );
};

export default answer;
