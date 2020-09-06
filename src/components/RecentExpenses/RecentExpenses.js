import React, { Component } from 'react';
import withStyles from "isomorphic-style-loader/withStyles";
import styles from './RecentExpenses.css';

class RecentExpenses extends Component {
  expense = ({ name, cost }) => (
    <div>
      <div>{name}</div>
      <div>{cost}</div>
    </div>
  );

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>Recent expenses</div>
        <div className={styles.content}>
          {this.expense({name: 'Diksi', cost: 762})}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(RecentExpenses);
