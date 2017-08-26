'use strict';

const AlertOver = require('./');

const client = new AlertOver({
  source: process.env.ALERT_SOURCE,
  receiver: process.env.ALERT_RECEIVER,
})

client.send('Hello', 'World').then(console.log).catch(console.log);
