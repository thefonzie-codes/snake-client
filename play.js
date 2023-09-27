const connect = require('./client');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('connecting ...');
connect();

const setupInput = () => {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput)
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {

  if (key === '\u0003') {
  console.log("exiting")
  process.exit();
  }
};

handleUserInput();
setupInput();