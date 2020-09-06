import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
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
  constructor(props) {
    super(props);
    this.state = {
      38: false,
      37: false,
      39: false,
      40: false,
    };
  }

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

  onDown = async keyCode => {
    const isArrowKey = keyCode >= 37 && keyCode <= 40;

    if (isArrowKey) {
      const isPressed = keysState[keyCode];

      if (!isPressed) {
        const name = keysNames[keyCode];
        keysState[keyCode] = true;

        this.setState({
          [keyCode]: true,
        });

        await fetch('/lego', {
          method: 'POST',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, status: true }),
        });
      }
    }
  };

  onUp = async keyCode => {
    const isArrowKey = keyCode >= 37 && keyCode <= 40;

    if (isArrowKey) {
      const isPressed = keysState[keyCode];

      if (isPressed) {
        const name = keysNames[keyCode];
        keysState[keyCode] = false;

        this.setState({
          [keyCode]: false,
        });

        await fetch('/lego', {
          method: 'POST',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, status: false }),
        });
      }
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.first_layer}>
          <div
            className={styles.arrow}
            style={(this.state[38] && { backgroundColor: '#cfcfcf' }) || {}}
          >
            ↑
          </div>
        </div>
        <div className={styles.second_layer}>
          <div
            className={styles.arrow}
            style={(this.state[37] && { backgroundColor: '#cfcfcf' }) || {}}
          >
            ←
          </div>
          <div
            className={styles.arrow}
            style={(this.state[40] && { backgroundColor: '#cfcfcf' }) || {}}
          >
            ↓
          </div>
          <div
            className={styles.arrow}
            style={(this.state[39] && { backgroundColor: '#cfcfcf' }) || {}}
          >
            →
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
