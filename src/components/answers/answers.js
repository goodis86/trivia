import React from "react";
 import "./answers.css";

 import Answer from './answer/answer'

const answers = (props) => {
  return (
    <div className='answers'>
   <Answer></Answer>
   <Answer></Answer>
   <Answer></Answer>
   <Answer></Answer>
   </div>
  );
};

export default answers;
