import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import Icon from './../Icon/Icon';
import styles from './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to="/">
              <Icon name="th-list" />
            </Link>
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/info" activeClassName="active">
                Info
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
