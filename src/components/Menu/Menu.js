import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from "isomorphic-style-loader/withStyles";
import styles from './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className={styles.menu}>

      </div>
    )
  }
}

export default withStyles(styles)(Menu);
