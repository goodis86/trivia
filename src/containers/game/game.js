import React, { Component } from "react";
import "./game.css";
import Scores from "../../components/scores/scores";
import MainQ from "../../components/mainQ/mainQ";
//import Answers from "../../components/answers/answers";
import axios from "axios";
import Answer from '../../components/answers/answer/answer';
import '../../components/answers/answers.css';


class Game extends Component {



  state = {
   
    currentQuestion: "what time is it?", // displayed in question window
    correctAnswer: '',
    incorrectAnswers: ['1','2','3'] ,
    fetched: false
  }

  fetchData() {
    let urlAPI = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
    
    axios.get(urlAPI)

      .then((response) => {

        this.setState({
          incorrectAnswers: response.data.results[0].incorrect_answers,
          correctAnswer: response.data.results[0].correct_answer,
          currentQuestion: response.data.results[0].question,
         // fetched: !this.state.fetched
                      })
        console.log(response.data);
      })
      
      .then(() => {
        
        console.log(this.state.currentQuestion);
        console.log(this.state.incorrectAnswers);
          console.log(this.state.correctAnswer);
          // <Answer incorrectAnswers = {this.state.incorrectAnswers[0]} />

        })
  }
  
  componentDidMount() {
   this.fetchData();
   
}
  

  render() {

    let incorrectAnswers = null;

  

   if (this.state.fetched) {

    incorrectAnswers = <div/>;
   }
    else {
   incorrectAnswers = this.state.incorrectAnswers.map( answer => {
      
     
      return <Answer key = {answer} versi = {this.state.incorrectAnswers[answer]}></Answer>
      //console.log('my render method');
    })

  }


    // console.log(this.state.incorrect_answers);
     
 

 
    return (



      <section className="trivia-game">
        <div className="container">
          <div className="header">
            <Scores></Scores>
          </div>

        <MainQ/>
        <div className = 'answers'>
         
        {console.log('in my return ')}
         {incorrectAnswers}

        </div>

          <div className="timer">timer in process ...</div>
        </div>
      </section>
    );
  }
}

export default Game;
