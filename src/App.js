import { Component } from "react";
import "./App.css";
//import Questions from "./components/Questions";
//import Button1 from './components/Button';
import Game from './containers/game/game';
class App extends Component {

  state = {
        totalQuestions: 0,  // this will be passed on to question counter
        currentQuestion: 'what time is it?'  // displayed in question window
     };
   

totalCounter = () => {
  this.setState({totalQuestions: this.state.totalQuestions+1});
  console.log(this.state);
}

changeText = () => {
  this.setState({currentQuestion: 'is it real?'});
  console.log(this.state.currentQuestion);
}
 
  render() {
    return (
      <div>

        <Game></Game>
        
       </div>
    );
  }
}

export default App;
