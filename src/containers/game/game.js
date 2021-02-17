import React, { Component } from "react";
import axios from "axios";

import "./game.css";
import Scores from "../../components/scores/scores";
import MainQ from "../../components/mainQ/mainQ";
import Answer from "../../components/answer/answer";

import QuestionMenu from '../../components/questionMenu/questionMenu';
// import Timer from '../../components/Timer/timer';

   


class Game extends Component {
  state = {
   
    apiUrl: null,

    dataPackage: null,
    fetched: false,
    
    currentQuestion: null,
    incorrectAnswers: [],
    correctAnswer: "",
    
    dataIndex: 0,
    correctStats: 0,
    incorrectStats: 0,
    skipped: 0,
    
    gameOver: false,
  };

  
componentDidUpdate() {
  if(this.state.apiUrl && this.state.fetched === false) {
    this.fetchData();
 
}
}

fetchData = () => {    // runs only once!! on the button click LOAD QUESTIONS
  
    console.log('[Game] fetchData method received url: ' + this.state.apiUrl);
     axios.get(this.state.apiUrl).then((response) => {
      console.log('[Game] fetchdata before setState , datapackage' + response.data.results)
      this.setState({
        dataPackage: response.data.results,
        fetched: true,
      });
      console.log("[Game] fetchData method ran");
      this.showQuestion();
    });
  }

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
      console.log("[Game] show question runs");
    } else {
      this.setState({ gameOver: true });
    }
  }

  compareAnswer = (answer) => {                      // method that updates our scoreboard!!!
    if (answer === this.state.correctAnswer) {
      this.setState({
        correctStats: this.state.correctStats + 1,
      });
    } else {
      this.setState({ incorrectStats: this.state.incorrectStats + 1 });
    }
  };

  onTrigger = (event) => {
console.log('[Game] onTrigger runs')   ;
this.setState({apiUrl: event});
  }

  render() {
    // console.log('redering game component');
  

    // console.log(this.state.apiUrl);
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

  
    


// create a clean up function
// make sure no infinite loops, minimize resource potential
// optimize overall logic and performance (do better if checks, get rid of redundant renders...!)

console.log('[Game] state apiURl is ' + this.state.apiUrl);
// if (this.state.apiUrl && this.state.fetched===false) {
//   this.fetchData(this.state.apiUrl);
// }

   let mainQuestion = <QuestionMenu onChange = {this.onTrigger.bind(this)}/>      // props onChange triggers our child component logic!!!!

   if (this.state.dataPackage) {   // rendering select menu before populating the state!
      // mainQuestion = <QuestionMenu /> }
      mainQuestion = <MainQ currentQuestion={this.state.currentQuestion} />; // if we do have a datapackage - show current question
    }

    if (this.state.gameOver) {
      mainQuestion = <MainQ currentQuestion="GAME OVER"></MainQ>; // main question render logic
      options = null; // don't render my answer options when game over
    } 

    return (

      // i can use an higher order component here to wrap my adjacent elements and give the whole game styling at the same time!!!!
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
        {/* {this.state.apiUrl} */}
          <div className="answers">
            {options}
            {/* {console.log(this.state.correctAnswer)}   */}
          {/* <Timer /> */}

          </div>
          {/* {loadButton} */}
        </div>
      </section>
    );
  }
}

export default Game;
