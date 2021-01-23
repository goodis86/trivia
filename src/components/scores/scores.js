import React from "react";
 import "./scores.css";
//import '../game.css';

const scores = (props) => {
  return (
    <div className='header'>
    
        
      <div className="score">Score: -4</div>
      <div className="game-stats">
        <p className="stat_right"> Corrects: 0</p>
        <p className="stat_wrong"> Wrongs: 0</p>
        <p className="stat_skip"> Skiped: 0</p>
      </div>
    
     </div>
  );
};

export default scores;
