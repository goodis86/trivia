import { Component } from "react";
// import styles from "./App.module.css";
import Layout from "./components/Layout/layout";

import Game from "./containers/game/game";

class App extends Component {
  render() {
    console.log('[APP component] rendered ');
    return (
      (
        <div>
        <Layout >
          <Game>
            
          </Game>
          </Layout>
          </div>
          )
    );
  }
}

export default App;
