import React, { Component } from "react";
import styles from "./Column.scss";
import PropTypes from "prop-types";

class Column extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  };

  static defaultProps = {
    title: "Category",
  };

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    );
  }
}

export default Column;
