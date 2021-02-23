import React, { Component } from "react";
import "./questionMenu.css";
import "../../components/mainQ/mainQ.css";

import Button from "../../components/Button";

                                                                        // this component rerenders and shows us our option chosen!!
                                                                        // it does not trigger rerender of our game component!!!!

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

class QuestionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "",
      category: null,
      difficulty: null,
      questionAmount: null,
      gameType: null,
    };

    this.userChoiseHandler = this.userChoiseHandler.bind(this);
    this.dynamicUrl = this.dynamicUrl.bind(this);
  }

  userChoiseHandler(event) {
    this.setState({ [event.target.name]: event.target.value });                   // implemented our method to alter needed state values depending on type of select items!!!!!
  }
  dynamicUrl() {
    console.log("[CHILD] QuestionMenu - dynamic url is created:");
    let apiUrl = `https://opentdb.com/api.php?amount=${this.state.questionAmount}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=${this.state.gameType}`;
    this.props.onChange(apiUrl);                                                // onChange prop is initiated and passes our dynamically created url to our parent through props!!!!
  }

  render() {
    console.log("[CHILD] QuestionMenu rendered");
    let loadButton = <div />;                                               // load questions button rendering and logic!

    if (
      this.state.category &&
      this.state.questionAmount &&
      this.state.difficulty &&
      this.state.gameType
    ) {
      loadButton = <Button click={this.dynamicUrl} />;                      // run dynamicUrl method on our button click! - which passes our url to parent right away!
    }

    return (
      <div className="main">
        <form className="game-question">
                                                                       {/* each select gets onChange prop and name prop to manipulate and update data in our state*/}
          <select onChange={this.userChoiseHandler} name="category">    {/*and use only 1 method to update state*/}
            {category.map((
              option                                                                // mapping through our arrays and rendering options!
            ) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select onChange={this.userChoiseHandler} name="difficulty">
            {difficultyLevel.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select onChange={this.userChoiseHandler} name="questionAmount">
            {questionAmount.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select onChange={this.userChoiseHandler} name="gameType">
            {gameType.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {loadButton}
        </form>
      </div>
    );
  }
}

export default QuestionMenu;
