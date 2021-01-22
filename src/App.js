import { Component } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Button1 from './components/Button';
class App extends Component {

  state = {
        totalQuestions: 0,
        currentQuestion: 'what time is it?'
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
      <div className="App">
        <div className="Questions">

                    <Questions changeText = {this.changeText}>
                     <p> {this.state.currentQuestion} </p>
                      </Questions>
               
                    <Button1 className="Button"></Button1>
                    <Button1 className="Button"></Button1>
                    <Button1 ></Button1>
                    <Button1 click ={this.totalCounter} ></Button1>
        </div>
        
       </div>
    );
  }
}

export default App;
