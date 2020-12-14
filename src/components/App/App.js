import React, { Component } from "react";
import styles from "./App.scss";
import List from "./../List/List.js";

class App extends Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello react!</h2>
        <List
          title={["Things to do", <sup key="1">soon!</sup>]}
          src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
        >
          <p>
            God, please let me travel in time... oh wait, I just got this app...
            so nevermind!!
          </p>
        </List>
      </main>
    );
  }
}

export default App;
