import { Component } from "react";
import "./App.css";
//import Questions from "./components/Questions";
//import Button1 from './components/Button';
import Game from "./containers/game/game";
class App extends Component {
  
  
  state = {
    corrects: 0,
    wrongs: 0,
    skipped: 0,
    totalQuestions: 0, // this will be passed on to question counter
    currentQuestion: "what time is it?", // displayed in question window
    answers: [],
  };

  // here is a function to fetch questions and answers

  totalCounter = () => {
    this.setState({ totalQuestions: this.state.totalQuestions + 1 });
    console.log(this.state);
  };

  changeText = () => {
    this.setState({ currentQuestion: "is it real?" });
    console.log(this.state.currentQuestion);
  };

  render() {
    return (
      <div>
        <Game currentQuestion={this.state.currentQuestion}></Game>
      </div>
    );
  }
}

export default App;
