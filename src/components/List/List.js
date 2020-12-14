import React, { Component } from "react";
import styles from "./List.scss";
import Hero from "./../Hero/Hero.js";
import PropTypes from "prop-types";

class List extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: <p>Life is limitless with our app!!!</p>,
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>{this.props.children}</div>
      </section>
    );
  }
}

export default List;
