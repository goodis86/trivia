import React, { Component } from "react";
import axios from "axios";

import "./game.css";
import Scores from "../../components/scores/scores";
import MainQ from "../../components/mainQ/mainQ";
import Answer from "../../components/answer/answer";
import Button from "../../components/Button";
import QuestionMenu from '../../components/questionMenu/questionMenu';

class Game extends Component {
  state = {
    category: null,
    difficulty: null,
    questionAmount: null,
    gameType: null,
    
    dataPackage: null,
    fetched: false,
    
    currentQuestion: null,
    incorrectAnswers: [],
    correctAnswer: "",
    
    dataIndex: 0,
    correctStats: 0,
    incorrectStats: 0,
    skipped: 0,
    
    showResults: false,
  };

  compareAnswer = (answer) => {                      // method that updates our scoreboard!!!
    if (answer === this.state.correctAnswer) {
      this.setState({
        correctStats: this.state.correctStats + 1,
      });
    } else {
      this.setState({ incorrectStats: this.state.incorrectStats + 1 });
    }
  };

  showQuestion = () => {                // loads next question
    if (this.state.dataIndex < this.state.dataPackage.length) {  // check if we are within our question array
      this.setState({
        currentQuestion: this.state.dataPackage[this.state.dataIndex].question,
        correctAnswer: this.state.dataPackage[this.state.dataIndex]
          .correct_answer,
        incorrectAnswers: this.state.dataPackage[this.state.dataIndex]
          .incorrect_answers,
        dataIndex: this.state.dataIndex + 1,
      });
      console.log("show question runs");
    } else {
      this.setState({ showResults: true });
    }
  };

  urlCategory = (event) => {
    console.log(event.target.value);
    this.setState({category: event.target.value});
 
    console.log(this.state.category);
}
  urlDifficulty = (event) => {
    console.log(event.target.value);
    this.setState({difficulty: event.target.value});
  // let url = `https://opentdb.com/api.php?amount=${event.target.value}&category=${9}&difficulty=${easy}&type=${multiple}`
    console.log(this.state.category);
}
  urlQuestionAmount = (event) => {
    console.log(event.target.value);
    this.setState({questionAmount: event.target.value});
  // let url = `https://opentdb.com/api.php?amount=${event.target.value}&category=${9}&difficulty=${easy}&type=${multiple}`
    console.log(this.state.category);
}
  urlGameType = (event) => {
    console.log(event.target.value);
    this.setState({gameType: event.target.value});
  // let url = `https://opentdb.com/api.php?amount=${event.target.value}&category=${9}&difficulty=${easy}&type=${multiple}`
    console.log(this.state.category);
}

  fetchData = () => {    // runs only once!! on the button click LOAD QUESTIONS
    let urlAPI = `https://opentdb.com/api.php?
    amount=${this.state.questionAmount}&
    category=${this.state.category}&
    difficulty=${this.state.difficulty}&
    type=${this.state.gameType}`
   
    axios.get(urlAPI).then((response) => {
      this.setState({
        dataPackage: response.data.results,
        fetched: true,
      });
      console.log("fetchData method ran");
      this.showQuestion();
    });
  };

  render() {
    let answers = this.state.incorrectAnswers // array of shuffled answers
      .concat(this.state.correctAnswer)
      .sort(() => 0.5 - Math.random());
    
    let options = null;
    if (this.state.currentQuestion) {      // answer buttons rendering on screen!!
      options = answers.map((answer) => {
        return (
          <Answer
            key={answer}
            versi={answer}
            clicked={() => {
              this.compareAnswer(answer); // on click we call compareAnswer method to change scores!
              this.showQuestion(); // initiate next question and move on!
            }}
          ></Answer>
        );
      });
    } 

    let loadButton = <div />; // load questions button rendering and logic!
    if (!this.state.fetched) {
      loadButton = <Button click={this.fetchData} />;
    }
    
// need to create a component for options and styling for them
// create logic to construct our api url and dynamically inject that in our fetch request
// create a clean up function
// make sure no infinite loops, minimize resource potential
// optimize overall logic and performance (do better if checks, get rid of redundant renders...!)

   let mainQuestion;
    if (!this.state.dataPackage) {   // rendering select menu before populating the state!
      mainQuestion = <QuestionMenu 
      category = {this.urlCategory}
      gameType = {this.urlGameType}
      questionAmount = {this.urlQuestionAmount}
      difficulty = {this.urlDifficulty}></QuestionMenu>}
      
    else {
      mainQuestion = <MainQ currentQuestion={this.state.currentQuestion} />; // if we do have a datapackage - show current question

    }
    if (this.state.showResults) {
      mainQuestion = <MainQ currentQuestion="GAME OVER"></MainQ>; // main question render logic
      options = null; // don't render my answer options when game over
    } 

    return (
      <section className="trivia-game">
        <div className="container">
          <div className="header">
            <Scores
              correctStats={this.state.correctStats}
              incorrectStats={this.state.incorrectStats}
              skipped={this.state.skipped}
            ></Scores>
          </div>
          {mainQuestion}

          <div className="answers">
            {options}
            {console.log(this.state.correctAnswer)}  
          </div>
          {loadButton}
          <div className="timer">timer in process ...</div>
        </div>
      </section>
    );
  }
}

export default Game;
