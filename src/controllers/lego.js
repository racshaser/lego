import { connected, motorA, motorB, motorC } from '../connector/connector';

const goForward = async () => {
  if (connected) {
    await motorA.setPower(-100);
    await motorB.setPower(-100);
  }
};

const brakeForward = async () => {
  if (connected) {
    await motorA.brake();
    await motorB.brake();
  }
};

const goBack = async () => {
  if (connected) {
    await motorA.setPower(100);
    await motorB.setPower(100);
  }
};

const brakeBack = async () => {
  if (connected) {
    await motorA.brake();
    await motorB.brake();
  }
};

const turnLeft = async () => {
  if (connected) {
    await motorC.setPower(-55);
  }
};

const resetLeft = async () => {
  if (connected) {
    await motorC.brake();
  }
};

const turnRight = async () => {
  if (connected) {
    await motorC.setPower(55);
  }
};

const resetRight = async () => {
  if (connected) {
    await motorC.brake();
  }
};

const lego = async (req, res) => {
  console.warn('FIRED!');
  console.warn(connected);
  console.warn(req.body);

  if (req.body.name === 'UP') {
    if (req.body.status) {
      await goForward();
    } else {
      await brakeForward();
    }
  }

  if (req.body.name === 'DOWN') {
    if (req.body.status) {
      await goBack();
    } else {
      await brakeBack();
    }
  }

  if (req.body.name === 'LEFT') {
    if (req.body.status) {
      await turnLeft();
    } else {
      await resetLeft();
    }
  }

  if (req.body.name === 'RIGHT') {
    if (req.body.status) {
      await turnRight();
    } else {
      await resetRight();
    }
  }

  res.sendStatus(200);
};

// eslint-disable-next-line import/prefer-default-export
export { lego };
