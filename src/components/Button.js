import React from "react";
import "../App.css";

const button = (props) => {
  return (
    <button className="Button" onClick={props.click} color="white"> LOAD QUESTIONS </button>
  );
};

export default button;
