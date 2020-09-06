import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import styles from './Layout.css';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
