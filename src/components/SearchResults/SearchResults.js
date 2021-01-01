import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Container from './../Container/Container.js';
import { settings } from './../../data/dataStore.js';
import Card from './../Card/Card.js';
import Icon from './../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    columns: PropTypes.array,
    cards: PropTypes.array,
    icon: PropTypes.string,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  render() {
    const { icon, cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </div>
          <div className={styles.cards}>
            {cards.map((cardData) => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
