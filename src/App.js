import { Component } from "react";
import "./App.css";
//import Questions from "./components/Questions";
//import Button1 from './components/Button';
import Game from "./containers/game/game";
class App extends Component {
  
  
 

  // here is a function to fetch questions and answers

 
  render() {
    return (
      console.log('app.js mounted'),
      <div>
        <Game ></Game>
      </div>
    );
  }
}

export default App;
