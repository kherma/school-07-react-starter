import React, { Component } from "react";
import styles from "./App.scss";
import List from "./../List/List.js";

class App extends Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello react!</h2>
        <List />
      </main>
    );
  }
}

export default App;
