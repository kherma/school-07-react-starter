import React, { Component } from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from './../Card/Card.js';
import Creator from './../Creator/Creator.js';
import { settings } from './../../data/dataStore.js';
import Icon from './../Icon/Icon.js';

class Column extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
    title: 'Category',
  };

  render() {
    const { title, icon, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div>
          {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
          <Creator
            text={settings.cardCreatorText}
            action={(title) => addCard(title)}
          />
        </div>
      </section>
    );
  }
}

export default Column;
