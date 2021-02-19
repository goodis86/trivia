import React, { Component } from "react";
import axios from "axios";

import "./game.css";
import Scores from "../../components/scores/scores";
import MainQ from "../../components/mainQ/mainQ";
import Answer from "../../components/answer/answer";

import QuestionMenu from '../../components/questionMenu/questionMenu';
import Spinner from '../../components/Spinner/Spinner';

import Timer from '../../components/Timer/timer';

   


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

fetchData = () => {    // runs only once!! on the button click LOAD QUESTIONS
     axios.get(this.state.apiUrl).then((response) => {
      this.setState({
        dataPackage: response.data.results,
        fetched: true,
        apiUrl: 'something'
      });
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
    } else {
      this.setState({ gameOver: true });
    }
  }

  compareAnswer = (answer) => {                      // method that updates our scoreboard!!!
    
    if (answer === 'null') {        // we pass 'null' if our timer runs out of time!
      this.setState({
        skipped: this.state.skipped + 1
      })
    } else if (answer === this.state.correctAnswer) {
      this.setState({
        correctStats: this.state.correctStats + 1,
      });
    } else {
      this.setState({ incorrectStats: this.state.incorrectStats + 1 });
    }
  };

  onTrigger = (event) => {     // call this method more logically for ease of reading
this.setState({apiUrl: event});   
  }
 
  render() {
    console.log('[GAME COMPONENT] render method ran!!');

    if(this.state.apiUrl && this.state.fetched === false) {
      this.fetchData();
      return <Spinner/>         // SHOW SPINNER IF LOADING!
  }
    
   
    let answers = this.state.incorrectAnswers // array of shuffled answers
      .concat(this.state.correctAnswer)
      .sort(() => 0.5 - Math.random());
    let timer = <div/>;
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
      
     timer = <Timer 
              onTimeOut = {() => {            // OUR PROPS RECEIVE ONtimeOUT AND WE TRIGGER OUR METHODS HERE !
                console.log('[ontimeOut prop executes]')
              this.compareAnswer('null');
              // this.setState({skipped: this.state.skipped +1}) ;
              this.showQuestion()
    }}/>       // i have my timer going only when currentQuestion has a value !!!!
    } 

    let mainQuestion = <QuestionMenu onChange = {this.onTrigger.bind(this)}/>      // props onChange triggers our child component logic!!!!

   if (this.state.dataPackage) {   // rendering select menu before populating the state!
      mainQuestion = <MainQ currentQuestion={this.state.currentQuestion} />; // if we do have a datapackage - show current question
    }
    if (this.state.gameOver) {
      mainQuestion = <MainQ currentQuestion="GAME OVER"></MainQ>; // main question render logic
      options = null; // don't render my answer options when game over
      timer = <div/>      // don't show timer if game over!
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
        {timer}
          </div>
        </div>
      </section>
    );
  }
}

export default Game;
