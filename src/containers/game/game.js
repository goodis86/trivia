import React, { Component } from "react";
import axios from "axios";

import styles from "./game.module.css";
import "./game.css";

import Scores from "../../components/scores/scores";
import MainQ from "../../components/mainQ/mainQ";
import Answer from "../../components/answer/answer";

import QuestionMenu from "../../components/questionMenu/questionMenu";
import Spinner from "../../components/Spinner/Spinner";

import Timer from "../../components/Timer/timer";

class Game extends Component {
  state = {
    apiUrl: null,

    dataPackage: null,
    dataIndex: 0,
    fetched: false,

    currentQuestion: null,
    incorrectAnswers: [],
    correctAnswer: "",

    correctStats: 0,
    incorrectStats: 0,
    skipped: 0,

    gameOver: false,
  };

  fetchData = () => {                                                    // runs only once!! on the button click LOAD QUESTIONS
    console.log("[PARENT] fetchData method ran");
    axios.get(this.state.apiUrl).then((response) => {
      this.setState({
        dataPackage: response.data.results,
        fetched: true,
        apiUrl: "something",
      });
      this.showQuestion();
    });
  };

  showQuestion = () => {
    console.log("[PARENT] showQuestion method ran");

    if (this.state.dataIndex < this.state.dataPackage.length) {                           // check if we are within our question array
      this.setState({
        currentQuestion: this.state.dataPackage[this.state.dataIndex].question,
        correctAnswer: this.state.dataPackage[this.state.dataIndex]
          .correct_answer,
        incorrectAnswers: this.state.dataPackage[this.state.dataIndex]
          .incorrect_answers,
        dataIndex: this.state.dataIndex + 1,
      });
    } else {
      this.setState({ gameOver: true });
    }
  };

  compareAnswer = (answer) => {
    console.log("[PARENT] compareAnswer ran");                                    // method that updates our scoreboard!!!

    if (answer === "null") {
                                                                // we pass 'null' if our timer runs out of time and increment skipped value
      this.setState({
        skipped: this.state.skipped + 1,
      });
    } else if (answer === this.state.correctAnswer) {
      this.setState({
        correctStats: this.state.correctStats + 1,
      });
    } else {
      this.setState({ incorrectStats: this.state.incorrectStats + 1 });
    }
  };

  dynamicUrlHandler = (event) => {                                  // updates our apiUrl in our parent's state!
    this.setState({ apiUrl: event });
  };

  render() {
    console.log("[PARENT] rendered");

    if (this.state.apiUrl && this.state.fetched === false) {
      this.fetchData();
      return <Spinner />;                                         // SHOW SPINNER IF LOADING!
    }

    let answers = this.state.incorrectAnswers                     // array of shuffled answers
      .concat(this.state.correctAnswer)
      .sort(() => 0.5 - Math.random());
    let timer = <div />;
    let options = null;
    if (this.state.currentQuestion) {
                                                                // answer buttons rendering on screen!!
      options = answers.map((answer) => {
        return (
          <Answer
            key={answer}
            versi={answer}
            clicked={() => {
              console.log("[PARENT] clicked props at work");
              this.compareAnswer(answer);                               // on click we call compareAnswer method to change scores!
              this.showQuestion();                                      // initiate next question and move on!
            }}
          ></Answer>
        );
      });

      timer = (
        <Timer
          onTimeOut={() => {                                                  // OUR ONTIMEOUT PROPS ARE RECEIVED FROM CHILD AND WE TRIGGER OUR METHODS HERE !
            console.log("[CHILD] Timer ontimeOut prop initiated]");
            this.compareAnswer("null");
            this.showQuestion();
          }}
          timerReset={this.state.dataIndex}                   // we set our props to dataIndex(changes with every question), allows us to avoid infinite loop in timer component!
        />
      ); 
    }

    let mainQuestion = (                                                      // rendering questionMenu before populating the state!
      <QuestionMenu onChange={this.dynamicUrlHandler.bind(this)} />       // props onChange triggers our child component logic!!!!
    ); 

    if (this.state.dataPackage) {
                                                                                   
      mainQuestion = <MainQ currentQuestion={this.state.currentQuestion} />;        // if we do have a datapackage - show current question
    }

    // {this.state.gameOver ? styles.header.headerGameOver : styles.header}
     // conditional application of our styles to score block!
    let scores =  <div className='header' >   
    <Scores
      correctStats={this.state.correctStats}
      incorrectStats={this.state.incorrectStats}
      skipped={this.state.skipped}
      ></Scores>
  </div>

      if (this.state.gameOver) {
        mainQuestion = <MainQ currentQuestion="GAME OVER"></MainQ>;                   // if game over - WE CAN ANIMATE OUR RESULTS! - DO SOME VISUAL AIDS!
        options = null;                                                               // don't render my answer options when game over
        timer = <div />;                                                              // don't show timer if game over!
        scores = <div className='header headerGameOver'>
        <Scores
          correctStats={this.state.correctStats}
          incorrectStats={this.state.incorrectStats}
          skipped={this.state.skipped}
          ></Scores>
      </div>
      }
    return (
      <section className={styles.triviaGame}>
        <div className={styles.container}>
        {scores}
          {mainQuestion}
          <div className={styles.answers}>
            {options}
            {timer}
          </div>
        </div>
      </section>
    );
  }
}

export default Game;
