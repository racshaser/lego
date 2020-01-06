import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from "isomorphic-style-loader/withStyles";
import styles from './Header.css';

class Header extends Component {
  render() {
    return(
      <div className={styles.header}>
        <div className={styles.logo}>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
