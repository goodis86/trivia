import React, { Component } from "react";
import "./game.css";
import Scores from "../../components/scores/scores";
import MainQ from "../../components/mainQ/mainQ";
//import Answers from "../../components/answers/answers";
import axios from "axios";
import Answer from "../../components/answers/answer/answer";
import "../../components/answers/answers.css";
import Button from "../../components/Button";
class Game extends Component {
  state = {
    currentQuestion: "Hey there! let's check how smart are you...",
    correctAnswer: "wanna try???",
    incorrectAnswers: [],
    // fetched: false,
  };

  fetchData = () => {
    let urlAPI =
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
      // 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean';


    axios.get(urlAPI).then((response) => {
      this.setState({
        correctAnswer: response.data.results[0].correct_answer,
        incorrectAnswers: response.data.results[0].incorrect_answers,
        currentQuestion: response.data.results[0].question,

        fetched: true,
      });
      console.log(response.data);
    });
  };

  render() {
    // let correctAnswer = null;
    let options = null;
    // let incorrectAnswers = null;
    let answers = this.state.incorrectAnswers
    .concat(this.state.correctAnswer)
    .sort( () => .5 - Math.random() );

    // [1,2,3,4,5,6].sort( () => .5 - Math.random() );





    if (this.state.incorrectAnswers !== []) {

      options = answers.map((counter) => {
        return <Answer key={counter} versi={counter}></Answer>
      })
      // incorrectAnswers = this.state.incorrectAnswers.map((counter) => {
      //   return <Answer key={counter} versi={counter}></Answer>;
      // })
    }
    // correctAnswer = <Answer versi={this.state.correctAnswer}> </Answer>

    return (
      <section className="trivia-game">
        <div className="container">
          <div className="header">
            <Scores></Scores>
          </div>

          <MainQ currentQuestion={this.state.currentQuestion} />
          <div className="answers">
          
           {options}
            {/* {correctAnswer} */}
            {console.log(answers)}
            {/* <Answer versi = {this.state.correctAnswer} /> */}
            {console.log(this.state.correctAnswer)}
           
            {/* {console.log("in my return ")} */}
            {/* <Answer versi={this.state.incorrectAnswers[0]} /> */}
            {/* <Answer c={this.state.correctAnswer} /> */}
          </div>
          <Button click={this.fetchData} />
          <div className="timer">timer in process ...</div>
        </div>
      </section>
    );
  }
}

export default Game;
