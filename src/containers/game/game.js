import React from 'react';
import './game.css';

const Game = () => {
    return (
        <section className="trivia-game">
        <div className="container">
          <div className="header">
            <div className="score">
              Score: -4
            </div>
            <div className="game-stats">
              <p className="stat_right"> Corrects: 0</p>
              <p className="stat_wrong"> Wrongs: 0</p>
              <p className="stat_skip"> Skiped: 0</p>
            </div>
          </div>
          <div className="main">
            <div className="game-question">
              Why did the chicken cross the road?
            </div>
          </div>
          <div className="answers">
            <div className="answer">Answer 1</div>
            <div className="answer">Answer 2</div>
            <div className="answer">Answer 3</div>
            <div className="answer">Answer 4</div>
          </div>
          <div className="timer">
          </div>
        </div>
      </section>
    )
}

export default Game;