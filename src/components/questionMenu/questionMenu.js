import React, { Component } from "react";
import "./questionMenu.css";
import "../../components/mainQ/mainQ.css";

// this component rerenders and shows us our option chosen!!
// it does not trigger rerender of our game component!!!!

// will need to take care of dynamically building our URL API>>

const category = [
  {
    label: "Category",
    value: "9",
  },
  {
    label: "Science and Nature",
    value: "17",
  },
  {
    label: "General Knowledge",
    value: "9",
  },
  {
    label: "History",
    value: "23",
  },
];

const gameType = [
  {
    label: "Game Type ",
    value: "multiple",
  },
  {
    label: "TRUE/FALSE",
    value: "boolean",
  },
  {
    label: "MULTICHOICE",
    value: "multiple",
  },
];

const questionAmount = [
  {
    label: "# of Questions",
    value: "5",
  },
  {
    label: "10 Questions",
    value: "10",
  },
  {
    label: "5 Questions",
    value: "5",
  },
  {
    label: "3 Questions",
    value: "3",
  },
];
const difficultyLevel = [
  {
    label: "Level",
    value: "easy",
  },
  {
    label: "Easy",
    value: "easy",
  },
  {
    label: "Advanced",
    value: "medium",
  },
  {
    label: "Expert",
    value: "hard",
  },
];

// console.log(this.state.apiUrl);

class QuestionMenu extends Component {
  constructor(props) {
    super(props);
  this.state = {
    apiUrl: '',
    category: "null",
    difficulty: "null",
    questionAmount: "null",
    gameType: "null",
  };
 
  this.handleChange = this.handleChange.bind(this);
}

componentDidUpdate() {            // only runs when component updates, not initial render!!!!
  if (this.props.onChange) {      // if we have onChange props on our child component that renders in parent component , then we pass in to our props dynamically build apiurl!!!!
    this.props.onChange(`https://opentdb.com/api.php?amount=${this.state.questionAmount}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=${this.state.gameType}`);
  }
}
  handleChange(event) {
                                                        // implemented our method to alter needed state props depending on type of select items!!!!!
  
    // console.log(this.state.category);
    this.setState({ [event.target.name]: event.target.value });
    // console.log("event value is " + event.target.value);
    
  }
  

  render() {
    let apiUrl = `https://opentdb.com/api.php?amount=${this.state.questionAmount}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=${this.state.gameType}`;
    console.log("question menu is rendering...");
    // console.log(apiUrl);
    return (
      <div className="main">
     

        <form className="game-question">

      {/* each select gets onChange prop and name prop to manipulate and update data in our state and use only 1 method to update state!!!!! */}
          <select onChange={this.handleChange} name = 'category'>         
            {category.map((option) => (                               // mapping through our arrays and rendering options!
              <option                                 // our options dont  change, therefore we cant have onChange here, it will never be triggered!!!!
                key={option.label}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <select onChange={this.handleChange} name = 'difficulty'>
            {difficultyLevel.map((option) => (
              <option
                key={option.label}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <select onChange={this.handleChange} name = 'questionAmount'>
            {questionAmount.map((option) => (
              <option
                key={option.label}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <select onChange={this.handleChange} name = 'gameType'>
            {gameType.map((option) => (
              <option
                key={option.label}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          {apiUrl}
        </form>

     
      </div>
    );
  }
}

export default QuestionMenu;
