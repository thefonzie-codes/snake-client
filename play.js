const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');

let connectInput = connect();

setupInput(connectInput);