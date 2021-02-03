import React, { Component } from "react";
import "./questionMenu.css";
import '../../components/mainQ/mainQ.css';

// this component rerenders and shows us our option chosen!!
// it does not trigger rerender of our game component!!!!

// will need to take care of dynamically building our URL API>>

const category = [
  {
    label: 'Science and Nature',
    value: "17"
  },
  {
    label: "General Knowledge",
    value: "9",
  },
  {
    label: "History",
    value: "23",
  }
]

const gameType = [
  {
    label: 'TRUE/FALSE',
    value: 'boolean'
  },
  {
    label: 'MULTICHOICE',
    value: 'multiple'
  }

]

const questionAmount = [
  {
    label: '10 Questions',
    value: '10'
  },
  {
    label: '5 Questions',
    value: '5'
  },
  {
    label: '3 Questions',
    value: '3'
  }
]
const difficultyLevel = [
  {
    label: 'Easy',
    value: 'easy'
  },
  {
    label: 'Advanced',
    value: 'medium'
  },
  {
    label: 'Expert',
    value: 'hard'
  }
]

class QuestionMenu extends Component {
  state = {

    // urlAPI = null,
    category: null,
    difficulty: null,
    questionAmount: null,
    gameType:null
  }

  handleChange(event) {       // implemented our method to alter needed state props depending on type of select items!!!!!
    const value = event.target.value;
  this.setState({ [event.target.name]: value });
}
    

  render() {
    return (
      <div className="main">
        <form className="game-question">
          <select>
            {category.map((option) => (    // mapping through our arrays and rendering options!
              <option 
                name = 'category'
                value={option.value}
                onChange={this.handleChange}
              >{option.label}</option>
            ))}
          </select>
          <select>
            {difficultyLevel.map((option) => (
              <option
                name = 'difficulty' 
                value={option.value}
                onChange = {this.handleChange}
              >{option.label}</option>
            ))}
          </select>
          <select>
            {questionAmount.map((option) => (
              <option
                name = 'questionAmount' 
                value={option.value}
                onChange = {this.handleChange}
              >{option.label}</option>
            ))}
          </select>
          <select>
            {gameType.map((option) => (
              <option 
                name = 'gameType'
                value={option.value}
                onChange = {this.handleChange}
              >{option.label}</option>
            ))}
          </select>
          </form>
      </div>
    );
  }
}

export default QuestionMenu;



  


 

       
