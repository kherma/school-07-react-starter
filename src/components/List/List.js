import React, { Component } from "react";
import styles from "./List.scss";
import Hero from "./../Hero/Hero.js";
import PropTypes from "prop-types";
import Column from "./../Column/Column.js";

class List extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    src: PropTypes.string,
  };

  static defaultProps = {
    children: <p>Life is limitless with our app!!!</p>,
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.src} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column title="Animals" />
          <Column title="Plants" />
          <Column title="Minerals" />
        </div>
      </section>
    );
  }
}

export default List;
