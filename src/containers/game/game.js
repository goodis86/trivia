import React, { Component } from "react";
import "./game.css";
import Scores from "../../components/scores/scores";
import MainQ from "../../components/mainQ/mainQ";
import axios from "axios";
import Answer from "../../components/answers/answer/answer";
import "../../components/answers/answers.css";
import Button from "../../components/Button";
class Game extends Component {
  state = {
    dataPackage: null,
    currentQuestion: 'whats going on bud',
    correctAnswer: 'lets do this',
    incorrectAnswers: [],
    fetched: false,
    dataIndex: 0
  };

  
  
  showQuestion = () => {
   
    this.setState({
      currentQuestion: this.state.dataPackage[this.state.dataIndex].question,
      correctAnswer: this.state.dataPackage[this.state.dataIndex].correct_answer,
      incorrectAnswers: this.state.dataPackage[this.state.dataIndex].incorrect_answers,
      dataIndex: this.state.dataIndex + 1
    });
      
      console.log('show question runs');
  }
  
  fetchData = () => {
    
    let urlAPI =
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
    // 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean';

    axios.get(urlAPI).then((response) => {
      this.setState({ dataPackage: response.data.results,
        // correctAnswer: response.data.results[0].correct_answer,
        // incorrectAnswers: response.data.results[0].incorrect_answers,
        // currentQuestion: response.data.results[0].question,

        fetched: true,
      });
      // console.log(response.data);
      console.log(this.state.dataPackage);
      console.log('fetchData method ran')
      this.showQuestion();

    });
  };

  render() {
    let options = null;
    let answers = this.state.incorrectAnswers
      .concat(this.state.correctAnswer)
      .sort(() => 0.5 - Math.random());

    if (this.state.incorrectAnswers !== []) {    // check if this is legitimate
      options = answers.map((answer) => {
        return <Answer 
        key={answer} 
        versi={answer}
        clicked = {this.showQuestion}></Answer>;
      });
    }

    let loadButton = <div/>;
    if (!this.state.fetched) {
      loadButton =  <Button 
      click={this.fetchData} 
     />
    }

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
         
          {loadButton}
          <div className="timer">timer in process ...</div>
        </div>
      </section>
    );
  }
}

export default Game;
