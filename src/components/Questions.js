import React from "react";
import "../App.css";
//import Button from "./Button";

const Questions = (props) => {
    
  

    return (
      <div className="quest1">
             <button onClick={props.changeText}>change question</button>
      </div>
    );
  }

console.log('question rendered!');

export default Questions;
