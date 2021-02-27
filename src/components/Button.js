import React from "react";
import styles from "../App.module.css";

const button = (props) => {
  return (
    <button className={styles.Button} onClick={props.click} color="white"> LOAD QUESTIONS </button>
  );
};

export default button;
