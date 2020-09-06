import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Layout from '../../components/Layout/Layout';
import styles from './Home.css';

const keysState = {
  38: false,
  37: false,
  39: false,
  40: false,
};

const keysNames = {
  38: 'UP',
  37: 'LEFT',
  39: 'RIGHT',
  40: 'DOWN',
};

class Home extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
    document.addEventListener('keyup', this.keyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);
    document.removeEventListener('keyup', this.keyUp);
  }

  keyDown = e => {
    this.onDown(e.keyCode);
  };

  keyUp = e => {
    this.onUp(e.keyCode);
  };

  onDown = keyCode => {
    const isArrowKey = keyCode >= 37 && keyCode <= 40;

    if (isArrowKey) {
      const isPressed = keysState[keyCode];

      if (!isPressed) {
        const name = keysNames[keyCode];
        keysState[keyCode] = true;

        fetch('/lego', {
          method: 'POST',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, pressed: true }),
        })
          .then(res => res.json())
          .then(console.warn);
      }
    }
  };

  onUp = keyCode => {
    const isArrowKey = keyCode >= 37 && keyCode <= 40;

    if (isArrowKey) {
      const isPressed = keysState[keyCode];

      if (isPressed) {
        const name = keysNames[keyCode];
        keysState[keyCode] = false;

        fetch('/lego', {
          method: 'POST',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, pressed: false }),
        })
          .then(res => res.json())
          .then(console.warn);
      }
    }
  };

  render() {
    return (
      <Layout>
        <div className={styles.overview}>
          <h1>Hello, World!</h1>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Home);
