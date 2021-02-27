import React from "react";
 import styles from "../../containers/game/game.module.css";
//import '../game.css';

const scores = (props) => {
  return (
    <div className={styles.header}>
    
        
      <div className={styles.score}>Score: {props.correctStats}</div>
      <div className={styles.gameStats}>
        <p className={styles.stat_right}> Corrects: {props.correctStats}</p>
        <p className={styles.stat_wrong}> Wrongs: {props.incorrectStats}</p>
        <p className={styles.stat_skip}> Skiped: {props.skipped}</p>
      </div>
    
     </div>
  );
};

export default scores;
