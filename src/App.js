import { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/layout";

import Game from "./containers/game/game";

class App extends Component {
  render() {
    return (
      console.log("app.js mounted"),
      (
        <Layout>
          <Game>
            
          </Game>
          </Layout>
      )
    );
  }
}

export default App;
