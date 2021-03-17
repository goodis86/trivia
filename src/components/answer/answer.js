import React from "react";
import "./answer.css";

const answer = (props) => {
  return (
    <div className = 'answers'>
      <button 
      className="answer" 
      onClick={props.clicked}>{props.versi}</button>

    </div>
  );
};

export default answer;
