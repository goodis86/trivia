import { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/layout";

import Game from "./containers/game/game";

class App extends Component {
  render() {
    console.log('[APP component] rendered ');
    return (
      // console.log("app.js mounted in return"),
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
