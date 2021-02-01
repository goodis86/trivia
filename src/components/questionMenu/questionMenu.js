import React from "react";
import "./questionMenu.css";
import '../../components/mainQ/mainQ.css';

const questionMenu = (props) => {
  return (
    <div className="main">
      <form className="game-question">
        <select 
        defaultValue="select category"
        onChange={props.category}>
            <option value='17'>science and nature</option>
            <option value='9'>general knowledge</option>
            <option value='23'>history</option>
        </select>
        <select 
        value="select game type"
        onChange={props.gameType}>
            <option value='boolean'>true/false</option>
            <option value='multiple'>multichoice</option>
        </select>
        <select 
        value="# of questions"
        onChange={props.questionAmount}>
            <option value='10' >10 questions</option>
            <option value='5' >5 questions</option>
            <option value='3' >3 questions</option>
        </select>
        <select 
        value="select difficulty"
        onChange={props.difficulty}>
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
        </select>
      </form>
    </div>
  );
};

export default questionMenu;


       
       
// <select>
//   <option value="grapefruit">Grapefruit</option>
//   <option value="lime">Lime</option>
//   <option selected value="coconut">Coconut</option>
//   <option value="mango">Mango</option>
// </select>

// <form onSubmit={this.handleSubmit}>
// <label>
//   Pick your favorite flavor:
//   <select value={this.state.value} onChange={this.handleChange}>
//     <option value="grapefruit">Grapefruit</option>
//     <option value="lime">Lime</option>
//     <option value="coconut">Coconut</option>
//     <option value="mango">Mango</option>
//   </select>
// </label>
// <input type="submit" value="Submit" />
// </form>