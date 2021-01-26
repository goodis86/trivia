import React from "react";
 import "./scores.css";
//import '../game.css';

const scores = (props) => {
  return (
    <div className='header'>
    
        
      <div className="score">Score: {props.correctStats}</div>
      <div className="game-stats">
        <p className="stat_right"> Corrects: {props.correctStats}</p>
        <p className="stat_wrong"> Wrongs: {props.incorrectStats}</p>
        <p className="stat_skip"> Skiped: {props.skipped}</p>
      </div>
    
     </div>
  );
};

export default scores;
