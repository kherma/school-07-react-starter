import React, { Component } from "react";
import styles from "./List.scss";
import Hero from "./../Hero/Hero.js";
import PropTypes from "prop-types";
import Column from "./../Column/Column.js";
import { settings } from "./../../data/dataStore.js";

class List extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    src: PropTypes.string,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.src} />
        <div className={styles.description}>{this.props.description}</div>
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
