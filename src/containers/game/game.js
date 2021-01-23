import React from "react";
import "./game.css";
import Scores from "../../components/scores/scores";
import MainQ from "../../components/mainQ/mainQ";
import Answers from "../../components/answers/answers";

const Game = (props) => {
  return (
    <section className="trivia-game">
      <div className="container">
        <div className="header">
          <Scores>

          </Scores>
        </div>

        <MainQ 
            currentQuestion={props.currentQuestion}
        ></MainQ>

        <Answers>

        </Answers>

        <div className="timer">timer in process ...</div>
      </div>
    </section>
  );
};

export default Game;


