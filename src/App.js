import { Component } from "react";
import "./App.css";

import Game from "./containers/game/game";

class App extends Component {
  render() {
    return (
      console.log("app.js mounted"),
      (
        <div>
          <Game></Game>
        </div>
      )
    );
  }
}

export default App;
