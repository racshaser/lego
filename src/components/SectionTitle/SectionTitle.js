import React, { Component } from "react";
import PropTypes from 'prop-types';
import withStyles from "isomorphic-style-loader/withStyles";
import styles from './SectionTitle.css';

class SectionTitle extends Component {
  static propTypes = {
    left: PropTypes.string.isRequired,
    right: PropTypes.string,
  };

  render() {
    const { left, right } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          {left}
        </div>
        <div>
          {right}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SectionTitle);
