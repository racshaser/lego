import { PoweredUP } from 'node-poweredup';

const poweredUP = new PoweredUP();

/* eslint-disable import/no-mutable-exports */
let legoHub = null;
let motorA = null;
let motorB = null;
let motorC = null;
let connected = false;
/* eslint-enable import/no-mutable-exports */

poweredUP.on('discover', async hub => {
  console.warn(`Discovered ${hub.name}!`);
  await hub.connect(); // Connect to the Hub
  motorA = await hub.waitForDeviceAtPort('A');
  motorB = await hub.waitForDeviceAtPort('B');
  motorC = await hub.waitForDeviceAtPort('C');
  connected = true;
  legoHub = hub;
  console.warn('Connected');
});

export { poweredUP, legoHub, motorA, motorB, motorC, connected };
