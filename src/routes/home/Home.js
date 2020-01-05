import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './Home.css';

class ErrorPage extends React.Component {
  render() {
    return (
      <div style={{background: 'red'}}>
        <h1>Hello, World</h1>
      </div>
    )
  }
}

// export default ErrorPage;

export default withStyles(styles)(ErrorPage);
