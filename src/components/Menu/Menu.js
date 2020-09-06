import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './Menu.css';

class Menu extends Component {
  render() {
    return <div className={styles.menu} />;
  }
}

export default withStyles(styles)(Menu);
